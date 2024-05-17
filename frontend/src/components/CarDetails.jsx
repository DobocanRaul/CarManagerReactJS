import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
const EndPoint="http://16.171.43.69:3000/";
function CarDetails({carId}) {
    const [car, setCar] = useState(null);
    useEffect(() => {
        axios.get(EndPoint+`car/${carId}`)
        .then((response) => {
            setCar(response.data[0]);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    if(car==null){
        return <p>Car not found</p>
    }else
    return(

    <ul>
    <p>Car id:{car?.id}</p>
    <p>Car name:{car?.name}</p>
    <p>Car model:{car?.model}</p>
    <p>Car color:{car?.color}</p>
    <p>Car price:{car?.price}</p>
    <p>Motor id:{car?.motorId}</p>
    </ul>
    );
}

export default CarDetails;