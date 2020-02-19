import React from 'react'
import './PlayerPos.css'
class centreMidfielderForm extends React.Component{
    
    render(){
        return(
            <form>
                
            <h2><u>Centre Midfielder</u></h2>
            <div class="grid-container">
            <div class="grid-item">    
                <h4>Player Rating</h4>
                <h6>Code reference: A = Sign Player, B+ = Closely monitor/Follow Up, B = Monitor Player, C = Not good enough</h6>
                <select>
                    <option>A</option>
                    <option>B+</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>

            <div class="grid-item">
                    <h4>In Possession</h4>

                    <label>Control under pressure: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Bravery in possession: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Short passing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Switching play: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Running with the ball: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
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
                    
                    <label>Aerial ability: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Crossing: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Shooting: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h4>Defending</h4>

                    <label>1v1: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Aerial ability: </label>
                    <input type="number" max="10" min= "0"></input>
                  
                    <label>Tackling: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Closing down: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Recovery runs: </label>
                    <input type="number" max="10" min= "0"></input>
                 
                    <label>Marking awareness: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h4>Tactical</h4>

                    <label>Agility: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Finding space: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Vision to see a pass: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Creativity: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h4>Physical</h4>

                    <label>Speed: </label>
                    <input type="number" max="10" min= "0"></input>
                 
                    <label>Movement skills: </label>
                    <input type="number" max="10" min= "0"></input>
                 
                    <label>Work rate: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Strength: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                
                <div class="grid-item">
                    <h4>Pyschological</h4>

                    <label>Communication: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Concentration: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Commitment: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Emotional control: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Confidence: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>
                <div class = "grid-item">
                    <h3>Additional Comments</h3>
                    <textarea class = "commentBox">

                    </textarea>
                </div>
            </div>
            </form>
        );
    }
}
export default centreMidfielderForm;