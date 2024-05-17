import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import GlobalContext from '../GlobalContext.jsx';
const EndPoint="http://16.171.43.69:3000/";
function saveChanges({carId,carName,carModel,carColor,carPrice,motorId,token})
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
        axios.put(EndPoint+`cars/`, [newCar,token]).catch((error) => {
            console.log(error);
        });
        
}

function SaveButton({carName,carModel,carColor,carPrice,motorId}){
    const {carId} = useParams();
    const navigate=useNavigate();
    const globalData = useContext(GlobalContext);
    const token=globalData.token;
    return(
        <button onClick={() => {saveChanges({carId,carName,carModel,carColor,carPrice,motorId,token});navigate(`/cars/view/${carId}`);}}>Save</button>
    )
}

export default SaveButton;