import React from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import AddButton from '../components/AddButton';
import ChartButton from '../components/ChartButton';
import TableContainer  from '../components/TableContainer';
import axios from 'axios';
import { useEffect } from 'react';
function Home({carlist,setCarlist}) {
    
    useEffect(() => {
    axios.get('http://localhost:3000/')
    .then((response) => {
      setCarlist(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const navigate = useNavigate();
  if(carlist.length > 0){
  
  return (
    <div class="body divcenter" >
      <TableContainer carlist={carlist} cardata={carlist}/>
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