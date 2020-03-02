import React from 'react'
import './PlayerPos.css'
class GoalkeeperForm extends React.Component {

    render() {
        return (
            <form>
                <h2>Goalkeeper</h2>
                <div class="grid-container">
                    <div class="grid-item">
                        <h3>Player Rating</h3>
                        <label class = "rating"></label>
                    </div>
                    <div class="grid-item">
                        <h3>General</h3>

                        <label>Handling: </label>
                        <label class = "handling"></label>
                        <br></br>
                        <label>Shot Stopping: </label>
                        <label class = "shot_stopping"></label>
                        <br></br>
                        <label>Positioning: </label>
                        <label class = "positioning"></label>
                        <br></br>
                        <label>Recovery Saves: </label>
                        <label class = "recovery_saves"></label>
                        <br></br>
                        <label>Control When Receiving: </label>
                        <label class = "control_when_receiving"></label>
                        <br></br>
                        <label>Right Foot: </label>
                        <label class = "right_foot"></label>
                        <br></br>
                        <label>Left Foot: </label>
                        <label class = "left_foot"></label>
                        <br></br>
                    </div>
                    <div class="grid-item">
                        <h3>Distribution</h3>

                        <label>Dead Ball Kicks: </label>
                        <label class = "dead_ball_kicks"></label>
                        <br></br>
                        <label>Kicking Our of Hands: </label>
                        <label class = "kicking_out_of_hands"></label>
                        <br></br>
                        <label>Throwing: </label>
                        <label class = "throwing"></label>
                        <br></br>
                        <label>Kicking Under Pressure: </label>
                        <label class = "kicking_under_pressure"></label>
                        <br></br>
                        <label>Kicking When Given Time: </label>
                        <label class = "kicking_when_given_time"></label>
                        <br></br>
                    </div>
                    <div class="grid-item">
                        <h3>Decision Making</h3>
                        <label>Dealing With Crosses: </label>
                        <label class = "dealing_with_crosses"></label>
                        <br></br>
                        <label>Tendancy to Punch: </label>
                        <label class = "tendancy_to_punch"></label>
                        <br></br>
                        <label>Tendancy to Catch: </label>
                        <label class = "tendancy_to_catch"></label>
                        <br></br>
                        <label>Starting Position: </label>
                        <label class = "starting_position"></label>
                        <br></br>
                        <label>1v1: </label>
                        <label class = "one_v_one"></label>
                        <br></br>
                        <label>Dealing With Through Ball: </label>
                        <label class = "dealing_with_through_ball"></label>
                        <br></br>

                    </div>

                    <div class="grid-item">
                        <h3>Physical</h3>
                        <label>Agility: </label>
                        <label class = "agility"></label>
                        <br></br>
                        <label>Reactions: </label>
                        <label class = "reactions"></label>
                        <br></br>
                        <label>Strength: </label>
                        <label class = "strength"></label>
                        <br></br>
                        <label>Speed: </label>
                        <label class = "speed"></label>
                    </div>
                    <div class="grid-item">
                        <h3>Psychological</h3>
                        <label>Bravery: </label>
                        <label class = "bravery"></label>
                        <br></br>
                        <label>Leadership: </label>
                        <label class = "leadership"></label>
                        <br></br>
                        <label>Presence/Aura: </label>
                        <label class = "presence"></label>
                        <br></br>
                        <label>Communication: </label>
                        <label class = "communication"></label>
                        <br></br>
                        <label>Reaction to Mistake: </label>
                        <label class = "reaction_to_mistake"></label>
                    </div>
                    <div class="grid-item">
                        <h3>Additional Comments</h3>
                        <textarea class="notes" readOnly>

                        </textarea>
                    </div>
                </div>
            </form>
        );
    }
}
export default GoalkeeperForm;