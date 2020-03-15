import React from 'react';
import '../App.css';
import NavBar from '../Components/NavigationBar/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import ViewStaff from './ViewStaff';
import AddStaff from './AddStaff';
import DeleteStaff from './DeleteStaff';
class HomePage extends React.Component {

    render() {

        return (

            <div>

                <div>

                    <NavBar />

                </div>

                <Router>
                    <div class="AdminOuter">

                        <div class="Ad">
                            <h1> Player Report Page </h1>
                               
                   
                        

                            <Link to={"/admin/AddStaff"}><button>Add Scout</button></Link>

                            <Link to={"/admin/ViewStaff"}><button>View Scouts</button></Link>

                            <Link to={"/admin/deletesStaff"}><button>Delete Scout</button></Link>

                            
                            <Switch>

                                <Route exact path="/admin/AddStaff" component={AddStaff}></Route>

                                <Route path="/admin/ViewStaff" component={ViewStaff}></Route>

                                <Route path="/admin/deletesStaff" component={DeleteStaff}></Route>

                            </Switch>

                            <br />

                            <br />

                        </div>
                    </div>
                
                </Router>




            </div>

        )

    }
}


export default withRouter(HomePage);