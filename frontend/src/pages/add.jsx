
import HomeButton from '../components/HomeButton.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Car from './car.jsx';

function AddCar(carId,carName,carModel,carColor,carPrice) {
    const newCar = {
        id: carId,
        name: carName,
        model: carModel,
        color: carColor,
        price: carPrice
    }
    axios.post('http://localhost:3000/addCar', newCar).catch((error) => {
        console.log(error);
    }
    );

}

function AddPage({list,setlist}){
    const [carId, setCarId] = useState("");
    const [carName, setCarName] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carColor, setCarColor] = useState("");
    const [carPrice, setCarPrice] = useState(0);
    const navigate = useNavigate();

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
            </section>
            <div class="buttongap">
            <button onClick={() => {AddCar(carId,carName,carModel,carColor,carPrice);
             navigate(`/`)
            }
            }>Add</button>
            <HomeButton/>
            </div>
        </div>
    );
}

export default AddPage;