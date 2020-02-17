import React, { Component } from 'react';
import logo from '../Images/LCFC-Print.png';
import './LoginForm.css';
import ReactDOM from 'react-dom';
import HomePage from '../App';

class App extends Component {

  state = {
    response: '',
    username: '',
    password: '',
    responseToPost: '',
    message: '',
  };

  handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch('/api/LogInAuthentication', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json',

      },

      body: JSON.stringify({ username: this.state.username, password: this.state.password }),

    });

    const body = await response.text();

    this.setState({ responseToPost: body });

    if (this.state.responseToPost == "LoggedIn") {

      this.setState({ message: "Logged In" });

      this.setState({ username: this.state.post });

      ReactDOM.render(<HomePage />, document.getElementById('root'));

    } else if (this.state.responseToPost == "IncorrectUsernameOrPassword") {

      this.setState({ message: "Incorrect Username And/Or Password" });

    } else if (this.state.responseToPost == "Empty") {

      this.setState({ message: "Please Enter Username And/Or Password" });
    }

  };

  render() {
    
    return (

      <div className="Login">

        <header className="Login-header">

          <img src={logo} className="Login-logo" alt="logo" />

          <form onSubmit={this.handleSubmit}>

            <p></p>

            <label><b>Username</b></label>

            <input type="text" placeholder="Enter Username" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />

            <br></br>

            <label><b>Password</b></label>

            <input type="password" placeholder="Enter Password" value={this.state.password} onChange={x => this.setState({ password: x.target.value })} />

            <br></br>

            <button type="submit" class="button">Submit</button>

          </form>

          <p>{this.state.message}</p>

        </header>

      </div>

    );


  }
}

export default App;