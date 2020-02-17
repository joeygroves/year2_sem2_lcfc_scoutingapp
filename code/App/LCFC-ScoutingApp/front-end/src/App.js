import React from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavBar'
import PlayerReport from './Pages/PlayerReport'
import Home from './Pages/HomePage'
import LogIn from './LoginForm/LoginForm'
import LogOut from './Pages/LogOutPage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';

class App extends React.Component {

  render() {

    return (

      <div className="App">

        <Router>

          <div>

            <NavBar />

            <Switch>

              <Route path="/LogIn">

                <LogIn />

              </Route>

              <Route path="/HomePage">

                <Home />

              </Route>

              <Route path="/PlayerReport">

                <PlayerReport />

              </Route>

              <Route path="/LogOut">

                <LogOut />

              </Route>

              <Route exact-path="/">

                <Home />

              </Route>

            </Switch>

          </div>

        </Router>

      </div>

    )

  }

}

export default App;

