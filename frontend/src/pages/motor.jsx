import {useParams, useNavigate} from "react-router-dom";
import {useState} from 'react';
import HomeButton from '../components/HomeButton.jsx';
import './car.css'
import CarDetails from '../components/CarDetails.jsx';
import axios from 'axios';
import { useEffect } from 'react';
import MotorDetails from "../components/MotorDetails.jsx";
import NotLoggedInFunction from "../functions/NotLoggedInFunction.jsx";

function Motor() {
  NotLoggedInFunction();
  const {motorId} = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Motor details</h1>
      <MotorDetails MotorId={motorId}/>
      <div class="buttongap">
        <HomeButton/>
        <button onClick={() => {navigate(`/edit/motor/${motorId}`)}}>Edit</button>
      </div>
    </div>
  );
}

export default Motor;