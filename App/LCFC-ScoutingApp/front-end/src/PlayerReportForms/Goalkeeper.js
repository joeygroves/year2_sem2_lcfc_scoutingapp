import React from 'react'
import './PlayerPos.css'
class GoalkeeperForm extends React.Component{
    
    render(){
        return(
            <form>
            <h2>Goalkeeper</h2>
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
                    <h3>General</h3>

                    <label>Handling: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Shot Stopping: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Tendancy to Punch: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Positioning: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Recovery Saves: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Control When Receiving: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>	
                    <label>Right Foot: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Left Foot: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>
                <div class="grid-item">
                    <h3>Distribution</h3>

                    <label>Dead Ball Kicks: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Kicking Our of Hands: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Throwing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Kicking Under Pressure: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Kicking When Given Time: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>                    
                </div>
                <div class="grid-item">
                    <h3>Decision Making</h3>
                    <label>Dealing With Crosses: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Tendancy to Punch: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Tendancy to Catch: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Starting Position: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>1v1: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Dealing With Through Ball: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>                    

                </div>
                
                <div class="grid-item">
                    <h3>Physical</h3>
                    <label>Agility: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Reactions: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Strength: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Speed: </label>
                    <input type="number" max="10" min= "0"></input>                    
                </div>
                <div class="grid-item">
                    <h3>Psychological</h3>
                    <label>Bravery: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Leadership: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Presence/Aura: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Communication: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Reaction to Mistake: </label>
                    <input type="number" max="10" min= "0"></input>                    
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
export default GoalkeeperForm;