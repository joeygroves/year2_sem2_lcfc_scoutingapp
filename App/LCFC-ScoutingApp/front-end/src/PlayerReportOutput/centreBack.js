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

            <div class="TableHeaderNames">
              <table>
                <tr>
                  <th>Receiving Under Pressure</th>
                </tr>
              </table>
            </div>

            <div class="TableData">
              <table>
                <tr>
                  <td>{values.receiving_under_pressure}</td>
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