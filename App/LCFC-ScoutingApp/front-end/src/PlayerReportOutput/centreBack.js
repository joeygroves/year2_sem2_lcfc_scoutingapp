import React from "react";
import NavBar from '../Components/NavigationBar/NavBar'
import './PlayerPos.css'
class centreBack extends React.Component {

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


  render() {

    return (

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
                  <th>Receiving Under Pressure</th>
                  <td>{values.receiving_under_pressure}</td>
                </tr>
                <tr>
                  <th>Short Passing</th>
                  <td>{values.short_passing}</td>
                </tr>
                <tr>
                  <th>Long Passing</th>
                  <td>{values.long_passing}</td>
                </tr>
                <tr>
                  <th>Carrying The Ball Forward</th>
                  <td>{values.carrying_the_ball_forward}</td>
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
                  <th>Receiving Under Pressure</th>
                  <td>{values.threat_at_set_plays}</td>
                </tr>
                <tr>
                  <th>Short Passing</th>
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
                <tr class = "Data">
                  <th>One Vs One</th>
                  <td>{values.one_v_one}</td>
                </tr>
                <tr class = "Data">
                  <th>Defending Aerial Ability</th>
                  <td>{values.defending_ariel_ability}</td>
                </tr>
                <tr class = "Data">
                  <th>Tackling</th>
                  <td>{values.tackling}</td>
                </tr>
                <tr class = "Data">
                  <th>Marking</th>
                  <td>{values.marking}</td>
                </tr>
                <tr class = "Data">
                  <th>Interceptions</th>
                  <td>{values.interceptions}</td>
                </tr>
                <tr class = "Data">
                  <th>Sensing Danger</th>
                  <td>{values.sensing_danger}</td>
                </tr>
                <tr class = "Data">
                  <th>Defending Crosses</th>
                  <td>{values.defending_crosses}</td>
                </tr>
                <tr class = "Data">
                  <th>Pressing</th>
                  <td>{values.pressing}</td>
                </tr>
                <tr class = "Data">
                  <th>Recovery Runs</th>
                  <td>{values.recovery_runs}</td>
                </tr>
                <tr class = "Data">
                  <th>Tracking Runner</th>
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
                <tr class = "Data">
                  <th>Agility</th>
                  <td>{values.agility}</td>
                </tr>
                <tr class = "Data">
                  <th>Angles To Recieve</th>
                  <td>{values.angles_to_receive}</td>
                </tr>
                <tr class = "Data">
                  <th>Distance </th>
                  <td>{values.distance}</td>
                </tr>
                <tr class = "Data">
                  <th>Recovering To Shape</th>
                  <td>{values.recovering_to_shape}</td>
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
                <tr class = "Data">
                  <th>Pace When Turning</th>
                  <td>{values.pace_when_turning}</td>
                </tr>
                <tr class = "Data">
                <th>Jumping</th>
                  <td>{values.jump}</td>
                </tr>
                <tr class = "Data">
                  <th>Mobility</th>
                  <td>{values.mobility}</td>
                </tr>
                <tr class = "Data">
                  <th>Strength</th>
                  <td>{values.strength}</td>
                </tr>
                <tr class = "Data">
                <th>Aggression</th>
                  <td>{values.aggression}</td>
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
                <tr class = "Data">
                  <th>Bravery</th>
                  <td>{values.bravery}</td>
                </tr>
                <tr class = "Data">
                  <th>Leadership</th>
                  <td>{values.leadership}</td>
                </tr>
                <tr class = "Data">
                  <th>Team Work</th>
                  <td>{values.team_work}</td>
                </tr>
                <tr class = "Data">
                  <th>Communication</th>
                  <td>{values.communication}</td>
                </tr>
                <tr class = "Data">
                  <th>Response To Criticism</th>
                  <td>{values.response_to_criticism}</td>
                </tr>
                <tr class = "Data">
                  <th>Reaction To Mistakes</th>
                  <td>{values.reaction_to_mistake}</td>
                </tr>



              </table>
            </div>





          </div>


        })}


      </div>


    );
  };

}



export default centreBack;