import React from 'react';
import NavBar from '../Components/NavigationBar/NavBar'
// eslint-disable-next-line
import Goalkeeper from '../PlayerReportForms/Goalkeeper'
// eslint-disable-next-line
import centreBack from '../PlayerReportForms/centreBack'
// eslint-disable-next-line
import fallBack from '../PlayerReportForms/fallBack'
// eslint-disable-next-line
import centreMid from '../PlayerReportForms/centreMid'
// eslint-disable-next-line
import wideMidfielder from '../PlayerReportForms/wideMidfielder'
// eslint-disable-next-line
import Striker from '../PlayerReportForms/Striker'
// eslint-disable-next-line
import PlayerInfo from '../PlayerReportForms/Player Info'
import "./PlayerReport.css"
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'

class PlayerReportPage extends React.Component{
    render(){
        return(
            <Router>
            <div class= "Player Reports Forms">
                <div class= "PlayerForms">
                    <h1>
                        Player Report Page
                    </h1>
                    <label for="PlayerPositions" >Select Player Position:</label>
                    <br/>
                        <button><Link to = {"/playerReport/goalkeeper"}>Goalkeeper</Link></button>
                        <button><Link to = {"/playerReport/centreBack"}>Centre Back</Link></button>
                        <button><Link to = {"/playerReport/fallBack"}>Fall Back</Link></button>
                        <button><Link to = {"/playerReport/centreMid"}>Centre Midfielder</Link></button>
                        <button><Link to = {"/playerReport/wideMidfielder"}>Wide Midfielder</Link></button>
                        <button><Link to = {"/playerReport/Striker"}>Striker</Link></button>
                        <PlayerInfo />
                        <Switch>
                            <Route exact path="/playerReport/goalkeeper" component = {Goalkeeper}></Route>
                            <Route path="/playerReport/centreBack" component = {centreBack}></Route>
                            <Route path="/playerReport/fallBack" component = {fallBack}></Route>
                            <Route path="/playerReport/centreMid" component = {centreMid}></Route>
                            <Route path="/playerReport/wideMidfielder" component = {wideMidfielder}></Route>
                            <Route path="/playerReport/Striker" component = {Striker}></Route>
                        </Switch>
                    <br/>
                    <br/>
                </div>
            </div>
            </Router>
        );
    }
}
export default PlayerReportPage;