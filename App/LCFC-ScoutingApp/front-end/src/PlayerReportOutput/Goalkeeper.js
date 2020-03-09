import React from "react";
import NavBar from '../Components/NavigationBar/NavBar'
import './PlayerPos.css'
class goalkeeper extends React.Component {

    state = {

        id: 0,
        data: [],
        player_data: [],


    }

    componentDidMount() {


        this.setState({ id: this.props.match.params.userId })

        this.getPlayerData();

        this.getData();

    }

    getData = async () => {

        const response = await fetch('/api/getPlayerData', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify({ playerID: this.props.match.params.userId })

        });

        const body = await response.json();

        this.setState({ data: body });

    };


    getPlayerData = async () => {

        const response = await fetch('/api/getPlayerDataFromPlayer', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify({ playerID: this.props.match.params.userId })

        });

        const body = await response.json();


        this.setState({ player_data: body });

    };


    render() {

        return (

            <div class="Out">

                <div>

                    <NavBar />

                </div>

                <div>


                    {this.state.data.map((values, index) => {

                        return <div>


                            <div class="General">
                                <div class="TypeNames">

                                    <table>
                                        <tr>
                                            <th>General</th>
                                        </tr>
                                    </table>

                                </div>

                                <table>
                                    <tr class="Data">
                                        <th>Handling</th>
                                        <td>{values.handling}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Shot Stopping</th>
                                        <td>{values.handling}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Positioning</th>
                                        <td>{values.handling}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Recovery Saves</th>
                                        <td>{values.handling}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Control When Receiving</th>
                                        <td>{values.handling}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Right Foot</th>
                                        <td>{values.handling}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Left Foot</th>
                                        <td>{values.handling}</td>
                                    </tr>
                                </table>

                            </div>


                            <div class="Distribution">

                                <div class="TypeNames">

                                    <table>
                                        <tr>
                                            <th>Distribution</th>
                                        </tr>
                                    </table>

                                </div>

                                <table>
                                <tr class="Data">
                                        <th>Dead Ball</th>
                                        <td>{values.dead_ball_kicks}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Kicking Out Of Hand</th>
                                        <td>{values.kicking_out_of_hands}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Throwing</th>
                                        <td>{values.throwing}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Kicking Under Pressure</th>
                                        <td>{values.kicking_under_pressure}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Kicking When Given Time</th>
                                        <td>{values.kicking_when_given_time}</td>
                                    </tr>
                                </table>
                            </div>

                            <div class="DecisionMaking">

                                <div class="TypeNames">

                                    <table>
                                        <tr>
                                            <th>Descision Making</th>
                                        </tr>
                                    </table>

                                </div>

                                <table>
                                <tr class="Data">
                                        <th>Dealing With Crosses </th>
                                        <td>{values.dealing_with_crosses}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Tendancy To Punch</th>
                                        <td>{values.tendancy_to_punch}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Tendancy To Catch</th>
                                        <td>{values.tendancy_to_catch}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Starting Position</th>
                                        <td>{values.starting_position}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>1 v 1</th>
                                        <td>{values.one_v_one}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Dealing With Through Ball</th>
                                        <td>{values.dealing_with_through_ball}</td>
                                    </tr>
                                </table>
                            </div>

                            <div class="Physical">

                                <div class="TypeNames">

                                    <table>
                                        <tr>
                                            <th>Physical</th>
                                        </tr>
                                    </table>

                                </div>

                                <table>
                                <tr class="Data">
                                        <th>Agility</th>
                                        <td>{values.agility}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Reactions</th>
                                        <td>{values.reactions}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Strengh</th>
                                        <td>{values.strength}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Speed</th>
                                        <td>{values.speed}</td>
                                    </tr>
                                </table>

                            </div>

                            <div class="Psychological">

                                <div class="TypeNames">

                                    <table>
                                    <tr >
                                            <th>Psychological</th>
                                        </tr>
                                    </table>

                                </div>

                                <table>
                                <tr class="Data">
                                        <th>Bravery</th>
                                        <td>{values.bravery}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Leadership</th>
                                        <td>{values.leadership}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Presence/Aura</th>
                                        <td>{values.presence}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Communication</th>
                                        <td>{values.communication}</td>
                                    </tr>
                                    <tr class="Data">
                                        <th>Reaction To Mistakes</th>
                                        <td>{values.reaction_to_mistake}</td>
                                    </tr>
                                </table>

                            </div>

                            <div class="PlayerInformation">
                                <div class="TypeNames">

                                    <table>
                                        <tr>
                                            <th>Player Information</th>
                                        </tr>
                                    </table>

                                </div>

                                {this.state.player_data.map((playervalues, index) => {

                                    return <div>

                                        <table>
                                            <tr class="Data">
                                                <th>First Name</th>
                                                <td>{playervalues.first_name}</td>
                                            </tr>
                                            <tr class="Data">
                                                <th>Last Name</th>
                                                <td>{playervalues.last_name}</td>
                                            </tr>
                                            <tr class="Data">
                                                <th>Age</th>
                                                <td>{playervalues.age}</td>
                                            </tr>
                                            <tr class="Data">
                                                <th>Club</th>
                                                <td>{playervalues.club}</td>
                                            </tr>
                                            <tr class="Data">
                                                <th>Height</th>
                                                <td>{playervalues.height}</td>
                                            </tr>
                                            <tr class="Data">
                                                <th>Grade</th>
                                                <td>{values.rating}</td>
                                            </tr>

                                        </table>
                                    </div>


                                })}

                            </div>
                            {this.state.data.map((values, index) => {

                                return <div class="NotesTag">
                                    <table>
                                        <tr class="NotesHeader">
                                            <th>Notes</th>
                                        </tr>
                                        <tr>
                                            <td class="NotesBody">{values.notes}</td>
                                        </tr>
                                    </table>

                                </div>

                            })}

                        </div>

                    })}

                </div>

            </div>

        );
    };
}

export default goalkeeper;
