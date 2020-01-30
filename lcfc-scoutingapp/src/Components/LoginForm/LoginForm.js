import React from 'react';
import './LoginForm.css'
import logo from '../../Images/LCFC-Print.png';

class Login extends React.Component {
    render() {
        return (  
            <div class = "LoginForm">    
                <img src={logo} className="App-logo" alt="logo" />
                <form>
                    <p></p>                    
                    <label for="uname"><b>Username</b></label>
                    <br/>
                    <input type="text" placeholder="Enter Username" name="uname" required></input>

                    <br/>

                    <label for="pword"><b>Password</b></label>
                    <br/>
                    <input type="password" placeholder="Enter Password" name="pword" required ></input>

                    <br/>

                    <button type="button" class="submit">Submit</button>
                </form>
        </div> 
        );
    }
}
export default Login;