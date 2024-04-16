const { response } = require('express');
var carController=require('../controller/carContoller');
var assert=require('assert');
const list = require('../data/data');
const axios = require('axios');

const client = axios.create({
    baseURL: 'http://localhost:3000/', // Base URL for all requests
    // You can also define headers, timeout, etc. here
  });

console.log("Test 1, getCarList");
client.get('/').then((response) => {
    assert (response.status==200);
    assert (response.data.length>0);
    //Compare the response with the list
    assert.deepEqual(response.data,list);
   console.log("Test 1 passed");
} 
   ).catch((error) => {
        console.log(error);
    });
console.log("Test 2, getCarById with id 2");
client.get('/car/2').then((response) => {
    assert (response.status==200);
    assert (response.data.id==2);
    console.log("The car is: ",response.data);
    assert.deepEqual(response.data,list[0]);
    console.log("Test 2 passed");
} 
   ).catch((error) => {
        console.log(error);
    });

console.log("Test 3, addCar with new car");
client.post('/addCar',{id: '131', name: "Ford", model: "Focus", color: "Red", price: 20000}).then((response) => {
    assert (response.status==200);
    assert (response.data.length==list.length+1);
    console.log("Test 3 passed");
} 
   ).catch((error) => {
        console.log(error);
    });
console.log("Test 4, addCar with existing car");
client.post('/addCar',{id: '2', name: "Ford", model: "Focus", color: "Red", price: 20000}).then((response) => {
    console.log(response.status);
    console.log("Test 4 passed");
} 
   ).catch((error) => {
        console.log(error);
    });
    
console.log("Test 5, addCar with missing field");
client.post('/addCar',{id: 131, name: "Ford", model: "Focus", color: "Red"}).then((response) => {
    assert (response.status==400);
    console.log("Test 5 passed");
} 
   ).catch((error) => {
        console.log(error);
    });
console.log("Test 6, updateCar with existing car");
client.put('/cars/',{id: 2, name: "Ford", model: "Focus", color: "Red", price: 20000}).then((response) => {
    assert (response.status==200);
    console.log("Test 6 passed");
} 
   ).catch((error) => {
        console.log(error);
    });
console.log("Test 7, updateCar with missing field");
client.put('/cars/',{id: 2, name: "Ford", model: "Focus", color: "Red"}).then((response) => {
    assert (response.status==400);
    console.log("Test 7 passed");
} 
   ).catch((error) => {
        console.log(error);
    });
console.log("Test 8, delete car with id 2");
client.delete('/cars/2').then((response) => {
    assert (response.status==200);
    console.log("Test 8 passed");
} 
   ).catch((error) => {
        console.log(error);
    });
console.log("Test 9, delete car with non-existing id");
client.delete('/cars/2').then((response) => {
    assert (response.status==404);
    console.log("Test 9 passed");
} 
   ).catch((error) => {
        console.log(error);
    });