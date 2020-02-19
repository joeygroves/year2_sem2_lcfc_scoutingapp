import React from 'react'
import './PlayerPos.css'
class PlayerInfoForm extends React.Component{
    
    render(){
        return(
            <form>
            <h2>Player Information</h2>
            <div class="grid-container">
                <div class="grid-item">
                    <label>Name: </label>
                    <input></input>
                    
                    <label>Age: </label>
                    <input type = "number" min="2" max="100"></input>

                    <label>Height: </label>
                    <input ></input>

                    <label>Club: </label>
                    <input></input>

                    <br></br>
                    
                    <label>Playing Against: </label>
                    <input ></input>
                    
                    
                    <label>Date: </label>
                    <input ></input>
                    
                
                    <br></br>
                    
                    
                    <label>H/T: </label>
                    <input></input>
                    
                    <label>F/T: </label>
                    <input></input>
                </div>
            </div>
            </form>
        );
    }
}
export default PlayerInfoForm;