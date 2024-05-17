import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import NotLoggedInFunction from '../functions/NotLoggedInFunction';
import {useContext} from 'react';
import GlobalContext from '../GlobalContext';
import { useEffect } from 'react';
const EndPoint="http://16.171.43.69:3000/";
function populatelists(setCarlist,setMotorlist){

    axios.get(EndPoint)
    .then((response) => {
        setCarlist(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  
    axios.get(EndPoint+'motor')
    .then((response) => {
      setMotorlist(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  

function deleteMotor(motorId,setCarlist,setMotorlist,token) {
    axios.delete(EndPoint+`motor/${motorId}/${token}`).catch((error) => {
        console.log(error);
    }
    );
    populatelists(setCarlist, setMotorlist);
}
function DeleteMotor(){
    const globalData=useContext(GlobalContext);
    const token=globalData.token;
    const navigate = useNavigate();
    if(NotLoggedInFunction(token)==false)
      {
        useEffect(() => {
          navigate(`/login`);
        }, []);
      }
    const {motorId} = useParams();
    const setcarlist=globalData.setCarlist;
    const setmotorlist=globalData.setMotorlist;
    return(<div>
            <h1>Are you sure you want to delete the motor with id {motorId}</h1>
            <div style={{display:"flex",gap:"5px",justifyContent:"center"}}>
            <button onClick={() => navigate(`/cars`)}>Cancel</button>
            <button onClick={() => {deleteMotor(motorId,setcarlist,setmotorlist,token) ;navigate(`/cars`)}}>Delete</button>
            </div>
     </div>)
}

export default DeleteMotor;