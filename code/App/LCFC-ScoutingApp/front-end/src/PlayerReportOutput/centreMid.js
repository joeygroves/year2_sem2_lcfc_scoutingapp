import React from 'react'
import './PlayerPos.css'
class centreMidfielderForm extends React.Component{
    
    render(){
        return(
            <form>
                
            <h2>Centre Midfielder</h2>
            <div class="grid-container">
            <div class="grid-item">    
                <h3>Player Rating</h3>
                <label class = "rating"></label>
            </div>
            <div class="grid-item">
                    <h3>In Possession</h3>
                    <label>Control under pressure: </label>
                  <label class = "control_under_pressure"> </label>
                    <br></br>
                    <label>Bravery in possession: </label>
                  <label class = "bravery_in_possession"> </label>
                    <br></br>
                    <label>Short passing: </label>
                  <label class = "short_passing"> </label>
                    <br></br>
                    <label>Switching play: </label>
                  <label class = "switching_play"> </label>
                    <br></br>
                    <label>Running with the ball: </label>
                  <label class = "running_with_the_ball"> </label>
                    <br></br>
                    <label>Left foot: </label>
                  <label class = "left_foot"> </label>
                    <br></br>
                    <label>Right foot: </label>
                  <label class = "right_foot"> </label>
                    <br></br>	
                </div>

                <div class="grid-item">
                    <h3>Attacking</h3>
                    <label>1v1: </label>
                  <label class = "1v1"> </label>
                    <br></br>
                    <label>Aerial ability: </label>
                  <label class = "aerial ability"> </label>
                    <br></br>
                    <label>Crossing: </label>
                  <label class = "crossing"> </label>
                    <br></br>
                    <label>Shooting: </label>
                  <label class = "shooting"> </label>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Defending</h3>
                    <label>1v1: </label>
                  <label class = "1v1"> </label>
                    <br></br>
                    <label>Aerial ability: </label>
                  <label class = "aerial_ability"> </label>
                    <br></br>
                    <label>Tackling: </label>
                  <label class = "tackling"> </label>
                    <br></br>
                    <label>Closing down: </label>
                  <label class = "closing_down"> </label>
                    <br></br>
                    <label>Recovery runs: </label>
                  <label class = "recovery_runs"> </label>
                    <br></br>
                    <label>Marking awareness: </label>
                  <label class = "marking_awareness"> </label>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Tactical</h3>
                    <label>Agility: </label>
                  <label class = "agility"> </label>
                    <br></br>
                    <label>Finding space: </label>
                  <label class = "finding_space"> </label>
                    <br></br>
                    <label>Vision to see a pass: </label>
                  <label class = "vision_to_see_a_pass"> </label>
                    <br></br>
                    <label>Creativity: </label>
                  <label class = "creativity"> </label>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Physical</h3>
                    <label>Speed: </label>
                  <label class = "speed"> </label>
                    <br></br>
                    <label>Movement skills: </label>
                  <label class = "movement_skills"> </label>
                    <br></br>
                    <label>Work rate: </label>
                  <label class = "work_rate"> </label>
                    <br></br>
                    <label>Strength: </label>
                  <label class = "strength"> </label>
                    <br></br>
                </div>

                
                <div class="grid-item">
                    <h3>Pyschological</h3>
                    <label>Communication: </label>
                  <label class = "communication"> </label>
                    <br></br>
                    <label>Concentration: </label>
                  <label class = "concentration"> </label>
                    <br></br>
                    <label>Commitment: </label>
                  <label class = "commitment"> </label>
                    <br></br>
                    <label>Emotional control: </label>
                  <label class = "emotional_control"> </label>
                    <br></br>
                    <label>Confidence: </label>
                  <label class = "confidence"> </label>
                    <br></br>
                </div>
                <div class = "grid-item">
                    <h3>Additional Comments</h3>
                    <textarea class = "notes">

                    </textarea>
                </div>
            </div>
            </form>
        );
    }
}
export default centreMidfielderForm;