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


function Home() {
    NotLoggedInFunction();
      
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
      <AddButton/>
      </div>
    </div>
  );

}

export default Home;