import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function saveChanges({motorId,motorType,motorHorsepower,motorCubicCm})
    {
        console.log("Saving changes!");
        const newMotor = {
            id: motorId,
            motor_type: motorType,
            horsepower: motorHorsepower,
            cubic_cm: motorCubicCm
        }
        axios.put(`http://localhost:3000/motor/`, newMotor).catch((error) => {
            console.log(error);
        });
        
}

function SaveButton({motorType,motorHorsepower,motorCubicCm}){
    const {motorId} = useParams();
    const navigate=useNavigate();
    return(
        <button onClick={() => {saveChanges({motorId,motorType,motorHorsepower,motorCubicCm});navigate(`/view/motor/${motorId}`);}}>Save</button>
    )
}

export default SaveButton;