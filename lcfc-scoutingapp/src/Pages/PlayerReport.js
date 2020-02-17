import React from 'react';
// eslint-disable-next-line
import Goalkeeper from '../PlayerReportForms/Goalkeeper'
// eslint-disable-next-line
import centreBack from '../PlayerReportForms/centreBack'
// eslint-disable-next-line
import fullBack from '../PlayerReportForms/fullBack'
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
                        <Link to = {"/playerReport/goalkeeper"}><button>Goalkeeper</button></Link>
                        <Link to = {"/playerReport/centreBack"}><button>Centre Back</button></Link>
                        <Link to = {"/playerReport/fullBack"}><button>Full Back</button></Link>
                        <Link to = {"/playerReport/centreMid"}><button>Centre Midfielder</button></Link>
                        <Link to = {"/playerReport/wideMidfielder"}><button>Wide Midfielder</button></Link>
                        <Link to = {"/playerReport/Striker"}><button>Striker</button></Link>
                        <PlayerInfo />
                        <Switch>
                            <Route path="/playerReport/goalkeeper" component = {Goalkeeper}></Route>
                            <Route path="/playerReport/centreBack" component = {centreBack}></Route>
                            <Route path="/playerReport/fallBack" component = {fullBack}></Route>
                            <Route path="/playerReport/centreMid" component = {centreMid}></Route>
                            <Route path="/playerReport/wideMidfielder" component = {wideMidfielder}></Route>
                            <Route path="/playerReport/Striker" component = {Striker}></Route>
                        </Switch>
                    <br/>
                    <br/>
<<<<<<< HEAD
                    <select id = "PlayerPositions" >
                        <option value = "Goalkeeper">Goalkeeper</option>
                        <option value = "Defender">Defender</option>
                        <option value = "fullBack">Full Back</option>
                        <option value = "Midfielder">Midfielder</option>
                        <option value = "wideMidfielder">Wide Midfielder</option>
                        <option value = "Striker">Striker</option>
                    </select>
                    
                    <FormChange />
=======
>>>>>>> c23602d81c18a5f3ff51425f10fdd2ac8c6beed6
                </div>
            </div>
            </Router>
        );
    }
}
export default PlayerReportPage;