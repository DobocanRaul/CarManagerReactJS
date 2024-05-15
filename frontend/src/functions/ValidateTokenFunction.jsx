import axios from "axios";
import {useContext} from 'react';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
function getToken(user,password,token,navigate){
    token="";
    const usercredentials={
        username:user,
        password:password,
        token:token
  };
    return axios.post('http://localhost:3000/token',usercredentials).then(function(response){
        if(response.data!="Invalid credentials"){
            alert("Valid token");
        }
        else{
            alert("Invalid token");
            navigate('/cars');
        }
    }).catch(function(error){
        console.log(error);
    });
    
}

function ValidateTokenFunction(user, password, token,setresponse) {
    const usercredentials = {
        username: user,
        password: password,
        token: token
    };
    console.log(usercredentials);
    axios.post('http://localhost:3000/token', usercredentials)
        .then(function(response) {
            console.log(response.data);
            if(response.data != "Invalid credentials") {
                console.log("Returning true");
                setresponse(true);
            } else {
                setresponse(false);
            }
        })
        .catch(function(error) {
            console.log(error);
            setresponse(false);
        });
}

export default ValidateTokenFunction;