import React from 'react';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import Home from './pages/home';
import Car from './pages/car';
import NoPage from './pages/error';
import AddPage from './pages/add';
import Motor from './pages/motor';
import { useState } from 'react';
import EditPage from './pages/edit';
import DeleteConfirmation from './pages/deleteconfirmation';
import ChartPage from './pages/chartPage';
import axios from 'axios';
import { useEffect } from 'react';
import io from 'socket.io-client';
import EditMotor from './pages/editmotor';
import AddMotor from './pages/addmotor';
import DeleteMotor from './pages/deletemotor';


const EndPoint = 'http://localhost:3000/';

function App() {
  const [carlist, setCarlist] = useState([]);
  const [motorlist, setMotorlist] = useState([]);
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

  useEffect(() => {
    const socket = io(EndPoint);
    socket.on('newEntity', () => {
      axios.get('http://localhost:3000/')
      .then((response) => {
        setCarlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    });
  }
  , []);

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  if(!isOnline){
    return (
      <div class="body divcenter" >
        <h1>No connection to internet!</h1>
      </div>
    );
  }
  else return(
    <div>
        <BrowserRouter>
         <Routes>
              <Route index element={<Home carlist={carlist} setCarlist={setCarlist} motorlist={motorlist} setMotorlist={setMotorlist}/>}/>
              <Route path="/cars" element={<Home carlist={carlist} setCarlist={setCarlist}/>}/>
              <Route path="/delete/:carId" element={<DeleteConfirmation list={carlist} setlist={setCarlist}/>}/>
              <Route path="/view/:carId" element={<Car list={carlist}/>}/>
              <Route path="/edit/:carId" element={<EditPage list={carlist} setlist={setCarlist} motorlist={motorlist}/>}/>
              <Route path="/add" element={<AddPage list={carlist} setlist={setCarlist} motorIds={motorlist}/>}/>
              <Route path="/chart" element={<ChartPage list={carlist} />}/>
              <Route path="/view/motor/:motorId" element={<Motor list={motorlist}/>}/>
              <Route path="/edit/motor/:motorId" element={<EditMotor list={motorlist} setlist={setMotorlist}/>}/>
              <Route path="/addmotor" element={<AddMotor list={motorlist} setlist={setMotorlist}/>}/>
              <Route path="/delete/motor/:motorId" element={<DeleteMotor />}/>
              <Route path='*' element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App