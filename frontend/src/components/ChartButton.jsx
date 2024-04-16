import React from 'react';
import {useNavigate} from 'react-router-dom';


function ChartButton(){
    const navigate = useNavigate();
    return(
        <button onClick={() => navigate(`/chart`)} style={{width:"140px", height:"100px"}}>Show Chart</button>
    )
}


export default ChartButton;