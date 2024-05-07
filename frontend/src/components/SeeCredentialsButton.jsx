import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import axios from "axios";
function alertCredentials(token){
    axios.post('http://localhost:3000/credentials',[token]).then(function(response){
        alert("Username: "+response.data[0].username+"\n Password: "+response.data[0].password);
    }
    ).catch(function(error){
        console.log(error);
    });
    
}

function SeeCredentialsButton() {
    const globalData=useContext(GlobalContext);
    const token=globalData.token;
  return (
    <button style={{width:"140px", height:"100px"}} onClick={() => {alertCredentials(token)}}>See Credentials!</button>
  );
}


export default SeeCredentialsButton;