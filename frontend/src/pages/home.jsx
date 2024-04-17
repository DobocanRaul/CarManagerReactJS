import React from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import AddButton from '../components/AddButton';
import ChartButton from '../components/ChartButton';
import TableContainer  from '../components/TableContainer';
import axios from 'axios';
import { useEffect } from 'react';
import MotorContainer from '../components/MotorContainer';
function Home({carlist,setCarlist,motorlist,setMotorlist}) {
    useEffect(() => {
    axios.get('http://localhost:3000/')
    .then((response) => {
      setCarlist(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  useEffect(() => {
    axios.get('http://localhost:3000/motor')
    .then((response) => {
      setMotorlist(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  , []);


  const navigate = useNavigate();
  if(carlist.length > 0){
  
  return (
    <div class="body divcenter" >
      <div style={{display:"flex", flexDirection:"column", gap:"10px", marginLeft:"15px"}}>
      <TableContainer carlist={carlist} cardata={carlist}/>
      <MotorContainer motorlist={motorlist} motorsdata={motorlist}/>
      </div>
      <div style={{display:"flex",gap:"10px"}}>
      <ChartButton/>
      <AddButton/>
      </div>
    </div>
  );
  }
  else{
    return (
      <div class="body divcenter" >
        <h1>No connection to server!</h1>
      </div>
    );
  }
}

export default Home;