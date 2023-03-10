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
import NavBar from '../Components/NavigationBar/NavBar'
import "./PlayerReport.css"
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'


class PlayerReport extends React.Component {
    render() {
        return (
            <div>
            <div>

                <NavBar />
            </div>

            <Router>
                <div class="Player Reports Forms">
                    <div class="PlayerForms">
                        <h1>
                            Player Report Page
                    </h1>
                        <label for="PlayerPositions" >Select Player Position:</label>
                      
                        <br />
                      
                        <Link to={"/playerReport/goalkeeper"}><button>Goalkeeper</button></Link>
                       
                        <Link to={"/playerReport/centreBack"}><button>Centre Back</button></Link>
                       
                        <Link to={"/playerReport/fullBack"}><button>Full Back</button></Link>
                       
                        <Link to={"/playerReport/centreMid"}><button>Centre Midfielder</button></Link>
                       
                        <Link to={"/playerReport/wideMidfielder"}><button>Wide Midfielder</button></Link>
                       
                        <Link to={"/playerReport/Striker"}><button>Striker</button></Link>
                    
                       
                        <Switch>
                       
                            <Route exact path="/playerReport/goalkeeper" component={Goalkeeper}></Route>
                       
                            <Route path="/playerReport/centreBack" component={centreBack}></Route>
                       
                            <Route path="/playerReport/fullBack" component={fullBack}></Route>
                       
                            <Route path="/playerReport/centreMid" component={centreMid}></Route>
                       
                            <Route path="/playerReport/wideMidfielder" component={wideMidfielder}></Route>
                       
                            <Route path="/playerReport/Striker" component={Striker}></Route>
                       
                        </Switch>
                       
                        <br />
                       
                        <br />
                    
                    </div>
                </div>
            </Router>
            </div>
        );
    }
}
export default PlayerReport;