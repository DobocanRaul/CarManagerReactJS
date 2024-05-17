import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../GlobalContext';
import {useContext} from 'react';
const EndPoint="http://16.171.43.69:3000/";
function saveChanges({motorId,motorType,motorHorsepower,motorCubicCm,token})
    {
        console.log("Saving changes!");
        const newMotor = {
            id: motorId,
            motor_type: motorType,
            horsepower: motorHorsepower,
            cubic_cm: motorCubicCm
        }
        axios.put(EndPoint+`motor/`, [newMotor,token]).catch((error) => {
            console.log(error);
        });
        
}

function SaveButton({motorType,motorHorsepower,motorCubicCm}){
    const {motorId} = useParams();
    const navigate=useNavigate();
    const globalData=useContext(GlobalContext);
    const token=globalData.token;
    return(
        <button onClick={() => {saveChanges({motorId,motorType,motorHorsepower,motorCubicCm,token});navigate(`/view/motor/${motorId}`);}}>Save</button>
    )
}

export default SaveButton;