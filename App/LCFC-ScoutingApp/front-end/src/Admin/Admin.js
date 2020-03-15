import React from 'react';
import '../App.css';
import NavBar from '../Components/NavigationBar/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {

    render() {

        return (

            <div>

                <div>

                    <NavBar />

                </div>

                
            

                    <div class="AdminOuter">

                        <div class="Ad">

                            <h1>Administrator </h1>

                            <a><Link to={"/admin/AddStaff"}><button>Add Staff</button></Link></a>

                            <br></br>

                            <a><Link to={"/admin/ViewStaff"}><button>View Staff</button></Link></a>


                        </div>

                    </div>

              




            </div>

        )

    }
}


export default withRouter(HomePage);