import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import GlobalContext from '../GlobalContext';
import {useContext} from 'react';

function populatelists(setCarlist,setMotorlist){
  axios.get('http://localhost:3000/')
  .then((response) => {
    setCarlist(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

  axios.get('http://localhost:3000/motor')
  .then((response) => {
    setMotorlist(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}


function tryLogin(user,password,globalData,navigate){
  const setter=globalData.setToken;
  const setCarlist=globalData.setCarlist;
  const setMotorlist=globalData.setMotorlist;
  const setUser=globalData.setUser;
  const setPassword=globalData.setPassword;
  const usercredentials={
        username:user,
        password:password
  };
  
    axios.post('http://localhost:3000/login', usercredentials)
      .then(function (response) {
        if(response.data!="Invalid credentials"){
            alert("Login successful");
            setter(response.data[0].token);
            setUser(user);
            setPassword(password);
            navigate('/cars');
            populatelists(setCarlist,setMotorlist,response.data[0].token);
          }
        else{
            alert("Invalid credentials");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}

function LoginPage() {
    const navigate = useNavigate();
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const globalData=useContext(GlobalContext);

    const handleUserChange = (event) => {
        setUser(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
    <div style={{top:"-50px",position:"relative"}}>
      <h1>Login</h1>
      <div style={{display:"flex",gap:"10px",flexDirection:"column"}}>
        <form className="loginform">
            <label>
            Username:
            <input type="text" name="username" onChange={handleUserChange}/>
            </label>
            <label>
            Password:
            <input type="password" name="password" onChange={handlePasswordChange}/>
            </label>
        </form>
        <button style={{width:"100px"}} onClick={() => {tryLogin(user,password,globalData,navigate);}}>Login</button>
        </div>
        <p>Don't have an account? <a className="registerlink" name="toregisterlink" onClick={() =>{navigate('/register')}} >Register Here</a> </p>
 
    </div>
  );
}

export default LoginPage;