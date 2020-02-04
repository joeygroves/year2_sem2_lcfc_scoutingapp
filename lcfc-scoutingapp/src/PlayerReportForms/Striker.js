import React from 'react'
import './PlayerPos.css'
class StrikerForm extends React.Component{
    
    render(){
        return(
            <form>
                
            <h2>Striker</h2>
            <div class="grid-container">

            <div class="grid-item">
                    <h3>In Possession</h3>

                    <label>Hold up play: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Receiving under pressure: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Link up play: </label>
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
                    <label>Finishing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Right foot shooting: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Left foot shooting: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Defending</h3>

                    <label>1v2: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Tackling: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Pressing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Recovering into shape: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                   
                </div>

                <div class="grid-item">
                    <h3>Tactical</h3>

                    <label>Agility: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Dropping into space </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Runs off the shoulder </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Running the channels: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Movement off the ball: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Physical</h3>

                    <label>Pace: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Mobility: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Jump/spring: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Strength/pinning: </label>
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
export default StrikerForm;