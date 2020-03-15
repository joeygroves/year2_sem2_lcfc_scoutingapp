import React, { Component } from 'react';
import logo from '../Images/LCFC-Print.png';
import '../App.css';
import ReactDOM from 'react-dom';
import HomePage from '../App';
import NavBar from '../Components/NavigationBar/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class ScoutData extends Component {

    state = {

        scout_data: []


    }

    componentDidMount() {

        this.getScoutData();

    }

    getScoutData = async () => {

        const response = await fetch('/api/admin/getScoutReports', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify({ scoutID: this.props.match.params.scoutID })

        });

        const body = await response.json();

        this.setState({ scout_data: body });

    };


    render() {

        return (

           

            <div>

                <div>

                    <NavBar />

                </div>

                <div>

                    <table>

                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Club</th>
                            <th>Grade</th>
                            <th>Height</th>
                            <th>Position</th>
                            <th>View</th>

                        </tr>

                    </table>

                    {this.state.scout_data.map((values, index) => {

                        return <div>

                            <table>

                                <tr>
                                    <td>{values.FirstName}</td>
                                    <td>{values.LastName}</td>
                                    <td>{values.Age} </td>
                                    <td>{values.Club} </td>
                                    <td>{values.Grade} </td>
                                    <td>{values.Height} </td>
                                    <td>{values.Position}</td>

                                    <td><a><Link to={`/ViewPlayerReport/${values.Position.replace(/\s/g, "")}/${values.player_id}`}>Report</Link></a></td>
                                </tr>

                            </table>

                        </div>

                    })}

                </div>

            </div>

        );

    }
}

export default ScoutData;
