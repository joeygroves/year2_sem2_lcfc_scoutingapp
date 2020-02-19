import React from 'react'
import './PlayerPos.css'
class StrikerForm extends React.Component{
    
    render(){
        return(
            <form>
                
            <h2><u>Striker</u></h2>
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

                    <label>Hold up play: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Receiving under pressure: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Link up play: </label>
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
                    <br></br>
                    <label>Finishing: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Left foot shooting: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Right foot shooting: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h4>Defending</h4>

                    <label>1v2: </label>
                    <input type="number" max="10" min= "0"></input>
                  
                    <label>Tackling: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Pressing: </label>
                    <input type="number" max="10" min= "0"></input>
               
                    <label>Recovering into shape: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                   
                </div>

                <div class="grid-item">
                    <h4>Tactical</h4>

                    <label>Agility: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Dropping into space </label>
                    <input type="number" max="10" min= "0"></input>
                 
                    <label>Runs off the shoulder </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Running the channels: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Movement off the ball: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h4>Physical</h4>

                    <label>Pace: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Mobility: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Jump/spring: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Strength/pinning: </label>
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
export default StrikerForm;