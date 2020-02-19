import React from 'react'
import './PlayerPos.css'
class GoalkeeperForm extends React.Component{
    

    
    render(){
        return(
            <form>
            <h2>Goalkeeper</h2>
            <div class="grid-container">

                <div class="grid-item">
                    <h4>General</h4>

                    <label>Handling: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Shot Stopping: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Tendancy to Punch: </label>
                    <input type="number" max="10" min= "0"></input>

                    <br></br>

                    <label>Positioning: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Recovery Saves: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Control When Receiving: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <br></br>	

                    <label>Left Foot: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Right Foot: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">

                    <h4>Distribution</h4>

                    <label>Dead Ball Kicks: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Kicking Out of Hands: </label>
                    <input type="number" max="10" min= "0"></input>
                  
                    <label>Kicking Under Pressure: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Kicking When Given Time: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>   

                    <label>Throwing: </label>
                    <input type="number" max="10" min= "0"></input>
                  
                    <br></br>
                                    
                </div>

                <div class="grid-item">
                    <h4>Decision Making</h4>

                    
                    <label>Tendancy to Punch: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Tendancy to Catch: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Starting Position: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>

                    <label>1v1: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Dealing With Through Ball: </label>
                    <input type="number" max="10" min= "0"></input>
                                      
                    <label>Dealing With Crosses: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>
                
                <div class="grid-item">

                    <h4>Physical</h4>

                    <label>Agility: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Reactions: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Strength: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Speed: </label>
                    <input type="number" max="10" min= "0"></input>                    
                </div>

                <div class="grid-item">
                    <h4>Psychological</h4>

                    <label>Bravery: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Leadership: </label>
                    <input type="number" max="10" min= "0"></input>
                   
                    <label>Presence/Aura: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Communication: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Reaction to Mistake: </label>
                    <input type="number" max="10" min= "0"></input>                    
                </div>
            </div>
            </form>
        );
    }
}
export default GoalkeeperForm;