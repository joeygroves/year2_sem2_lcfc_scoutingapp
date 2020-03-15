import React from 'react';
import '../App.css';
import NavBar from '../Components/NavigationBar/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
class HomePage extends React.Component {


    state = {

        JSONStringDataForUsers: [], FirstName: '',

    }

    componentDidMount() {

        this.gatherUserInformation();

    }

    gatherUserInformation = async () => {

        const response = await fetch('/api/GetScoutsReports', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },


        });

        const body = await response.json();

        this.setState({ JSONStringDataForUsers: body });

        console.log(this.state.JSONStringDataForUsers);

    };





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

                                <Route exact path="/admin/AddStaff" component={Goalkeeper}></Route>

                                <Route path="/admin/ViewStaff" component={centreBack}></Route>

                                <Route path="/admin/deletesStaff" component={fullBack}></Route>

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