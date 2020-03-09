import React from 'react'
import './PlayerPos.css'
import NavBar from '../Components/NavigationBar/NavBar'
class wideMidfielderForm extends React.Component {
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


              <div class="InPossession">
                <div class="TypeNames">

                  <table>
                    <tr>
                      <th>In Possession</th>
                    </tr>
                  </table>

                </div>

                <table>
                  <tr>
                    <th>Control</th>
                    <td>{values.control}</td>
                  </tr>
                  <tr>
                    <th>Receiving Under Pressure</th>
                    <td>{values.receiving_under_pressure}</td>
                  </tr>
                  <tr>
                    <th>Short Passing</th>
                    <td>{values.short_passing}</td>
                  </tr>
                  <tr>
                    <th>Switching Play</th>
                    <td>{values.switching_play}</td>
                  </tr>
                  <tr>
                    <th>Left Foot</th>
                    <td>{values.right_foot}</td>
                  </tr>
                  <tr>
                    <th>Right Foot</th>
                    <td>{values.left_foot}</td>
                  </tr>


                </table>
              </div>

              <div class="Attacking">

                <div class="TypeNames">

                  <table>
                    <tr>
                      <th>Attacking</th>
                    </tr>
                  </table>

                </div>

                <table>
                  <tr>
                    <th>1 v 1e</th>
                    <td>{values.attacking_one_v_one}</td>
                  </tr>
                  <tr>
                    <th>Crossing</th>
                    <td>{values.crossing}</td>
                  </tr>
                  <tr>
                    <th>Shooting</th>
                    <td>{values.shooting}</td>
                  </tr>
                  <tr>
                    <th>Dribbling</th>
                    <td>{values.dribbling}</td>
                  </tr>
                  <tr>
                    <th>Aerial Ability</th>
                    <td>{values.attacking_ariel_ability}</td>
                  </tr>
                </table>
              </div>

              <div class="Defending">

                <div class="TypeNames">

                  <table>
                    <tr>
                      <th>Defending</th>
                    </tr>
                  </table>

                </div>

                <table>
                  <tr class="Data">
                    <th>One Vs One</th>
                    <td>{values.defending_one_v_one}</td>
                  </tr>
                  <tr class="Data">
                    <th>Defending Aerial Ability</th>
                    <td>{values.defending_ariel_ability}</td>
                  </tr>
                  <tr class="Data">
                    <th>Supporting Full Backs</th>
                    <td>{values.supporting_full_back}</td>
                  </tr>
                  <tr class="Data">
                    <th>Tackling</th>
                    <td>{values.tackling}</td>
                  </tr>
                  <tr class="Data">
                    <th>Pressing</th>
                    <td>{values.pressing}</td>
                  </tr>
                  <tr class="Data">
                    <th>Positional Awareness</th>
                    <td>{values.positional_awareness}</td>
                  </tr>
                  <tr class="Data">
                    <th>Recovery Runs</th>
                    <td>{values.recovery_runs}</td>
                  </tr>
                  <tr class="Data">
                    <th>Tracking Runners</th>
                    <td>{values.tracking_runners}</td>
                  </tr>

                </table>
              </div>

              <div class="Tactical">

                <div class="TypeNames">

                  <table>
                    <tr>
                      <th>Tactical</th>
                    </tr>
                  </table>

                </div>

                <table>
                  <tr class="Data">
                    <th>Agility</th>
                    <td>{values.agility}</td>
                  </tr>
                  <tr class="Data">
                    <th>Coming In Off The Line</th>
                    <td>{values.coming_in_off_the_line}</td>
                  </tr>
                  <tr class="Data">
                    <th>Finding Space Wide </th>
                    <td>{values.finding_space_out_wide}</td>
                  </tr>
                  <tr class="Data">
                    <th>Linking with Full Back</th>
                    <td>{values.link_up_with_full_back}</td>
                  </tr>
                  <tr class="Data">
                    <th>Willingness To Get Forward</th>
                    <td>{values.willingness_to_get_forward}</td>
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
                    <th>Pace</th>
                    <td>{values.pace}</td>
                  </tr>
                  <tr class="Data">
                    <th>Speed When Dribbling</th>
                    <td>{values.speed_when_dribbling}</td>
                  </tr>
                  <tr class="Data">
                    <th>Strength</th>
                    <td>{values.strength}</td>
                  </tr>
                  <tr class="Data">
                    <th>Work Rate</th>
                    <td>{values.work_rate}</td>
                  </tr>


                </table>
              </div>

              <div class="Psychological">

                <div class="TypeNames">

                  <table>
                    <tr>
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
                    <th>Team Work</th>
                    <td>{values.teamwork}</td>
                  </tr>
                  <tr class="Data">
                    <th>Communication</th>
                    <td>{values.communication}</td>
                  </tr>
                  <tr class="Data">
                    <th>Response To Criticism</th>
                    <td>{values.response_to_criticism}</td>
                  </tr>
                  <tr class="Data">
                    <th>Reaction To Mistakes</th>
                    <td>{values.reaction_to_mistakes}</td>
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

export default wideMidfielderForm