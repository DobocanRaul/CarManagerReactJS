const mysql=require("mysql2");
const fs=require('fs');
var list = [];
var faker = require('faker');

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"mppdb",
});  


const getToken = (req, res) => {
    const query="SELECT token FROM User WHERE username=? AND password=?";
    const user = req.body;
    db.query(query,[user.username,user.password],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result.length>0){
                res.json(result);
            }
            else{
                res.json("Invalid credentials");
            }
            }});
}

const addUser = (req, res) => {
    const newUser = req.body;
    const id= faker.datatype.uuid();
    const token= faker.datatype.uuid();
    const timestamp= new Date();
    timestamp.setHours(timestamp.getHours() + 1);
    const query="Insert into User values(?,?,?,?,?)";
    db.query(query,[id,newUser.username,newUser.password,token,timestamp],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            }});
}

module.exports={getToken};