const express = require('express');
const router = express.Router();
const carcontroller=require('../controller/carContoller');
const motorcontroller=require('../controller/motorController');
const usercontroller=require('../controller/userController');
router.post('/credentials', usercontroller.getUserAndPass);
router.post('/validateToken', usercontroller.validateToken);
router.post('/login', usercontroller.login);
router.post('/token', usercontroller.getToken);
router.post('/register', usercontroller.addUser);
router.get('/', carcontroller.getCarList);
router.get('/car/:id', carcontroller.getCarById);
router.post('/addCar', carcontroller.addCar);
router.post('/addCars', carcontroller.addCars);
router.put('/cars/', carcontroller.updateCar);
router.put('/cars', carcontroller.updateCars);
router.delete('/cars/:id/:token', carcontroller.deleteCar);
router.delete('/cars', carcontroller.deleteCars);
router.get('/motor', motorcontroller.getMotorList);
router.get('/motor/:id', motorcontroller.getMotorById);
router.post('/addMotor', motorcontroller.addMotor);
router.post('/addMotors', motorcontroller.addMotors);
router.put('/motor/', motorcontroller.updateMotor);
router.put('/motor', motorcontroller.updateMotors);
router.delete('/motor/:id/:token', motorcontroller.deleteMotor);
router.delete('/motor', motorcontroller.deleteMotors);
module.exports = router;