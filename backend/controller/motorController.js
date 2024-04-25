var faker = require('faker');

const fs=require('fs');
var list = [];
fs.readFile('data/motordata.json', 'utf8', (err, data) => {

    if (err) {
        console.error(err)
        return
    }
    list = JSON.parse(data);
}
);

function writeToJson(){
    fs.writeFile('data/motordata.json', JSON.stringify(list), (err) => {
        if (err) {
            console.error(err)
            return
        }
    });
}

const getMotorList = (req, res) => {
    if(list.length > 0){
     res.json(list);
    }
    else {
         res.status(404).send('No Motors found');
    }
}

const getMotorById = (req, res) => {
    const id = req.params.id;
    const motor = list.find(motor => motor.id == id);
    if(motor){
        res.json(motor);
    } else {
        res.status(404).send('motor not found');
    }
}

const addMotor = (req, res) => {
    const newMotor = req.body;
    //Verify if car already exists or if the car has all the required fields
    var index;
    index = list.findIndex(motor => motor.id === newMotor.id);
    if(index !== -1 ){
        res.status(400).send('Motor already exists');
    } else if(!newMotor.id || !newMotor.motor_type || !newMotor.horsepower || !newMotor.cubic_cm){
        res.status(400).send('Please provide all required fields');
    } else {
        console.log("Motor added successfully");
        list.push(newMotor);
        writeToJson();
        res.json(newMotor);
    }
        
}

const updateMotor = (req, res) => {
    const passedMotor = req.body;
    console.log (passedMotor);
    const motor = list.filter(motor => motor.id == passedMotor.id);
    const motorIndex = list.findIndex(motor => motor.id == passedMotor.id);
    if (motor) {
        const updatedMotor = req.body;
        if (!updatedMotor.motor_type || !updatedMotor.horsepower || !updatedMotor.cubic_cm) {
            res.status(400).send('Please provide all required fields');
        }
        if (typeof updatedMotor.horsepower !== 'number' || typeof updatedMotor.cubic_cm !== 'number') {
            res.status(400).send('Horsepower and cubic_cm should be numbers');
        }

        list[motorIndex] = updatedMotor;
        writeToJson();

    } else {
        res.status(404).send('Motor not found');
    }

}

const deleteMotor = (req, res) => {
    const id = req.params.id;
    const motor = list.find(motor => motor.id == id);
    if(motor){
        list = list.filter(motor => motor.id != id);
        res.json(list);
    } else {
        res.status(404).send('Motor not found');
    }
    writeToJson();
}

module.exports = {
    getMotorList,
    getMotorById,
    addMotor,
    updateMotor,
    deleteMotor
};





