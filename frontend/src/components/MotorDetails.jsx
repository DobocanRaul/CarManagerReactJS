import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function getMotorDetails(MotorId) {
    return axios.get(`http://localhost:3000/motor/${MotorId}`);
}
function MotorDetails({MotorId}) {
    const [motor, setMotor] = useState(null);
    setMotor(getMotorDetails(MotorId));
    return(

    <ul>
    <p>Motor id: {motor?.id}</p>
    <p>Motor type: {motor?.motor_type}</p>
    <p>Motor Horsepower: {motor?.horsepower}</p>
    <p>Motor cubic cms: {motor?.cubic_cm}</p>
    </ul>
    );
}

export default MotorDetails;