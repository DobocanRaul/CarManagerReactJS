import HomeButton from '../components/HomeButton.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import NotLoggedInFunction from '../functions/NotLoggedInFunction.jsx';
import { useContext } from 'react';
import GlobalContext from '../GlobalContext';
function Add(motorId, MotorType, MotorHorsepower, MotorCubicCm,token,setlist,list) {
    const newMotor = {
        id: motorId,
        motor_type: MotorType,
        horsepower: MotorHorsepower,
        cubic_cm: MotorCubicCm
    }
    console.log(newMotor);
    axios.post('http://localhost:3000/addMotor', [newMotor,token]).then((response) => {
        console.log(response);
        setlist([...list, newMotor]);
    }).catch((error) => {
        console.log(error);
    });

}

function AddMotor() {
    const globalData=useContext(GlobalContext);
    const token=globalData.token;
    const navigate = useNavigate();
    if(NotLoggedInFunction(token)==false)
      {
        useEffect(() => {
          navigate(`/login`);
        }, []);
      }
    const [motorId, setMotorId] = useState("");
    const [motorType, setMotorType] = useState("");
    const [motorHorsepower, setMotorHorsepower] = useState("");
    const [motorCubicCm, setMotorCubicCm] = useState("");
    const setmotorlist=globalData.setMotorlist;
    const motorlist=globalData.motorlist;
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
                    Add(motorId,motorType,motorHorsepower,motorCubicCm,token,setmotorlist,motorlist);
                    navigate(`/cars`)
                }}>Add Motor</button>
                <HomeButton />
            </div>
        </div>
    );
}

export default AddMotor;
