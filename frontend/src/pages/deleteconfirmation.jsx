import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import NotLoggedInFunction from '../functions/NotLoggedInFunction';
import {useContext} from 'react';
import GlobalContext from '../GlobalContext';

function populatelists(setCarlist,setMotorlist){

    axios.get('http://localhost:3000/')
    .then((response) => {
        setCarlist(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  
    axios.get('http://localhost:3000/motor')
    .then((response) => {
      setMotorlist(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  

function deleteCar(carId,setCarlist,setMotorlist) {
    axios.delete(`http://localhost:3000/cars/${carId}`).catch((error) => {
        console.log(error);
    }
    );
    populatelists(setCarlist, setMotorlist);

}
function DeleteConfirmation(){
    NotLoggedInFunction();
    const {carId} = useParams();
    const navigate = useNavigate();
    const globalData=useContext(GlobalContext);
    const setcarlist=globalData.setCarlist;
    const setmotorlist=globalData.setMotorlist;
    return(<div>
            <h1>Are you sure you want to delete car with id {carId}</h1>
            <div style={{display:"flex",gap:"5px",justifyContent:"center"}}>
            <button onClick={() => navigate(`/cars`)}>Cancel</button>
            <button onClick={() => {deleteCar(carId,setcarlist,setmotorlist) ;navigate(`/cars`)}}>Delete</button>
            </div>
     </div>)
}

export default DeleteConfirmation;