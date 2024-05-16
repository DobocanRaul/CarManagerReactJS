const mysql=require("mysql2");
const fs=require('fs');
var list = [];
var faker = require('faker');

const db=mysql.createConnection({
    host:"cardatabase.crw0ce86sgbc.eu-north-1.rds.amazonaws.com",
    user:"admin",
    password:"423607raul",
    database:"MppDB",
});  


const getToken = (req, res) => {
    const query="SELECT token FROM user WHERE username=? AND password=? AND token=?";
    const user = req.body;

    db.query(query,[user.username,user.password,user.token],(err,result)=>{
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
const login = (req, res) => {
    const newtoken= faker.datatype.uuid();
    const query1="UPDATE user SET token=? WHERE username=? AND password=?";
    db.query(query1,[newtoken,req.body.username,req.body.password],(err,result)=>{if(err){console.log(err);}});
    const query="SELECT token FROM user WHERE username=? AND password=?";
    const user = req.body;
    db.query(query,[user.username,user.password],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            if(result.length>0){
                res.json(result);
            }
            else{
                res.json("Invalid credentials");
            }
            }});
}


const validateToken = (req, res) => {
    const query="SELECT token FROM user WHERE token=?";
    const token = req.body;
    db.query(query,[token],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result.length>0){
                res.json("Valid token");
            }
            else{
                res.json("Invalid token");
            }
            }}
    );
}

const addUser = (req, res) => {
    
    const newUser = req.body;
    const token= faker.datatype.uuid();
    const timestamp= new Date();
    timestamp.setHours(timestamp.getHours() + 1);
    const query="Insert into user values(?,?,?,?)";
    db.query(query,[newUser.username,newUser.password,token,timestamp],(err,result)=>{
        if(err){
            res.json("Username already exists");
            console.log(err);
        }
        else{
            res.json("Registration successful");
        }
        });
}

const getUserAndPass= (req,res) =>{

    const query="SELECT username,password FROM user where token=?";
    const token=req.body;
    db.query(query,[token],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(result);
        }
    });
}

module.exports={getToken,addUser,getUserAndPass,validateToken,login};