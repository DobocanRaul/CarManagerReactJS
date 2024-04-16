import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

function deleteCar(carId) {
    axios.delete(`http://localhost:3000/cars/${carId}`).catch((error) => {
        console.log(error);
    }
    );
}
function DeleteConfirmation({list, setlist}){
    const {carId} = useParams();
    const navigate = useNavigate();
    console.log(list);
    return(<div>
            <h1>Are you sure you want to delete car with id {carId}</h1>
            <div style={{display:"flex",gap:"5px",justifyContent:"center"}}>
            <button onClick={() => navigate(`/`)}>Cancel</button>
            <button onClick={() => {deleteCar(carId) ;navigate(`/`)}}>Delete</button>
            </div>
     </div>)
}

export default DeleteConfirmation;