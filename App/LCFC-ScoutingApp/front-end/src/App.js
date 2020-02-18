import React from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavBar'
import PlayerReport from './Pages/PlayerReport'
import Home from './Pages/HomePage'
import LogOut from './Pages/LogOutPage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LogInForm from './LoginForm/LoginForm';
class App extends React.Component {
  
  render() {

    return (

      <div className="App">

        <Router>

          <div>

            <Switch>

              <Route exact path="/">

                <Home />

              </Route>

              <Route path="/LogBackIn">

                <LogInForm />

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

            </Switch>

          </div>

        </Router>

      </div>

    )

  }

}

export default App;

