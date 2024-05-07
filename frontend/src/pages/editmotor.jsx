import React from 'react';
import {useParams} from 'react-router-dom';
import { useState } from "react";
import HomeButton from '../components/HomeButton.jsx';
import MotorDetails from '../components/MotorDetails';
import SaveMotor from '../components/SaveMotor';
import NotLoggedInFunction from '../functions/NotLoggedInFunction.jsx';
import {useContext} from 'react';
import GlobalContext from '../GlobalContext';
function EditMotor(){
    NotLoggedInFunction();

    const globalData=useContext(GlobalContext);
    const list=globalData.motorList;
    const {motorId} = useParams();
    const motor=list.filter(motor => motor.id==motorId);
    const [motorType, setMotorType] = useState(motor[0].motor_type);
    const [motorHorsepower, setMotorHorsepower] = useState(motor[0].horsepower);
    const [motorCubicCm, setMotorCubicCm] = useState(motor[0].cubic_cm);
    const handleMotorType = (e) => {
        setMotorType(e.target.value);
    }

    const handleMotorHorsepower = (e) => {
        setMotorHorsepower(e.target.value);
    }

    const handleMotorCubicCapacity = (e) => {
        setMotorCubicCm(e.target.value);
    }

    return (
        <div> 
            <h1>Edit Page</h1>
            <div style={{display:"flex",flexDirection:"row",gap:"30px"}}>
                <div>
            <MotorDetails MotorId={motorId}/>
            <HomeButton/>
            <SaveMotor motorId={motorId} motorType={motorType} motorHorsepower={motorHorsepower} motorCubicCm={motorCubicCm} />
                </div>
            <div>
            <h1>Edit Motor</h1>
            <section style={{marginBottom:"10px"}}> 
                <p>Motor Type</p>
                <input id="editName" type="text" value={motorType} placeholder="Enter motor type" onChange={handleMotorType} contentEditable="true"   />
                <p>Motor HorsePower</p>
                <input id="editModel" type="text" value={motorHorsepower} placeholder="Enter horsepower"onChange={handleMotorHorsepower}/>
                <p>Motor Cubic cms</p>
                <input id="editColor" type="text" value={motorCubicCm} placeholder="Enter cubic capacity" onChange={handleMotorCubicCapacity}/>
            </section>
            </div>
            </div>
        </div>
    )
}

export default EditMotor;