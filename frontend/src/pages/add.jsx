
import HomeButton from '../components/HomeButton.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import NotLoggedInFunction from '../functions/NotLoggedInFunction.jsx';
import { useContext } from 'react';
import GlobalContext from '../GlobalContext.jsx';
const EndPoint="http://16.171.43.69:3000/";
function AddCar(list,setlist,carId,carName,carModel,carColor,carPrice,motorId,token,user) {
    const newCar = {
        id: carId,
        name: carName,
        model: carModel,
        color: carColor,
        price: carPrice,
        motorId: motorId,
        username: user
    }
    
    
    axios.post(EndPoint+`addCar`, [newCar,token]).then((response) => {
        console.log(response);
        setlist([...list, newCar]);
    }).catch((error) => {
        console.log(error);
    });
}



function AddPage(){
    const globalData=useContext(GlobalContext);
    const token=globalData.token;
    const navigate = useNavigate();
    if(NotLoggedInFunction(token)==false)
      {
        useEffect(() => {
          navigate(`/login`);
        }, []);
      }
    const list=globalData.carlist;
    const setlist=globalData.setCarlist;
    const motorIds=globalData.motorlist;
    const user=globalData.user;
    const [carId, setCarId] = useState("");
    const [carName, setCarName] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carColor, setCarColor] = useState("");
    const [motorId, setMotorId] = useState("");
    const [carPrice, setCarPrice] = useState(0);
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
            <button onClick={() => {AddCar(list,setlist,carId,carName,carModel,carColor,carPrice,motorId,token,user);
             navigate(`/cars`)
            }
            }>Add</button>
            <HomeButton/>
            </div>
        </div>
    );
}

export default AddPage;