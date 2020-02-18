import React from 'react'
import './PlayerPos.css'
class centreBackForm extends React.Component{
    
    render(){
        return(
            <form>
                
            <h2>Centre Back</h2>
            <div class="grid-container">
            <div class="grid-item">    
                <h3>Player Rating</h3>
                <select>
                    <option>A</option>
                    <option>B+</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>
            <div class="grid-item">

                    <h4>In Possession</h4>
                    <label for = "RUP">Receiving under pressure: </label>
                    <input class = "RUP" type="number" max="10" min= "0"></input>

                    <label for = "SHORTP">Short passing: </label>
                    <input class = "SHORTP" type="number" max="10" min= "0"></input>
                   
                    <label>Long passing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Carrying the ball forward: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Left foot: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Right foot: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>	
                </div>

                <div class="grid-item">
                    <h4>Attacking</h4>

                    <label>Threat at set plays: </label>
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
                    
                    <label>Tackling: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Marking: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Reading game/interceptions: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Sensing danger: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Defending crosses: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>

                    <label>Pressing: </label>
                    <input type="number" max="10" min= "0"></input>
                   
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
                    
                    <label>Angles to receive: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Distances: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Recovering to shape: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h4>Physical</h4>

                    <label>Pace when turning: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Jump/spring: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Mobility: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Strength: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Aggression: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                
                <div class="grid-item">
                    <h4>Pyschological</h4>

                    <style>

                    <label>Bravery: </label>
                    <input type="number" max="10" min= "0"></input>

                    </style>
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
export default centreBackForm;