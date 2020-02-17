import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

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
  
      this.setState({ message: this.state.responseToPost });
  
      this.setState({ username: this.state.post })
  
    } else {
  
      this.setState({ message: "Incorrect Username and Password" });
  
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
      <div className="App">
       
        <form onSubmit={this.handleSubmit}>
       
          <p>
       
            <strong>Post to Server:</strong>
       
          </p>
       
          <input type="text" value={this.state.post} onChange={e => this.setState({ post: e.target.value })} />
       
          <input type="text" value={this.state.password} onChange={x => this.setState({ password: x.target.value })} />
       
          <button type="submit">Submit</button>

        </form>

        <p>{this.state.message}</p>

        <form onSubmit={this.logoutfunction}  >

          <button type="submit" >Log Out</button>

        </form>

        <form onSubmit={this.playerreport}>

          <button type="submit" >Player Report</button>

          <p>{this.state.jamie}</p>

        </form>

      </div>
    );


  }
}

export default App;