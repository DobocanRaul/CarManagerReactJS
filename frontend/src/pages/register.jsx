import {useNavigate} from 'react-router-dom';


function RegisterPage(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>Register Page</h1>
            <form class="registerform">
                <label>
                Email:
                <input type="text" name="email" />
                </label>
                <label>
                Username:
                <input type="text" name="username" />
                </label>
                <label>
                Password:
                <input type="password" name="password" />
                </label>
                <label>
                Confirm Password:
                <input type="password" name="password" />
                </label>
                <div class="twobuttons">
                <button type="submit">Register</button>
                <button name="back" onClick={() =>{navigate('/login')} }>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage;