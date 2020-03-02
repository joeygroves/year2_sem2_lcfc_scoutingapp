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

                <h1> Player Reports </h1>

                <table>

                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Club</th>
                        <th>Grade</th>
                        <th>Height</th>
                        <th>View</th>
                    </tr>

                </table>

                {this.state.JSONStringDataForUsers.map((values, index) => {

                    return <div>

                        <table>

                            <tr>
                                <td>{values.FirstName}</td>
                                <td>{values.LastName}</td>
                                <td>{values.Age} </td>
                                <td>{values.Club} </td>
                                <td>{values.Grade} </td>
                                <td>{values.Height} </td>
                                <td><a><Link to={"/ViewPlayerReport"}>View Reports</Link></a></td>
                            </tr>

                        </table>

                    </div>

                })}

            </div>

        )

    }
}


export default withRouter(HomePage);