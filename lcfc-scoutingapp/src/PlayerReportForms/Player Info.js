import React from 'react'
import './Goalkeeper.css'
class GoalkeeperForm extends React.Component{
    
    render(){
        return(
            <form>
            <div class="grid-container">
                <div class="grid-item">
                    <h3>Player Information</h3>
                    <label>Name: </label>
                    <input></input>
                    <br></br>
                    <label>Height: </label>
                    <input ></input>
                    <br></br>
                    <label>Playing Against: </label>
                    <input ></input>
                    <br></br>
                    <label>Date: </label>
                    <input ></input>
                    <br />
                    <label>Age: </label>
                    <input></input>
                    <br></br>
                    <label>Contract: </label>
                    <input ></input>
                    <br></br>
                    <label>Club: </label>
                    <input></input>
                    <br></br>
                    <label>H/T: </label>
                    <input></input>
                    <br></br>
                    <label>F/T: </label>
                    <input></input>
                </div>
            </div>
            </form>
        );
    }
}
export default GoalkeeperForm;