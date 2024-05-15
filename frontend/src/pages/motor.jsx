import {useParams, useNavigate} from "react-router-dom";
import HomeButton from '../components/HomeButton.jsx';
import { useEffect } from 'react';
import MotorDetails from "../components/MotorDetails.jsx";
import NotLoggedInFunction from "../functions/NotLoggedInFunction.jsx";
import {useContext} from 'react';
import GlobalContext from '../GlobalContext.jsx';


function Motor() {
  const {motorId} = useParams();
  const globalData=useContext(GlobalContext);
  const token=globalData.token;
  const navigate = useNavigate();
    if(NotLoggedInFunction(token)==false)
      {
        useEffect(() => {
          navigate(`/login`);
        }, []);
      }

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