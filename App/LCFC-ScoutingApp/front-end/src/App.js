import React from 'react';
import './App.css';
import imageNav from './Images/NavLogo.png'
// eslint-disable-next-line
import NavBar from './Components/NavigationBar/NavBar'
// eslint-disable-next-line
import PlayerReport from './Pages/PlayerReport'
import Home from './Pages/HomePage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


function App() {


  return (

    <div className="App">

      <Router>

        <div>

        <NavBar />

          <Switch>

            <Route path="/PlayerReport">

              <PlayerReport />

            </Route>

            <Route path="/">

              <Home />

            </Route>

          </Switch>

        </div>

      </Router>

    </div>

  );
}

export default App;

