import {useParams, useNavigate} from "react-router-dom";
import HomeButton from '../components/HomeButton.jsx';
import './car.css'
import CarDetails from '../components/CarDetails.jsx';
import { useEffect } from 'react';
import NotLoggedInFunction from "../functions/NotLoggedInFunction.jsx";
import {useContext} from 'react';
import GlobalContext from '../GlobalContext.jsx';

function Car() {
  const globalData=useContext(GlobalContext);
    const token=globalData.token;
    const navigate = useNavigate();
    if(NotLoggedInFunction(token)==false)
      {
        useEffect(() => {
          navigate(`/login`);
        }, []);
      }
  const {carId} = useParams();
  
  return (
    <div>
      <h1>Car details</h1>
      <CarDetails carId={carId}/>
      <div class="buttongap">
        <HomeButton/>
        <button onClick={() => navigate(`/edit/${carId}`)}>Edit</button>
      </div>
    </div>
  );
}

export default Car;