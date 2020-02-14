import React, { Component } from 'react';
import logo from '../Images/LCFC-Print.png';
import './LoginForm.css';
import ReactDOM from 'react-dom';
import HomePage from '../App';
class App extends Component {

  state = {
    response: '',
    username: '',
    post: '',
    password: '',
    responseToPost: '',
    jamie: '',
    message: '',
  };

  componentDidMount() {
    this.callApi()

      .then(res => this.setState({ response: res.express }))

      .catch(err => console.log(err));

  }

  callApi = async () => {

    const response = await fetch('/api/hello');

    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;

  };



  handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch('/api/world', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json',

      },

      body: JSON.stringify({ post: this.state.post, password: this.state.password }),

    });

    const body = await response.text();

    this.setState({ responseToPost: body });

    if (this.state.responseToPost == "LoggedIn") {

      this.setState({ message:"Logged In" });

      this.setState({ username: this.state.post });

      ReactDOM.render(<HomePage />, document.getElementById('root'));

    } else if (this.state.responseToPost == "IncorrectUsernameOrPassword") {

      this.setState({ message: "Incorrect Username And/Or Password" });

    } else if (this.state.responseToPost == "Empty") {

      this.setState({ message: "Please Enter Username And/Or Password" });
    }

  };

  logoutfunction = async () => {

    const response = await fetch('/api/logout');

    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;

  }


  playerreport = async (e) => {

    e.preventDefault();

    const response = await fetch('/api/hello', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json',

      },

    });

    const body = await response.text();

    this.setState({ jamie: body });

  };


  logoutfunction = async () => {

    const response = await fetch('/api/logout');

    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;

  }

  render() {
    return (

      <div className="Login">

        <header className="Login-header">

          <img src={logo} className="Login-logo" alt="logo" />

          <form onSubmit={this.handleSubmit}>

            <p></p>

            <label><b>Username</b></label>

            <input type="text" placeholder="Enter Username" value={this.state.post} onChange={e => this.setState({ post: e.target.value })} />

            <br></br>

            <label><b>Password</b></label>

            <input type="password" placeholder="Enter Password" value={this.state.password} onChange={x => this.setState({ password: x.target.value })} />

            <br></br>

            <button type="submit"class="button">Submit</button>

          </form>

          <p>{this.state.message}</p>

          <form onSubmit={this.logoutfunction}  >

            <button type="submit" class="button">Log Out</button>

          </form>

          <form onSubmit={this.playerreport}>

            <button type="submit" class="button">Player Report</button>

            <p>{this.state.jamie}</p>

          </form>

        </header>

      </div>

    );


  }
}

export default App;