import axios from "axios";
import {useContext} from 'react';
import { useState } from "react";
function getToken(user,password,setResponse){
    const usercredentials={
        username:user,
        password:password
  };
    axios.post('http://localhost:3000/token',usercredentials).then(function(response){
        setResponse(response.data[0].token);
    }).catch(function(error){
        console.log(error);
    });
}

function ValidateTokenFunction(user,password,setResponse) {
    getToken(user,password,setResponse);
}

export default ValidateTokenFunction;