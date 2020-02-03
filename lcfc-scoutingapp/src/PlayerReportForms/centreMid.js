import React from 'react'
import './Goalkeeper.css'
class centreMidfielderForm extends React.Component{
    
    render(){
        return(
            <form>
            <div class="grid-container">

            <div class="grid-item">
                    <h3>In Possession</h3>
                    <label>Control under pressure: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Bravery in possession: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Short passing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Switching play: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Running with the ball: </label>
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
                    <label>Closing down: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Recovery runs: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Marking awareness: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Tactical</h3>
                    <label>Agility: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Finding space: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Vision to see a pass: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Creativity: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Physical</h3>
                    <label>Speed: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Movement skills: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Work rate: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Strength: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                
                <div class="grid-item">
                    <h3>Pyschological</h3>
                    <label>Communication: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Concentration: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Commitment: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Emotional control: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Confidence: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

            </div>
            </form>
        );
    }
}
export default centreMidfielderForm;