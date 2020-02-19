import React from 'react'
import './PlayerPos.css'
class wideMidfielderForm extends React.Component{
    
    render(){
        return(
            <form>
                
            <h2>Wide Midfielder</h2>
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
                    <h3>In Possession</h3>
                    <label>Control: </label>
                  <label class = "control"> </label>
                    <br></br>
                    <label>Receiving under pressure: </label>
                  <label class = "receiving_under_pressure"> </label>
                    <br></br>
                    <label>Short passing: </label>
                  <label class = "short_passing"> </label>
                    <br></br>
                    <label>Switching play: </label>
                  <label class = "switching_play"> </label>
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
                  <label class = "aerial_ability"> </label>
                    <br></br>
                    <label>Crossing: </label>
                  <label class = "crossing"> </label>
                    <br></br>
                    <label>Shooting: </label>
                  <label class = "shooting"> </label>
                    <br></br>
                    <label>Dribbling: </label>
                  <label class = "dribbling"> </label>
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
                    <label>Supporting full back: </label>
                  <label class = "supporting_full_back"> </label>
                    <br></br>
                    <label>Tackling: </label>
                  <label class = "tackling"> </label>
                    <br></br>
                    <label>Pressing: </label>
                  <label class = "pressing"> </label>
                    <br></br>
                    <label>Positional awareness: </label>
                  <label class = "positional_awareness"> </label>
                    <br></br>
                    <label>Recovery runs: </label>
                  <label class = "recovery_runs"> </label>
                    <br></br>
                    <label>Tracking runners: </label>
                  <label class = "tracking_runners"> </label>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Tactical</h3>
                    <label>Agility: </label>
                  <label class = "agility"> </label>
                    <br></br>
                    <label>Coming in off the line: </label>
                  <label class = "coming_in_off_the_line"> </label>
                    <br></br>
                    <label>Finding space out wide: </label>
                  <label class = "finding_space_out_wide"> </label>
                    <br></br>
                    <label>Link up with full back: </label>
                  <label class = "link_up_with_full_back"> </label>
                    <br></br>
                    <label>Willingness to get forward: </label>
                  <label class = "willingness_to_get_forward"> </label>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Physical</h3>
                    <label>Pace: </label>
                  <label class = "pace"> </label>
                    <br></br>
                    <label>Speed when Dribbling: </label>
                  <label class = "speed_when_dribbling"> </label>
                    <br></br>
                    <label>Agility: </label>
                  <label class = "agility"> </label>
                    <br></br>
                    <label>Strength: </label>
                  <label class = "strength"> </label>
                    <br></br>
                    <label>Work rate: </label>
                  <label class = "work_rate"> </label>
                    <br></br>
                </div>

                
                <div class="grid-item">
                    <h3>Pyschological</h3>
                    <label>Bravery: </label>
                  <label class = "bravery"> </label>
                    <br></br>
                    <label>Leadership: </label>
                  <label class = "leadership"> </label>
                    <br></br>
                    <label>Team work: </label>
                  <label class = "team_work"> </label>
                    <br></br>
                    <label>Communication: </label>
                  <label class = "communication"> </label>
                    <br></br>
                    <label>Response to criticism: </label>
                  <label class = "response_to_criticism"> </label>
                    <br></br>
                    <label>Reaction to mistakes: </label>
                  <label class = "reaction_to_mistakes"> </label>
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
export default wideMidfielderForm;