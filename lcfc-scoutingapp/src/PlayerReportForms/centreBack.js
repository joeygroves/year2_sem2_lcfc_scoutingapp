import React from 'react'
import './Goalkeeper.css'
class centreBackForm extends React.Component{
    
    render(){
        return(
            <form>
            <div class="grid-container">
                
            <div class="grid-item">
                    <h3>In Possession</h3>
                    <label>Receiving under pressure: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Short passing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Long passing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Carrying the ball forward: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Right foot: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Left foot: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>	
                </div>

                <div class="grid-item">
                    <h3>Attacking</h3>
                    <label>Threat at set plays: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Aerial ability: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Defending</h3>
                    <label>1v1: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Aerial ability: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Tackling: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Marking: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Reading game/interceptions: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Sensing danger: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Defending crosses: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Pressing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Recovery runs: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Tracking runners: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Tactical</h3>
                    <label>Agility: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Angles to receive: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Distances: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Recovering to shape: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Physical</h3>
                    <label>Pace when turning: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Jump/spring: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Mobility: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Strength: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Aggression: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                
                <div class="grid-item">
                    <h3>Pyschological</h3>
                    <label>Bravery: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Leadership: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Team work: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Communication: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Response to criticism: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Reaction to mistakes: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

            </div>
            </form>
        );
    }
}
export default centreBackForm;