import React from "react";
import NavBar from '../Components/NavigationBar/NavBar'
import './PlayerPos.css'
class centreMidfielderForm extends React.Component{

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
    
    render(){


        return(


              <div>
                <div>

                  <NavBar />

                </div>

                {this.state.data.map((values, index) => {

                    return <div>

                        <div class="PlayerInformation">

                        </div>

                        <div class="InPossession">

                            <div class="TypeNames">

                                <table>
                                    <tr>
                                        <th>In Possession</th>
                                    </tr>
                                </table>


                            </div>

                            <table>
                            <tr class="Data">
                                    <th>Switching play</th>
                                    <td>{values.switching_play}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Control under pressure </th>
                                    <td>{values.control_under_pressure}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Bravery in possession </th>
                                    <td>{values.bravery_in_posession}</td>
                                </tr>

                                <tr class="Data">
                                    <th> Short passing</th>
                                    <td>{values.short_passing}</td>
                                </tr>

                                <tr class="Data">
                                    <th> Running with the ball</th>
                                    <td>{values.running_with_the_ball}</td>
                                </tr>


                                <tr class="Data">
                                    <th>Left foot</th>
                                    <td>{values.left_foot}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Right foot</th>
                                    <td>{values.right_foot}</td>
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
                            <tr class="Data">
                                    <th>1v1</th>
                                    <td>{values.attacking_one_v_one}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Aerial ability</th>
                                    <td>{values.attacking_ariel_ability}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Crossing</th>
                                    <td>{values.crossing}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Shooting</th>
                                    <td>{values.shooting}</td>
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
                                    <th>1v1</th>
                                    <td>{values.defending_one_v_one}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Tackling</th>
                                    <td>{values.tackling}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Aerial ability</th>
                                    <td>{values.defending_ariel_ability}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Closing down</th>
                                    <td>{values.closing_down}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Recovery runs</th>
                                    <td>{values.recovery_runs}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Marking awareness</th>
                                    <td>{values.marking}</td>
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
                                    <th>Finding space</th>
                                    <td>{values.finding_space}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Vision to see a pass</th>
                                    <td>{values.vision}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Creativity</th>
                                    <td>{values.creativity}</td>
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
                                    <th>Speed</th>
                                    <td>{values.speed}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Movement skills</th>
                                    <td>{values.movement_skills}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Strength</th>
                                    <td>{values.strength}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Work rate</th>
                                    <td>{values.work_rate}</td>
                                </tr>

                            </table>

                        </div>

                        <div class="Psychological">

                            <div class="TypeNames">

                                <table>

                                    <tr>
                                        <th>Pyschological</th>
                                    </tr>
                                </table>

                            </div>

                            <table>
                            <tr class="Data">
                                    <th>Concentration</th>
                                    <td>{values.concentration}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Commitment</th>
                                    <td>{values.commitment}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Emotional control</th>
                                    <td>{values.emotional_control}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Communication</th>
                                    <td>{values.communication}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Confidence</th>
                                    <td>{values.confidence}</td>
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
                    <tr class="NotesHeader">
                      <th>Summary</th>
                    </tr>
                    <tr>
                      <td class="NotesBody">{values.summary}</td>
                    </tr>
                  </table>

                </div>

              })}

            </div>

          })}

        </div>

    );
  };
}

export default centreMidfielderForm;
