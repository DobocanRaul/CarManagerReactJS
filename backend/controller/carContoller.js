
var motorlist= require('../data/motordata');
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

function addCarToList(){
    const entity = {
        id: faker.datatype.uuid(),
        name: faker.vehicle.manufacturer(),
        model: faker.datatype.number({ min: 1990, max: 2024 }),
        color: faker.vehicle.color(),
        price: faker.datatype.number({ min: 10000, max: 100000 })
      };
    list.push(entity);
    writeToJson();
    console.log(list);
}

const getCarList = (req, res) => {
    const query="SELECT * FROM Cars";
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(result);
            }});
}
    

const getCarById = (req, res) => {
    const id = req.params.id;
    const query="SELECT * FROM Cars WHERE id=?";
    db.query(query,[id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.json(result);
            }});
}

const addCar = (req, res) => {
    const newCar = req.body;
    //Verify if car already exists or if the car has all the required fields
    const query="Insert into Cars (id,name,model,color,price,motorId) values(?,?,?,?,?,?)";
    db.query(query,[newCar.id,newCar.name,newCar.model,newCar.color,newCar.price,newCar.motorId],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.json(newCar);
            }});  
}

const updateCar = (req, res) => {
    const passedCar=req.body;
    const query="UPDATE Cars SET name=?,model=?,color=?,price=?,motorId=? WHERE id=?";
    db.query(query,[passedCar.name,passedCar.model,passedCar.color,passedCar.price,passedCar.motorId,passedCar.id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.json(passedCar);
            }});
    
}

const deleteCar = (req, res) => {
    const id = req.params.id;
    const query="DELETE FROM Cars WHERE id=?";
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
    addCarToList,
    getCarList,
    getCarById,
    addCar,
    updateCar,
    deleteCar
};





