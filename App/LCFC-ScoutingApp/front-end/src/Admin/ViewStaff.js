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

                <div>
                    <table>

                        <tr>

                            <th className="Admin">First Name</th>
                            <th className="Admin"> Last Name</th>
                            <th className="Admin">Username</th>
                            <th className="Admin">Password</th>
                            <th className="Admin">Role</th>
                            <th className="Admin">View Reports</th>

                        </tr>

                    </table>

                    {this.state.staff_data.map((values, index) => {

                        return <div>

                            <table>

                                <tr>
                                    <td className="Admin">{values.first_name} </td>
                                    <td className="Admin">{values.last_name} </td>
                                    <td className="Admin">{values.username}</td>
                                    <td className="Admin">{values.password}</td>
                                    <td className="Admin">{values.role} </td>
                                    <td className="Admin" ><a><Link to={`/admin/viewScout/${values.username}`}>View Reports</Link></a></td>


                                </tr>

                            </table>

                        </div>

                    })}

                </div>

            </div>

        );

    }
}

export default withRouter(ViewStaff);
