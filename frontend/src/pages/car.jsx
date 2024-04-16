import {useParams, useNavigate} from "react-router-dom";
import {useState} from 'react';
import HomeButton from '../components/HomeButton.jsx';
import './car.css'
import CarDetails from '../components/CarDetails.jsx';
import axios from 'axios';
import { useEffect } from 'react';

function Car({list}) {
  const {carId} = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Car details</h1>
      <CarDetails carId={carId} list={list}/>
      <div class="buttongap">
        <HomeButton/>
        <button onClick={() => navigate(`/edit/${carId}`)}>Edit</button>
      </div>
    </div>
  );
}

export default Car;