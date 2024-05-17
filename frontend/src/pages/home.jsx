import React, { useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import AddButton from '../components/AddButton';
import ChartButton from '../components/ChartButton';
import TableContainer  from '../components/TableContainer';
import axios from 'axios';
import { useEffect,useContext } from 'react';
import MotorContainer from '../components/MotorContainer';
import GlobalContext from '../GlobalContext';
import SeeCredentialsButton from '../components/SeeCredentialsButton';
import NotLoggedInFunction from '../functions/NotLoggedInFunction';

const EndPoint="http://16.171.43.69:3000/";

function populatelists(setCarlist,setMotorlist,token){
  axios.post(EndPoint,[token])
  .then((response) => {
    setCarlist(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

  axios.post(EndPoint+'motor',[token])
  .then((response) => {
    setMotorlist(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}

function Home() {
  const globalData=useContext(GlobalContext);
    const token=globalData.token;
    const navigate = useNavigate();
    if(NotLoggedInFunction(token)==false)
      {
        useEffect(() => {
          navigate(`/login`);
        }, []);
      }
    const setCarlist=globalData.setCarlist;
    const setMotorlist=globalData.setMotorlist;
    useEffect(() => {
    populatelists(setCarlist,setMotorlist,token);
    }, []);
    const setToken=globalData.setToken;
    const user=globalData.user;
    const password=globalData.password;
    const setresponse=globalData.setResponse;
    const response=globalData.response;
    return (
    <div class="body divcenter" >
      <div style={{display:"flex", flexDirection:"column", gap:"10px", marginLeft:"30px"}}>
      <TableContainer/>
      <MotorContainer/>
      </div>
      <div style={{display:"flex",gap:"10px", alignItems:"center"}}>
      <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
      <ChartButton/>
      <SeeCredentialsButton/>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        <button >Test</button>
        <button style={{width:"140px", height:"100px"}} onClick={() => {setToken("");navigate(`/login`);  }}>Logout</button>
      </div>
      <AddButton/>
      </div>
    </div>
  );

}

export default Home;