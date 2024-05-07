import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import NotLoggedInFunction from '../functions/NotLoggedInFunction';

function deleteMotor(motorId) {
    axios.delete(`http://localhost:3000/motor/${motorId}`).catch((error) => {
        console.log(error);
    }
    );
}
function DeleteMotor(){
    NotLoggedInFunction();
    const {motorId} = useParams();
    const navigate = useNavigate();
    return(<div>
            <h1>Are you sure you want to delete the motor with id {motorId}</h1>
            <div style={{display:"flex",gap:"5px",justifyContent:"center"}}>
            <button onClick={() => navigate(`/`)}>Cancel</button>
            <button onClick={() => {deleteMotor(motorId) ;navigate(`/`)}}>Delete</button>
            </div>
     </div>)
}

export default DeleteMotor;