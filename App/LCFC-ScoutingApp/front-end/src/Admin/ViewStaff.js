import React, { Component } from 'react';
import logo from '../Images/LCFC-Print.png';
import '../App.css';
import ReactDOM from 'react-dom';
import HomePage from '../App';
import NavBar from '../Components/NavigationBar/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class ViewStaff extends Component {

    state = {

        staff_data: []


    }

    componentDidMount() {

        this.getStaff();

    }

    getStaff = async () => {

        const response = await fetch('/api/admin/getStaff', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

        });

        const body = await response.json();

        this.setState({ staff_data: body });

    };


    render() {

        return (

            <div>

                <div>

                    <NavBar />

                </div>

                <div>
                    <br></br>

                    <h1> View Staff </h1>

                </div>

                <div class="AdminViewStaff">
                    <table class="Table">
                        <thead>
                            <tr class="toggle">
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Role</th>
                                <th>View Reports</th>

                            </tr>
                        </thead>
                    </table>

                    {this.state.staff_data.map((values, index) => {

                        return <div>

                            <table>
                                <tbody>
                                    <tr>
                                        <td>{values.first_name} </td>
                                        <td>{values.last_name} </td>
                                        <td>{values.username}</td>
                                        <td>{values.password}</td>
                                        <td>{values.role} </td>
                                        <td><a><Link to={`/admin/viewScout/${values.username}`}>View Reports</Link></a></td>


                                        </tr>
                                </tbody>
                            </table>

                        </div>

                    })}

                </div>

            </div>

        );

    }
}

export default withRouter(ViewStaff);
