import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function saveChanges({carId,carName,carModel,carColor,carPrice,motorId})
    {
        console.log("Saving changes!");
        const newCar = {
            id: carId,
            name: carName,
            model: carModel,
            color: carColor,
            price: carPrice
        ,motorId: motorId
        }
        axios.put(`http://localhost:3000/cars/`, newCar).catch((error) => {
            console.log(error);
        });
        
}

function SaveButton({carName,carModel,carColor,carPrice,motorId}){
    const {carId} = useParams();
    const navigate=useNavigate();
    return(
        <button onClick={() => {saveChanges({carId,carName,carModel,carColor,carPrice,motorId});navigate(`/view/${carId}`);}}>Save</button>
    )
}

export default SaveButton;