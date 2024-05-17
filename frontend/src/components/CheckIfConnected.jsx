import { useState, useEffect } from 'react';
import axios from 'axios';

const EndPoint="http://16.171.43.69:3000/";
function checkIfConnected() {
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
    axios.get(EndPoint)
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