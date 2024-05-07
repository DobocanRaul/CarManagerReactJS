import { useState, useEffect } from 'react';
import axios from 'axios';


function checkIfConnected() {
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
    axios.get('http://localhost:3000/')
    .then((response) => {
      setIsConnected(true);
    })
    .catch((error) => {
      console.log(error);
    });
    }, []);   

    return isConnected;
}

export default checkIfConnected;