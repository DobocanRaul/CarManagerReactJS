import React from 'react';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import Home from './pages/home';
import Car from './pages/car';
import NoPage from './pages/error';
import AddPage from './pages/add';
import { useState } from 'react';
import EditPage from './pages/edit';
import DeleteConfirmation from './pages/deleteconfirmation';
import ChartPage from './pages/chartPage';
import axios from 'axios';
import { useEffect } from 'react';
import io from 'socket.io-client';

const EndPoint = 'http://localhost:3000/';

function App() {
  const [carlist, setCarlist] = useState([]);
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
              <Route index element={<Home carlist={carlist} setCarlist={setCarlist}/>}/>
              <Route path="/cars" element={<Home carlist={carlist} setCarlist={setCarlist}/>}/>
              <Route path="/delete/:carId" element={<DeleteConfirmation list={carlist} setlist={setCarlist}/>}/>
              <Route path="/view/:carId" element={<Car list={carlist}/>}/>
              <Route path="/edit/:carId" element={<EditPage list={carlist} setlist={setCarlist}/>}/>
              <Route path="/add" element={<AddPage list={carlist} setlist={setCarlist}/>}/>
              <Route path="/chart" element={<ChartPage list={carlist} />}/>
              <Route path='*' element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App