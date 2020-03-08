import React from "react";
import NavBar from '../Components/NavigationBar/NavBar'
import './PlayerPos.css'
class StrikerForm extends React.Component{

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
                                    <th>Hold up play</th>
                                    <td>{values.hold_up_play}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Receiving under pressure </th>
                                    <td>{values.receiving_under_pressure}</td>
                                </tr>

                                <tr class="Data">
                                    <th> Link up play </th>
                                    <td>{values.link_up_play}</td>
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
                                    <td>{values.one_v_one}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Aerial ability</th>
                                    <td>{values.ariel_ability}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Crossing</th>
                                    <td>{values.crossing}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Finishing</th>
                                    <td>{values.finishing}</td>
                                </tr>



                                <tr class="Data">
                                    <th>Left foot shooting</th>
                                    <td>{values.left_foot_shooting}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Right foot shooting</th>
                                    <td>{values.right_foot_shooting}</td>
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
                                    <th>1v2</th>
                                    <td>{values.one_v_two}</td>
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
                                    <th>Recovering into shape</th>
                                    <td>{values.recovering_into_shape}</td>
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
                                    <th>Dropping into space</th>
                                    <td>{values.dropping_into_space}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Running the channels</th>
                                    <td>{values.running_the_channels}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Movement off the ball</th>
                                    <td>{values.movement_off_the_ball}</td>
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
                                    <th>Mobility</th>
                                    <td>{values.mobility}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Jump/spring</th>
                                    <td>{values.jump}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Strength/pinning</th>
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
                                    <th>Bravery</th>
                                    <td>{values.bravery}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Leadership</th>
                                    <td>{values.leadership}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Team work</th>
                                    <td>{values.teamwork}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Communication</th>
                                    <td>{values.communication}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Response to criticism</th>
                                    <td>{values.response_to_criticism}</td>
                                </tr>

                                <tr class="Data">
                                    <th>Reaction to mistakes</th>
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





            
export default StrikerForm;