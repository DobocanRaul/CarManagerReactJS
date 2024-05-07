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
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import GlobalContext from './GlobalContext';
const EndPoint = 'http://localhost:3000/';

function updateChangesCars(carlist,deletedIds){
  axios.get('http://localhost:3000/')
  .then((response) => {
    const data= response.data;
    const ids= data.map((car) => car.id);
    carlist.forEach((car) => {
      if(ids.includes(car.id)){
        axios.put(`http://localhost:3000/car/${car.id}`, car)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })

      }else{
        axios.post('http://localhost:3000/car', car)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
    )
    deletedIds.forEach((id) => {
      axios.delete(`http://localhost:3000/car/${id}`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    })
  })

}

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

function populateCars(){
  axios.get('http://localhost:3000/')
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });

}

function populateMotors(){
  axios.get('http://localhost:3000/motor')
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
}


function App() {
  const [carlist, setCarlist] = useState([]);
  const [motorlist, setMotorlist] = useState([]);
  const [token,setToken]=useState("");

  populatelists(setCarlist,setMotorlist);
  
  const globalData={
    carlist:carlist,
    setCarlist:setCarlist,
    motorlist:motorlist,
    setMotorlist:setMotorlist,
    token:token,
    setToken:setToken
  }

  return(
    <div>
      <GlobalContext.Provider value={globalData}>
        <BrowserRouter>
         <Routes>
              <Route index element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/cars" element={<Home/>}/>
              <Route path="/delete/:carId" element={<DeleteConfirmation/>}/>
              <Route path="/cars/view/:carId" element={<Car/>}/>
              <Route path="/edit/:carId" element={<EditPage/>}/>
              <Route path="/add" element={<AddPage/>}/>
              <Route path="/chart" element={<ChartPage/>}/>
              <Route path="/view/motor/:motorId" element={<Motor/>}/>
              <Route path="/edit/motor/:motorId" element={<EditMotor/>}/>
              <Route path="/addmotor" element={<AddMotor />}/>
              <Route path="/delete/motor/:motorId" element={<DeleteMotor />}/>
              <Route path='*' element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  )
}

export default App