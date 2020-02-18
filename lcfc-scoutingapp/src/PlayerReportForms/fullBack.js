import React from 'react'
import './PlayerPos.css'
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import './PlayerPos.css'
=======
import './Goalkeeper.css'
>>>>>>> d0fd623ddcf0c98fc86f5592b2f31c9b10b96ab9
>>>>>>> aea6554fc02e053f47e75f258114d36dc8f8fe7c
>>>>>>> master
class fullBackForm extends React.Component{
    
    render(){
        return(
            <form>
<<<<<<< HEAD
                
            <h2>Full Back</h2>

=======
<<<<<<< HEAD
            <h2>Full back</h2>
=======
<<<<<<< HEAD
                
            <h2>Full Back</h2>
=======
>>>>>>> d0fd623ddcf0c98fc86f5592b2f31c9b10b96ab9
>>>>>>> aea6554fc02e053f47e75f258114d36dc8f8fe7c
>>>>>>> master
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
                    <label>Receiving under pressure: </label>
                    <input type="number" max="10" min= "0"></input>
       
                    <label>Short passing: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Long passing: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Control: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Right foot: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Left foot: </label>
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
                    
                </div>

                <div class="grid-item">
                    <h4>Defending</h4>
                    <label>1v1: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Aerial ability: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Tackling: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Defending far post: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Stop the cross: </label>
                    <input type="number" max="10" min= "0"></input>
                    
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
                  
                    <label>Link up with winger: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Covering across: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Willingness to get forward: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h4>Physical</h4>
                    <label>Pace: </label>
                    <input type="number" max="10" min= "0"></input>
                  
                    <label>Mobility: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Work rate: </label>
                    <input type="number" max="10" min= "0"></input>
                    <br></br>
                    <label>Strength: </label>
                    <input type="number" max="10" min= "0"></input>
                    
                    <label>Jump/spring: </label>
                    <input type="number" max="10" min= "0"></input>
                    
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
export default fullBackForm;