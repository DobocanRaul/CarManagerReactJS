import React, { useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import AddButton from '../components/AddButton';
import ChartButton from '../components/ChartButton';
import TableContainer  from '../components/TableContainer';
import axios from 'axios';
import { useEffect } from 'react';
import MotorContainer from '../components/MotorContainer';
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


function Home({carlist,setCarlist,motorlist,setMotorlist,localchanges,setLocalChanges}) {
    const [isConnected, setIsConnected] = useState(true);
    populatelists(setCarlist,setMotorlist);


  const navigate = useNavigate();
  console.log(isConnected);
  
  return (
    <div class="body divcenter" >
      <div style={{display:"flex", flexDirection:"column", gap:"10px", marginLeft:"30px"}}>
      <TableContainer carlist={carlist} cardata={carlist}/>
      <MotorContainer motorlist={motorlist} motorsdata={motorlist}/>
      </div>
      <div style={{display:"flex",gap:"10px", alignItems:"center"}}>
      <ChartButton/>
      <AddButton/>
      </div>
    </div>
  );

}

export default Home;