
import HomeButton from '../components/HomeButton.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Car from './car.jsx';
import {Dropdown} from 'primereact/dropdown';
import Select from 'react-select';
import checkIfConnected from '../components/CheckIfConnected.jsx';
function AddCar(list,setlist,carId,carName,carModel,carColor,carPrice,motorId) {
    const newCar = {
        id: carId,
        name: carName,
        model: carModel,
        color: carColor,
        price: carPrice,
        motorId: motorId
    }
    
    setlist([...list, newCar]);
}



function AddPage({list,setlist,motorIds}){
    const [carId, setCarId] = useState("");
    const [carName, setCarName] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carColor, setCarColor] = useState("");
    const [motorId, setMotorId] = useState("");
    const [carPrice, setCarPrice] = useState(0);
    const navigate = useNavigate();
    const ids=motorIds.map((car) => car.id);
    const handleCarId = (e) => {
        setCarId(e.target.value);
    }

    const handleCarName = (e) => {
        setCarName(e.target.value);
    }

    const handleCarModel = (e) => {
        setCarModel(e.target.value);
    }

    const handleCarColor = (e) => {
        setCarColor(e.target.value);
    }

    const handleCarPrice = (e) => {
        setCarPrice(e.target.value);
    }
    const handleMotorId = (e) => {
        setMotorId(e.target.value);
    }

    return (
        <div>
            <h1>Add a car</h1>
            <section style={{marginBottom:"10px"}}>
                <p>CarID</p>
                <input id="carId" type="text" placeholder="Enter car id" onChange={handleCarId}/>    
                <p>Car Name</p>
                <input id="carName" type="text" placeholder="Enter car name" onChange={handleCarName}/>
                <p>Car Model</p>
                <input id="carModel" type="text" placeholder="Enter car model"onChange={handleCarModel}/>
                <p>Car Color</p>
                <input id="carColor" type="text" placeholder="Enter car color" onChange={handleCarColor}/>
                <p>Car Price</p>
                <input id="carPrice" type="text" placeholder="Enter car price" onChange={handleCarPrice}/>
                <p>
                    <p>Motor Id </p>  
                    <select value={motorId} onChange={handleMotorId} style={{width:"180px"}}>
                        <option value="" disabled hidden>Select an option</option>
                        {ids.map((id) => {
                            return <option value={id}>{id}</option>
                        })}
                    </select>
                </p>
            </section>
            <div class="buttongap">
            <button onClick={() => {AddCar(list,setlist,carId,carName,carModel,carColor,carPrice,motorId);
             navigate(`/`)
            }
            }>Add</button>
            <HomeButton/>
            </div>
        </div>
    );
}

export default AddPage;