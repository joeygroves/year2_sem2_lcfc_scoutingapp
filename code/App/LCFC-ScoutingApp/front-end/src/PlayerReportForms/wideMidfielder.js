import React from 'react'
import './PlayerPos.css'
class wideMidfielderForm extends React.Component{
    
    render(){
        return(
            <form>
                
            <h2>Wide Midfielder</h2>
            <div class="grid-container">
               
            <div class="grid-item">
                    <h3>In Possession</h3>
                    <label>Control: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Receiving under pressure: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Short passing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Switching play: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Left foot: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Right foot: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>	
                </div>

                <div class="grid-item">
                    <h3>Attacking</h3>
                    <label>1v1: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Aerial ability: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Crossing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Shooting: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Dribbling: </label>
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
                    <label>Supporting full back: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Tackling: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Pressing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Positional awareness: </label>
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
                    <label>Coming in off the line: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Finding space out wide: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Link up with full back: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Willingness to get forward: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Physical</h3>
                    <label>Pace: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Speed when Dribbling: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Agility: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Strength: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Work rate: </label>
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
export default wideMidfielderForm;