import React from 'react'
import './PlayerPos.css'
class wideMidfielderForm extends React.Component{
    
    render(){
        return(
            <form>
                
            <h2>Wide midfielder</h2>
            <div class="grid-container">
               
            <div class="grid-item">
                    <h4>In Possession</h4>

                    <label>Control: </label>
                    <input type="number" max="10" min= "0"></input>
                  
                    <label>Receiving under pressure: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Short passing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Switching play: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Left foot: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Right foot: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>	
                </div>

                <div class="grid-item">
                    <h4>Attacking</h4>

                    <label>1v1: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    
                    <label>Crossing: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Shooting: </label>
                    <input type="number" max="10" min= "0"></input>

                    <br></br>

                    <label>Dribbling: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Aerial ability: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h4>Defending</h4>

                    <label>1v1: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Aerial ability: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Supporting full back: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Tackling: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Pressing: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Positional awareness: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Recovery runs: </label>
                    <input type="number" max="10" min= "0"></input>
                  
                    <label>Tracking runners: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h4>Tactical</h4>

                    <label>Agility: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Coming in off the line: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Finding space out wide: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Link up with full back: </label>
                    <input type="number" max="10" min= "0"></input>
                 
                    <label>Willingness to get forward: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h4>Physical</h4>

                    <label>Pace: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Speed when Dribbling: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Agility: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Strength: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Work rate: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                
                <div class="grid-item">
                    <h4>Pyschological</h4>

                    <label>Bravery: </label>
                    <input type="number" max="10" min= "0"></input>
                
                    <label>Leadership: </label>
                    <input type="number" max="10" min= "0"></input>
                
                    <label>Team work: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Communication: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Response to criticism: </label>
                    <input type="number" max="10" min= "0"></input>
                
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