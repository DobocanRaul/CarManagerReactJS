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
import ValidateTokenFunction from '../functions/ValidateTokenFunction';


function Home() {

    if(NotLoggedInFunction()==false){
        const navigate = useNavigate();
        useEffect(() => {
        navigate('/login');
        },[]);
    }
    const [response,setResponse]=useState("");
    const globalData=useContext(GlobalContext);
    const token=globalData.token;
    const setToken=globalData.setToken;
    const user=globalData.user;
    const password=globalData.password;
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
        <button onClick={()=>{ValidateTokenFunction(user,password,setResponse); console.log(response==token)}}>Test</button>
        <button style={{width:"140px", height:"100px"}} onClick={() => {setToken("");}}>Logout</button>
      </div>
      <AddButton/>
      </div>
    </div>
  );

}

export default Home;