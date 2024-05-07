import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import NotLoggedInFunction from '../functions/NotLoggedInFunction';

function deleteCar(carId) {
    axios.delete(`http://localhost:3000/cars/${carId}`).catch((error) => {
        console.log(error);
    }
    );
}
function DeleteConfirmation(){
    NotLoggedInFunction();
    const {carId} = useParams();
    const navigate = useNavigate();
    return(<div>
            <h1>Are you sure you want to delete car with id {carId}</h1>
            <div style={{display:"flex",gap:"5px",justifyContent:"center"}}>
            <button onClick={() => navigate(`/`)}>Cancel</button>
            <button onClick={() => {deleteCar(carId) ;navigate(`/cars`)}}>Delete</button>
            </div>
     </div>)
}

export default DeleteConfirmation;