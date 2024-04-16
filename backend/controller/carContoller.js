var list= require('../data/data');
var faker = require('faker');
function addCarToList(){
    const entity = {
        id: faker.datatype.uuid(),
        name: faker.vehicle.manufacturer(),
        model: faker.datatype.number({ min: 1990, max: 2024 }),
        color: faker.vehicle.color(),
        price: faker.datatype.number({ min: 10000, max: 100000 })
      };
    list.push(entity);
}

const getCarList = (req, res) => {
    if(list.length > 0){
     res.json(list);}
     else {
         res.status(404).send('No cars found');
     }
}

const getCarById = (req, res) => {
    const id = req.params.id;
    const car = list.find(car => car.id === id);
    if(car){
        res.json(car);
    } else {
        res.status(404).send('Car not found');
    }
}

const addCar = (req, res) => {
    const newCar = req.body;
    //Verify if car already exists or if the car has all the required fields
    var index;
    index = list.findIndex(car => car.id === newCar.id);
    if(index !== -1 ){
        res.status(400).send('Car already exists');
    } else if(!newCar.id || !newCar.name || !newCar.model || !newCar.color || !newCar.price){
        res.status(400).send('Please provide all required fields');
    } else {
        console.log("Car added successfully");
        list.push(newCar);
        res.json(list);
    }    
}

const updateCar = (req, res) => {
    const passedCar=req.body;
    const car = list.filter(car => car.id === passedCar.id);
    const carIndex = list.findIndex(car => car.id === passedCar.id);
    if(car){
        const updatedCar = req.body;
        if (!updatedCar.name || !updatedCar.model || !updatedCar.color || !updatedCar.price){
            res.status(400).send('Please provide all required fields');
        }
        if(typeof updatedCar.price !== 'number'){
            res.status(400).send('Price should be a number');
        }

        list[carIndex]= updatedCar;
        res.json(list);

    } 
    else {
        res.status(404).send('Car not found');
    }
}

const deleteCar = (req, res) => {
    const id = req.params.id;
    const car = list.find(car => car.id === id);
    if(car){
        list = list.filter(car => car.id !== id);
        res.json(list);
    } else {
        res.status(404).send('Car not found');
    }
}

module.exports = {
    addCarToList,
    getCarList,
    getCarById,
    addCar,
    updateCar,
    deleteCar
};





