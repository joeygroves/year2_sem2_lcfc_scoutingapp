import React from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavBar'
import PlayerReport from './Pages/PlayerReport'
import Home from './Pages/HomePage'
import LogOut from './Pages/LogOutPage'
import CentreBackReport from './PlayerReportOutput/centreBack'
import WideMid from './PlayerReportOutput/wideMidfielder'
import FullBack from './PlayerReportOutput/fullBack'
import Goalkeeper from './PlayerReportOutput/Goalkeeper'
import ViewStaff from './Admin/ViewStaff'
import AddStaff from './Admin/AddStaff'
import Striker from './PlayerReportOutput/Striker'
import CentreMid from './PlayerReportOutput/centreMid'
import ScoutData from './Admin/ScoutData';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ViewAllReports from './Admin/ViewPlayerReports'
import LogInForm from './LoginForm/LoginForm';
import DeleteStaff from './Admin/DeleteStaff';

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

              <Route path="/ViewPlayerReport/CentreBack/:userId" component={CentreBackReport} />

              <Route path="/ViewPlayerReport/CentreMidfielder/:userId" component={CentreMid} />

              <Route path="/ViewPlayerReport/WideMidfielder/:userId" component={WideMid} />

              <Route path="/ViewPlayerReport/FullBack/:userId" component={FullBack} />

              <Route path="/ViewPlayerReport/Goalkeeper/:userId" component={Goalkeeper} />

              <Route path="/ViewPlayerReport/Striker/:userId" component={Striker} />

              <Route path="/admin/ViewStaff" >

                <ViewStaff />

              </Route>

              <Route exact path="/admin/AddStaff">

                <AddStaff />

              </Route>

              <Route path="/admin/viewScout/:scoutID" component={ScoutData} />


              <Route path="/PlayerReport">

                <PlayerReport />

              </Route>

              <Route path="/admin/ViewAllReports">

                <ViewAllReports />

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

