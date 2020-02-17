import React from 'react';
import './App.css';
// eslint-disable-next-line
import LoginForm from './Components/LoginForm/LoginForm'
// eslint-disable-next-line
import NavBar from './Components/NavigationBar/NavBar'
// eslint-disable-next-line
import PlayerReportP from './Pages/PlayerReport'
import Home from './Pages/HomePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
 

function App() {
  return (
    <div className="App">
      <Router>
        {/* <LoginForm />  */}
        <NavBar/>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/playerReport" component = {PlayerReportP}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
