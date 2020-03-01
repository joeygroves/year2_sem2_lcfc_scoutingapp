import React from 'react'
import './PlayerPos.css'
class StrikerForm extends React.Component{
    
    render(){
        return(
            <form>
                
            <h2>Striker</h2>
            <div class="grid-container">
            <div class="grid-item">    
                <h3>Player Rating</h3>
                <label>Grade: </label>
                    <label class ="rating"></label>
                
            </div>
            <div class="grid-item">
                    <h3>In Possession</h3>

                    <label>Hold up play: </label>
                    <label class ="hold_up_play"></label>
                    <br></br>
                    <label>Receiving under pressure: </label>
                    <label class ="recieving_under_pressure"></label>
                    <br></br>
                    <label>Link up play: </label>
                    <label class ="link_up_play"></label>
                    <br></br>
                    <label>Left foot: </label>
                    <label class ="right_foot"></label>
                    <br></br>
                    <label>Right foot: </label>
                    <label class ="left_foot"></label>
                    <br></br>	
                </div>

                <div class="grid-item">
                    <h3>Attacking</h3>

                    <label>1v1: </label>
                    <label class ="one_v_one"></label>
                    <br></br>
                    <label>Aerial ability: </label>
                    <label class ="ariel_ability"></label>
                    <br></br>
                    <label>Crossing: </label>
                    <label class ="crossing"></label>
                    <br></br>
                    <label>Finishing: </label>
                    <label class ="finishing"></label>
                    <br></br>
                    <label>Right foot shooting: </label>
                    <label></label>
                    <br class ="right_foot_shooting"></br>
                    <label>Left foot shooting: </label>
                    <label class ="left_foot_shooting"></label>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Defending</h3>

                    <label>1v2: </label>
                    <label class ="one_v_two"></label>
                    <br></br>
                    <label>Tackling: </label>
                    <label class ="tackling"></label>
                    <br></br>
                    <label>Pressing: </label>
                    <label class ="pressing"></label>
                    <br></br>
                    <label>Recovering into shape: </label>
                    <label class ="recovering_into_shape"></label>
                    <br></br>
                   
                </div>

                <div class="grid-item">
                    <h3>Tactical</h3>

                    <label>Agility: </label>
                    <label class ="agility"></label>
                    <br></br>
                    <label>Dropping into space </label>
                    <label class ="dropping_into_space"></label>
                    <br></br>
                    <label>Runs off the shoulder </label>
                    <label class ="runs_off_the_shoulder"></label>
                    <br></br>
                    <label>Running the channels: </label>
                    <label class ="running_into_channels"></label>
                    <br></br>
                    <label>Movement off the ball: </label>
                    <label class ="movement_off_the_ball"></label>
                    <br></br>
                </div>

                <div class="grid-item">
                    <h3>Physical</h3>

                    <label>Pace: </label>
                    <label class ="pace"></label>
                    <br></br>
                    <label>Mobility: </label>
                    <label class ="mobility"></label>
                    <br></br>
                    <label>Jump/spring: </label>
                    <label class ="jump"></label>
                    <br></br>
                    <label>Strength/pinning: </label>
                    <label class ="strength"></label>
                    <br></br>
                    <label>Work rate: </label>
                    <label class ="work_rate"></label>
                    <br></br>
                </div>

                
                <div class="grid-item">
                    <h3>Pyschological</h3>

                    <label>Bravery: </label>
                    <label class ="bravery"></label>
                    <br></br>
                    <label>Leadership: </label>
                    <label class ="leadership"></label>
                    <br></br>
                    <label>Team work: </label>
                    <label class ="team_work"></label>
                    <br></br>
                    <label>Communication: </label>
                    <label class ="communication"></label>
                    <br></br>
                    <label>Response to criticism: </label>
                    <label class ="response_to_criticism"></label>
                    <br></br>
                    <label>Reaction to mistakes: </label>
                    <label class ="reaction_to_mistakes"></label>
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
export default StrikerForm;