import React from 'react'
import './PlayerPos.css'
class GoalkeeperForm extends React.Component {



    state = {

        response: '',
        handling: '',
        shot_stopping: '',
        tendancy_to_punch: '',
        tendancy_to_catch: '',
        positioning: '',
        recovery_saves: '',
        control_when_recieving: '',
        right_foot: '',
        left_foot: '',
        dead_ball_kicks: '',
        kicking_out_of_hands: '',
        throwing: '',
        kicking_under_pressure: '',
        kicking_when_given_time: '',
        dealing_with_crosses: '',
        one_v_one: '',
        dealing_with_through_ball: '',
        agility: '',
        reactions: '',
        strength: '',
        speed: '',
        bravery: '',
        leadership: '',
        presence: '',
        communication: '',
        reaction_to_mistake: '',
        rating: '',
        notes: ''
    }

    
    handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch('/api/goalkeeper', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify({
                handling: this.state.handling,
                shot_stopping: this.state.shot_stopping,
                tendancy_to_punch: this.state.tendancy_to_punch,
                tendancy_to_catch: this.state.tendancy_to_catch,
                positioning: this.state.positioning,
                recovery_saves: this.state.recovery_saves,
                control_when_recieving: this.state.control_when_recieving,
                right_foot: this.state.right_foot,
                left_foot: this.state.left_foot,
                dead_ball_kicks: this.state.dead_ball_kicks,
                kicking_out_of_hands: this.state.kicking_out_of_hands,
                throwing: this.state.throwing,
                kicking_under_pressure: this.state.kicking_under_pressure,
                kicking_when_given_time: this.state.kicking_when_given_time,
                dealing_with_crosses: this.state.dealing_with_crosses,
                one_v_one: this.state.one_v_one,
                dealing_with_through_ball: this.state.dealing_with_through_ball,
                agility: this.state.agility,
                reactions: this.state.reactions,
                strength: this.state.strength,
                speed: this.state.speed,
                bravery: this.state.bravery,
                leadership: this.state.leadership,
                presence: this.state.presence,
                communication: this.state.communication,
                reaction_to_mistake: this.state.reaction_to_mistake,
                rating: this.state.rating,
                notes: this.state.notes

            }),

        });

        const body = await response.text();

        this.setState({ response: body });

    };


    render() {
        return (
            <form>
                <h2><u>Goalkeeper</u></h2>
                <div class="grid-container">
                    <div class="grid-item">
                        <h4>Player Rating</h4>
                        <h6>Code reference: A = Sign Player, B+ = Closely monitor/Follow Up, B = Monitor Player, C = Not good enough</h6>
                        <select>
                            <option>A</option>
                            <option>B+</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>

                    <div class="grid-item">

                        <h4>General</h4>

                        <label>Handling: </label>
                        <input type="number" max="10" min="0" value={this.state.handling} onChange={e => this.setState({ handling: e.target.value })}></input>

                        <label>Shot Stopping: </label>
                        <input type="number" max="10" min="0" value={this.state.shot_stopping} onChange={e => this.setState({ shot_stopping: e.target.value })}></input>

                        <label>Positioning: </label>
                        <input type="number" max="10" min="0" value={this.state.positioning} onChange={e => this.setState({ positioning: e.target.value })}></input>


                        <br></br>
                        <label>Recovery Saves: </label>
                        <input type="number" max="10" min="0" value={this.state.recovery_saves} onChange={e => this.setState({ recovery_saves: e.target.value })}></input>

                        <label>Control When Receiving: </label>
                        <input type="number" max="10" min="0" value={this.state.control_when_recieving} onChange={e => this.setState({ control_when_recieving: e.target.value })}></input>

                        <br></br>

                        <label>Left Foot: </label>
                        <input type="number" max="10" min="0" value={this.state.left_foot} onChange={e => this.setState({ left_foot: e.target.value })}></input>

                        <label>Right Foot: </label>
                        <input type="number" max="10" min="0" value={this.state.right_foot} onChange={e => this.setState({ right_foot: e.target.value })}></input>
                        <br></br>

                    </div>

                    <div class="grid-item">

                        <h4>Distribution</h4>


                        <label>Dead Ball Kicks: </label>
                        <input type="number" max="10" min="0" value={this.state.dead_ball_kicks} onChange={e => this.setState({ dead_ball_kicks: e.target.value })}></input>

                        <label>Kicking Out of Hands: </label>
                        <input type="number" max="10" min="0" value={this.state.kicking_out_of_hands} onChange={e => this.setState({ kicking_out_of_hands: e.target.value })}></input>

                        <label>Kicking Under Pressure: </label>
                        <input type="number" max="10" min="0" value={this.state.kicking_under_pressure} onChange={e => this.setState({ kicking_under_pressure: e.target.value })}></input>

                        <label>Kicking When Given Time: </label>
                        <input type="number" max="10" min="0" value={this.state.kicking_when_given_time} onChange={e => this.setState({ kicking_when_given_time: e.target.value })}></input>
                        <br></br>

                        <label>Throwing: </label>
                        <input type="number" max="10" min="0" value={this.state.throwing} onChange={e => this.setState({ throwing: e.target.value })}></input>

                        <br></br>

                    </div>

                    <div class="grid-item">
                        <h4>Decision Making</h4>


                        <label>Tendancy to Punch: </label>
                        <input type="number" max="10" min="0" value={this.state.tendancy_to_punch} onChange={e => this.setState({ tendancy_to_punch: e.target.value })}></input>

                        <label>Tendancy to Catch: </label>
                        <input type="number" max="10" min="0" value={this.state.tendancy_to_catch} onChange={e => this.setState({ tendancy_to_catch: e.target.value })}></input>

                        <label>Starting Position: </label>
                        <input type="number" max="10" min="0" value={this.state.starting_position} onChange={e => this.setState({ starting_position: e.target.value })}></input>
                        <br></br>

                        <label>1v1: </label>
                        <input type="number" max="10" min="0" value={this.state.one_v_one} onChange={e => this.setState({ one_v_one: e.target.value })}></input>

                        <label>Dealing With Through Ball: </label>
                        <input type="number" max="10" min="0" value={this.state.dealing_with_through_ball} onChange={e => this.setState({ dealing_with_through_ball: e.target.value })}></input>

                        <label>Dealing With Crosses: </label>
                        <input type="number" max="10" min="0" value={this.state.dealing_with_crosses} onChange={e => this.setState({ dealing_with_crosses: e.target.value })}></input>
                        <br></br>
                    </div>

                    <div class="grid-item">

                        <h4>Physical</h4>

                        <label>Agility: </label>
                        <input type="number" max="10" min="0" value={this.state.agility} onChange={e => this.setState({ agility: e.target.value })}></input>

                        <label>Reactions: </label>
                        <input type="number" max="10" min="0" value={this.state.reactions} onChange={e => this.setState({ reactions: e.target.value })}></input>

                        <label>Strength: </label>
                        <input type="number" max="10" min="0" value={this.state.strength} onChange={e => this.setState({ strength: e.target.value })}></input>

                        <label>Speed: </label>
                        <input type="number" max="10" min="0" value={this.state.speed} onChange={e => this.setState({ speed: e.target.value })}></input>
                    </div>


                    <div class="grid-item">
                        <h4>Psychological</h4>

                        <label>Bravery: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Leadership: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Presence/Aura: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                        <label>Communication: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Reaction to Mistake: </label>
                        <input type="number" max="10" min="0"></input>
                    </div>
                    <div class="grid-item">
                        <h3>Additional Comments</h3>
                        <textarea class="commentBox" value={this.state.notes} onChange={e => this.setState({ notes: e.target.value })}>

                        </textarea>
                    </div>
                </div>
            </form>
        );
    }
}
export default GoalkeeperForm;