import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import GlobalContext from '../GlobalContext';
import {useContext} from 'react';

function tryLogin(user,password,globalData,navigate){
  const setter=globalData.setToken;
  const usercredentials={
        username:user,
        password:password
  };
    axios.post('http://localhost:3000/token', usercredentials)
      .then(function (response) {
        console.log(response);
        if(response.data!="Invalid credentials"){
            alert("Login successful");
            setter(response.data[0].token);
            navigate('/cars');
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