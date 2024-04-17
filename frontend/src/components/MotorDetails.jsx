import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
function MotorDetails({MotorId}) {
    const [motor, setMotor] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/motor/${MotorId}`)
        .then((response) => {
            setMotor(response.data);
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