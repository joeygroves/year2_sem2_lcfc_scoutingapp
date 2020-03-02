import React from 'react'
import './PlayerPos.css'
class fullBackForm extends React.Component{
    
    render(){
        return(
            <form>
                
            <h2>Full Back</h2>

            <div class="grid-container">
            <div class="grid-item">    
                <h3>Player Rating</h3>
               <label class = "rating"></label>
            </div>    
            <div class="grid-item">
                    <h3>In Possession</h3>
                    <label>Receiving under pressure: </label>
                    <label class = "recieving_under_pressure"></label>
                    <br></br>
                    <label>Short passing: </label>
                    <label class = "short_passing"></label>
                    <br></br>
                    <label>Long passing: </label>
                    <label class = "long_passing"></label>
                    <br></br>
                    <label>Control: </label>
                    <label class = "control"></label>
                    <br></br>
                    <label>Right foot: </label>
                    <label class = "right_foot"></label>
                    <br></br>
                    <label>Left foot: </label>
                    <label class = "left_foot"></label>
                    <br></br>	
                </div>

                <div class="grid-item">
                    <h3>Attacking</h3>
                    <label>1v1: </label>
                    <label class = "attacking_one_v_one"></label>
                    <br></br>
                    <label>Aerial ability: </label>
                    <label class = "attacking_aerial_ability"></label>
                    <br></br>
                    <label>Crossing: </label>
                    <label class = "crossing"></label>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Defending</h3>
                    <label>1v1: </label>
                    <label class = "defending_one_v_one"></label>
                    <br></br>
                    <label>Aerial ability: </label>
                    <label class = "defending_ariel_ability"></label>
                    <br></br>
                    <label>Tackling: </label>
                    <label class = "tackling"></label>
                    <br></br>
                    <label>Defending far post: </label>
                    <label class = "defending_far_post"></label>
                    <br></br>
                    <label>Stop the cross: </label>
                    <label class = "stopping_the_cross"></label>
                    <br></br>
                    <label>Pressing: </label>
                    <label class = "pressing"></label>
                    <br></br>
                    <label>Recovery runs: </label>
                    <label class = "recovery_runs"></label>
                    <br></br>
                    <label>Tracking runners: </label>
                    <label class = "tracking_runners"></label>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Tactical</h3>
                    <label>Agility: </label>
                    <label class = "agility"></label>
                    <br></br>
                    <label>Angles to receive: </label>
                    <label class = "angles_to_recieve"></label>
                    <br></br>
                    <label>Link up with winger: </label>
                    <label class = "link_up_with_winger"></label>
                    <br></br>
                    <label>Covering across: </label>
                    <label class = "covering_across"></label>
                    <br></br>
                    <label>Willingness to get forward: </label>
                    <label class = "willlingness_to_get_forward"></label>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Physical</h3>
                    <label>Pace: </label>
                    <label class = "pace"></label>
                    <br></br>
                    <label>Mobility: </label>
                    <label class = "mobility"></label>
                    <br></br>
                    <label>Work rate: </label>
                    <label class = "work_rate"></label>
                    <br></br>
                    <label>Strength: </label>
                    <label class = "strength"></label>
                    <br></br>
                    <label>Jump/spring: </label>
                    <label class = "jump"></label>
                    <br></br>
                </div>

                
                <div class="grid-item">
                    <h3>Pyschological</h3>
                    <label>Bravery: </label>
                    <label class = "bravery"></label>
                    <br></br>
                    <label>Leadership: </label>
                    <label class = "leadership"></label>
                    <br></br>
                    <label>Team work: </label>
                    <label class = "team_work"></label>
                    <br></br>
                    <label>Communication: </label>
                    <label class = "communicaton"></label>
                    <br></br>
                    <label>Response to criticism: </label>
                    <label class = "reponse_to_criticism"></label>
                    <br></br>
                    <label>Reaction to mistakes: </label>
                    <label class = "reaction_to_mistake"></label>
                    <br></br>
                </div>
                <div class = "grid-item">
                    <h3>Additional Comments</h3>
                    <textarea class = "notes" readOnly>

                    </textarea>
                </div>
            </div>
            </form>
        );
    }
}
export default fullBackForm;