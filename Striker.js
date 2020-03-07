import React from "react";
import NavBar from '../Components/NavigationBar/NavBar'
import './PlayerPos.css'
class StrikerForm extends React.Component{

    state = {

        id: 0,
        data: [],
        position: '',
    
    
    }

    componentDidMount() {


        this.setState({ id: this.props.match.params.userId })
    
        this.getPosition();
    
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

    console.log(this.state.position)

    this.setState({ data: body });

  };

  getPosition = async () => {

    const response = await fetch('/api/getPosition', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json',

      },

      body: JSON.stringify({ playerID: this.props.match.params.userId })

    });

    const body = await response.text();


    this.setState({ position: body });

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
                                <tr>
                                    <th>Hold up play</th>
                                    <td>{values.hold_up_play}</td>
                                </tr>

                                <tr>
                                    <th>Receiving under pressure </th>
                                    <td>{values.receiving_under_pressure}</td>
                                </tr>

                                <tr>
                                    <th> Link up play </th>
                                    <td>{values.link_up_play}</td>
                                </tr>

                                <tr>
                                    <th>Left foot</th>
                                    <td>{values.left_foot}</td>
                                </tr>

                                <tr>
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
                                <tr>
                                    <th>1v1</th>
                                    <td>{values.one_v_one}</td>
                                </tr>

                                <tr>
                                    <th>Aerial ability</th>
                                    <td>{values.aerial_ability}</td>
                                </tr>

                                <tr>
                                    <th>Crossing</th>
                                    <td>{values.crossing}</td>
                                </tr>

                                <tr>
                                    <th>Finishing</th>
                                    <td>{values.finishing}</td>
                                </tr>



                                <tr>
                                    <th>Left foot shooting</th>
                                    <td>{values.left_foot_shooting}</td>
                                </tr>

                                <tr>
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
                                <tr>
                                    <th>1v2</th>
                                    <td>{values.one_v_two}</td>
                                </tr>

                                <tr>
                                    <th>Tackling</th>
                                    <td>{values.tackling}</td>
                                </tr>

                                <tr>
                                    <th>Pressing</th>
                                    <td>{values.pressing}</td>
                                </tr>

                                <tr>
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
                                <tr>
                                    <th>Agility</th>
                                    <td>{values.agility}</td>
                                </tr>

                                <tr>
                                    <th>Dropping into space</th>
                                    <td>{values.dropping_into_space}</td>
                                </tr>

                                <tr>
                                    <th>Running the channels</th>
                                    <td>{values.running_the_channels}</td>
                                </tr>

                                <tr>
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
                                <tr>
                                    <th>Pace</th>
                                    <td>{values.pace}</td>
                                </tr>

                                <tr>
                                    <th>Mobility</th>
                                    <td>{values.mobility}</td>
                                </tr>

                                <tr>
                                    <th>Jump/spring</th>
                                    <td>{values.jump}</td>
                                </tr>

                                <tr>
                                    <th>Strength/pinning</th>
                                    <td>{values.strength}</td>
                                </tr>

                                <tr>
                                    <th>Work rate</th>
                                    <td>{values.work_rate}</td>
                                </tr>

                            </table>

                        </div>

                        <div class="Pyschological">

                            <div class="TypeNames">

                                <table>

                                    <tr>
                                        <th>Pyschological</th>
                                    </tr>
                                </table>

                            </div>

                            <table>
                                <tr>
                                    <th>Bravery</th>
                                    <td>{values.bravery}</td>
                                </tr>

                                <tr>
                                    <th>Leadership</th>
                                    <td>{values.leadership}</td>
                                </tr>

                                <tr>
                                    <th>Team work</th>
                                    <td>{values.team_work}</td>
                                </tr>

                                <tr>
                                    <th>Communication</th>
                                    <td>{values.communication}</td>
                                </tr>

                                <tr>
                                    <th>Response to criticism</th>
                                    <td>{values.response_to_criticism}</td>
                                </tr>

                                <tr>
                                    <th>Reaction to mistakes</th>
                                    <td>{values.reaction_to_mistakes}</td>
                                </tr>

                            </table>

                        </div>

                    </div>

                })}

            </div>

        );

    };

}


            
export default StrikerForm;