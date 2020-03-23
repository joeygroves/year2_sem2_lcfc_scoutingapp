import React from 'react';
import './admin.css';
import NavBar from '../Components/NavigationBar/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class ViewPlayerReports extends React.Component {

    state = {

        JSONStringDataForUsers: [], FirstName: '', role: '',



    }

    componentDidMount() {

        this.getScoutReports();

    }

    getScoutReports = async () => {

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

    filterReports = async (e) => {
        const response = await fetch('/api/filteredReports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rating_filter: this.refs.RatingType.value, position_filter: this.refs.PositionType.value }),
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

                <div class="AdminOuter">

                   

                        <h1>All Player Reports </h1>

                        <div class="Filters">
                            <h2> Filters: </h2>
                            <div class="RatingFilter">
                                <label>Rating  </label>
                                <select ref="RatingType" onChange={e => this.filterReports()}>
                                    <option value="Blank"></option>
                                    <option value="A">A</option>
                                    <option value="B+">B+</option>
                                    <option value="B">B </option>
                                    <option value="C">C</option>
                                </select>
                            </div>
                            <div class="PositionFilter">
                                <label>Position  </label>
                                <select ref="PositionType" onChange={e => this.filterReports()}>
                                    <option value="Blank"></option>
                                    <option value="Goalkeeper">Goalkeeper</option>
                                    <option value="Full Back">Full Back</option>
                                    <option value="Centre Back">Centre Back</option>
                                    <option value="Centre Midfield">Centre Midfield</option>
                                    <option value="Wide Midfield">Wide Midfield</option>
                                    <option value="Striker">Striker</option>
                                </select>
                            </div>
                            <br></br>


                        </div>

                        <table class="Table">
                            <thead>
                                <tr class="toggle">
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Club</th>
                                    <th>Grade</th>
                                    <th>Height</th>
                                    <th>Position</th>
                                    <th>View</th>

                                </tr>
                            </thead>
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
                                        <td>{values.Position}</td>

                                        <td><a><Link to={`/ViewPlayerReport/${values.Position.replace(/\s/g, "")}/${values.player_id}`}>Report</Link></a></td>
                                    </tr>

                                </table>

                            </div>

                        })}

                   

                </div>






            </div>

        )

    }
}


export default withRouter(ViewPlayerReports);