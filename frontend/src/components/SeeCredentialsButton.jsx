import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import axios from "axios";
const EndPoint="http://16.171.43.69:3000/";
function alertCredentials(token){
    axios.post(EndPoint+'credentials',[token]).then(function(response){
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