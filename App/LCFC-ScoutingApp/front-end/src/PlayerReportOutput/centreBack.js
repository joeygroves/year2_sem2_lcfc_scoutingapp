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
                    <th>Receiving Under Pressure</th>
                    <td>{values.threat_at_set_plays}</td>
                  </tr>
                  <tr>
                    <th>Short Passing</th>
                    <td>{values.attacking_ariel_ability}</td>
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
                    <th>Receiving Under Pressure</th>
                    <td>{values.threat_at_set_plays}</td>
                  </tr>
                  <tr>
                    <th>Short Passing</th>
                    <td>{values.attacking_ariel_ability}</td>
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





            </div>
          

        })}


      </div>


    );
  };

}



export default centreBack;