import React from 'react';
import {useParams} from 'react-router-dom';
import CarDetails from '../components/CarDetails';
import { useState } from "react";
import Home from './home';
import HomeButton from '../components/HomeButton.jsx';
import SaveButton from '../components/SaveButton.jsx';
function EditPage({list,setlist,motorlist}){
    const {carId} = useParams();
    const car=list.filter(car => car.id==carId);
    const [carName, setCarName] = useState(car[0].name);
    const [carModel, setCarModel] = useState(car[0].model);
    const [carColor, setCarColor] = useState(car[0].color);
    const [carPrice, setCarPrice] = useState(car[0].price);
    const [motorId, setMotorId] = useState(car[0].motorId);
    const ids=motorlist.map((car) => car.id);
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
            <h1>Edit Page</h1>
            <div style={{display:"flex",flexDirection:"row",gap:"30px"}}>
                <div>
            <CarDetails carId={carId} list={list}/>
            <HomeButton/>
            <SaveButton carName={carName} carColor={carColor} carPrice={carPrice} carModel={carModel} motorId={motorId}/>
                </div>
            <div>
            <h1>Edit car</h1>
            <section style={{marginBottom:"10px"}}> 
                <p>Car Name</p>
                <input id="editName" type="text" value={carName} placeholder="Enter car name" onChange={handleCarName} contentEditable="true"   />
                <p>Car Model</p>
                <input id="editModel" type="text" value={carModel} placeholder="Enter car model"onChange={handleCarModel}/>
                <p>Car Color</p>
                <input id="editColor" type="text" value={carColor} placeholder="Enter car color" onChange={handleCarColor}/>
                <p>Car Price</p>
                <input id="editPrice" type="text" value={carPrice} placeholder="Enter car price" onChange={handleCarPrice}/>
                <p>Motor Id </p>  
                    <select value={motorId} onChange={handleMotorId} style={{width:"180px"}}>
                        <option value="" disabled hidden>Select an option</option>
                        {ids.map((id) => {
                            return <option value={id}>{id}</option>
                        })}
                    </select>
                </section>
            </div>
            </div>
        </div>
    )
}

export default EditPage;