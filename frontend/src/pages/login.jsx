import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function tryLogin(user,password){
    
}

function LoginPage() {
    const navigate = useNavigate();
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");


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
        <form class="loginform">
            <label>
            Username:
            <input type="text" name="username" onChange={handleUserChange}/>
            </label>
            <label>
            Password:
            <input type="password" name="password" onChange={handlePasswordChange}/>
            </label>
        </form>
        <button style={{width:"100px"}} onClick={() => {tryLogin(user,password);}}>Login</button>
        </div>
        <p>Don't have an account? <a class="registerlink" name="toregisterlink" onClick={() =>{navigate('/register')}} >Register Here</a> </p>
 
    </div>
  );
}

export default LoginPage;