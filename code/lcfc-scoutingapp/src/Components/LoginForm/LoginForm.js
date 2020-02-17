import React from 'react';
import './LoginForm.css'
import logo from '../../Images/LCFC-Print.png';

function App() {
  return (
    <div className="Login">
      <header className="Login-header">
        
        <img src={logo} className="Login-logo" alt="logo" />
      
        <form>
        <p></p>
        
        <label for="uname"><b>Username</b></label>
        
        <input type="text" placeholder="Enter Username" name="uname" required></input>

        <br></br>

        <label for="pword"><b>Password</b></label>
        
        <input type="password" placeholder="Enter Password" name="pword" required ></input>

        <br></br>

        <button type="button" class="submit">Submit</button>

        </form>

      </header>
    </div>
  );
}

export default App;
