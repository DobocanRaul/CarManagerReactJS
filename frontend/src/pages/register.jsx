import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
function tryRegister(user,password,navigate){
    console.log("Registering");
    const usercredentials={
        username:user,
        password:password
    };
    axios.post('http://localhost:3000/register', usercredentials)
      .then(function (response) {
        console.log(response);
        if(response.data !="Username already exists"){
            alert("Registration successful");
            navigate('/login');
        }
        else {
            alert("Username already exists");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}


function RegisterPage(){
    const navigate = useNavigate();
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");

    const handleUserChange = (event) => {
        setUser(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return(
        <div className="registerform">
            <h1>Register Page</h1>
            <form className="registerform">
                <label>
                Username : 
                <input type="text" name="username" onChange={handleUserChange} />
                </label>
                <label>
                Password : 
                <input type="text" name="password" onChange={handlePasswordChange}/>
                </label>
            </form>
            <div className="twobuttons">
                <button onClick={() => {tryRegister(user,password,navigate)}} type="submit" >Register</button>
                <button name="back" onClick={() =>{navigate('/login')} }>Cancel</button>
                </div>
        </div>
    )
}

export default RegisterPage;