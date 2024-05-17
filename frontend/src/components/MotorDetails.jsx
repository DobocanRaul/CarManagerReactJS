import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
const EndPoint="http://16.171.43.69:3000/";
function getMotorDetails(MotorId) {
    return axios.get(EndPoint+`motor/${MotorId}`);
}
function MotorDetails({MotorId}) {
    const [motor, setMotor] = useState(null);
    useEffect(() => {
        getMotorDetails(MotorId)
        .then((response) => {
            setMotor(response.data[0]);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
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