var faker = require('faker');
const mysql=require("mysql2");
const fs=require('fs');
const { verify } = require('crypto');
var list = [];

const db=mysql.createConnection({
    host:"cardatabase.crw0ce86sgbc.eu-north-1.rds.amazonaws.com",
    user:"admin",
    password:"423607raul",
    database:"MppDB",
});    


async function verifyToken(token) {
    const result = await db
      .promise()
      .query("SELECT token FROM user WHERE token=?", [token])
      .then(([rows, fields]) => {
        return rows;
      });
    return result;
  }

const getMotorList = (req, res) => {
    const query="SELECT * FROM motors";
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
    const query="SELECT * FROM motors WHERE id=?";
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
    const newMotor = req.body[0];
    const token=req.body[1];
    //Verify if car already exists or if the car has all the required fields
    verifyToken(token).then((result) => {
        if (result.length > 0) {
            if(result[0].token==token){
                const query="Insert into motors (id,motor_type,horsepower,cubic_cm) values(?,?,?,?)";
                db.query(query,[newMotor.id,newMotor.motor_type,newMotor.horsepower,newMotor.cubic_cm],(err,result)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(result);
                        res.json(result);
                        }});
            }
            else{
                res.json("Invalid token");
            }
        }
        else{
            res.json("Invalid token");
        }
    }); 
}
const addMotors = (req, res) => {
    const Motors = req.body;
    //Verify if car already exists or if the car has all the required fields
    const query="Insert into motors (id,motor_type,horsepower,cubic_cm) values(?,?,?,?)";
    Motors.array.forEach(element => {
        db.query(query,[element.id,element.motor_type,element.horsepower,element.cubic_cm],(err,result)=>{
            if(err)
                console.log(err);
        });
        }
    );

        
}

const updateMotor = (req, res) => {
    const passedMotor = req.body[0];
    const token=req.body[1];
    verifyToken(token).then((result) => {
        if (result.length > 0) {
            if(result[0].token==token){
                const query="UPDATE motors SET motor_type=?,horsepower=?,cubic_cm=? WHERE id=?";
                db.query(query,[passedMotor.motor_type,passedMotor.horsepower,passedMotor.cubic_cm,passedMotor.id],(err,result)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(result);
                        res.json(result);
                        }});
            }
            else{
                res.json("Invalid token");
            }
        }
        else{
            res.json("Invalid token");
        }
    });
}
const updateMotors = (req, res) => {
    const Motors = req.body;
    //Verify if car already exists or if the car has all the required fields
    const query="UPDATE motors SET motor_type=?,horsepower=?,cubic_cm=? WHERE id=?";
    Motors.array.forEach(element => {
        db.query(query,[element.motor_type,element.horsepower,element.cubic_cm,element.id],(err,result)=>{
            if(err)
                console.log(err);
        });
        }
    );

        
}
const deleteMotor = (req, res) => {
    const id = req.params.id;
    const token=req.params.token;
    verifyToken(token).then((result) => {
        if (result.length > 0) {
            if(result[0].token==token){
                const query="DELETE FROM motors WHERE id=?";
                db.query(query,[id],(err,result)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(result);
                        res.json(result);
                        }});
            }
            else{
                res.json("Invalid token");
            }
        }
        else{
            res.json("Invalid token");
        }
    });

}

const deleteMotors = (req, res) => {
    const ids = req.body;
    const query="DELETE FROM motors WHERE id=?";
    ids.array.forEach(element => {
        db.query(query,[element.id],(err,result)=>{
            if(err)
                console.log(err);
        });
        }
    );

        
}

module.exports = {
    getMotorList,
    getMotorById,
    addMotor,
    updateMotor,
    deleteMotor,
    addMotors,
    updateMotors,
    deleteMotors
};





