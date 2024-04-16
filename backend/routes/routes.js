const express = require('express');
const router = express.Router();
const carcontroller=require('../controller/carContoller');

router.get('/', carcontroller.getCarList);
router.get('/car/:id', carcontroller.getCarById);
router.post('/addCar', carcontroller.addCar);
router.put('/cars/', carcontroller.updateCar);
router.delete('/cars/:id', carcontroller.deleteCar);

module.exports = router;