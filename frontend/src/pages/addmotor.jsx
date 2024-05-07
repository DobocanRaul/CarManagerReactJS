import HomeButton from '../components/HomeButton.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Add(list,setlist,motorId, MotorType, MotorHorsepower, MotorCubicCm) {
    const newMotor = {
        id: motorId,
        motor_type: MotorType,
        horsepower: MotorHorsepower,
        cubic_cm: MotorCubicCm
    }
    setlist([...list, newMotor]);
}

function AddMotor({ list, setlist }) {
    const [motorId, setMotorId] = useState("");
    const [motorType, setMotorType] = useState("");
    const [motorHorsepower, setMotorHorsepower] = useState("");
    const [motorCubicCm, setMotorCubicCm] = useState("");
    const navigate = useNavigate();

    const handleMotorId = (e) => {
        setMotorId(e.target.value);
    }

    const handleMotorType = (e) => {
        setMotorType(e.target.value);
    }

    const handleMotorHorsepower = (e) => {
        setMotorHorsepower(e.target.value);
    }

    const handleMotorCubicCm = (e) => {
        setMotorCubicCm(e.target.value);
    }


    return (
        <div>
            <h1>Add a motor</h1>
            <section style={{ marginBottom: "10px" }}>
                <p>Motor ID</p>
                <input id="motorId" type="text" placeholder="Enter motor id" onChange={handleMotorId} />
                <p>Motor Type</p>
                <input id="motorName" type="text" placeholder="Enter motor name" onChange={handleMotorType} />
                <p>Motor Horsepower</p>
                <input id="motorModel" type="text" placeholder="Enter motor model" onChange={handleMotorHorsepower} />
                <p>Motor Cubic Capacity</p>
                <input id="motorColor" type="text" placeholder="Enter motor color" onChange={handleMotorCubicCm} />
            </section>
            <div class="buttongap">
                <button onClick={() => {
                    Add(list,setlist,motorId,motorType,motorHorsepower,motorCubicCm);
                    navigate(`/`)
                }}>Add Motor</button>
                <HomeButton />
            </div>
        </div>
    );
}

export default AddMotor;
