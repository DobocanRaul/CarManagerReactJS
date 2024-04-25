var faker = require('faker');
const mysql=require("mysql2");
const fs=require('fs');
var list = [];

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"mppdb",
});    


const getMotorList = (req, res) => {
    const query="SELECT * FROM Motors";
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(result);
            }});
}

const getMotorById = (req, res) => {
    const id = req.params.id;
    const query="SELECT * FROM Motors WHERE id=?";
    db.query(query,[id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.json(result);
            }});
}

const addMotor = (req, res) => {
    const newMotor = req.body;
    //Verify if car already exists or if the car has all the required fields
    const query="Insert into Motors (id,motor_type,horsepower,cubic_cm) values(?,?,?,?)";
    db.query(query,[newMotor.id,newMotor.motor_type,newMotor.horsepower,newMotor.cubic_cm],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.json(result);
            }});
        
}

const updateMotor = (req, res) => {
    const passedMotor = req.body;
    const query="UPDATE Motors SET motor_type=?,horsepower=?,cubic_cm=? WHERE id=?";
    db.query(query,[passedMotor.motor_type,passedMotor.horsepower,passedMotor.cubic_cm,passedMotor.id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.json(result);
            }});

}

const deleteMotor = (req, res) => {
    const id = req.params.id;
    const query="DELETE FROM Motors WHERE id=?";
    db.query(query,[id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.json(result);
            }});
}

module.exports = {
    getMotorList,
    getMotorById,
    addMotor,
    updateMotor,
    deleteMotor
};





