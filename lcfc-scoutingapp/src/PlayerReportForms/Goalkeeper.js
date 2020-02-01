import React from 'react'
import './Goalkeeper.css'
class GoalkeeperForm extends React.Component{
    
    render(){
        return(
            <form>
            <div class="grid-container">
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
            </div>
            </form>
        );
    }
}
export default GoalkeeperForm;