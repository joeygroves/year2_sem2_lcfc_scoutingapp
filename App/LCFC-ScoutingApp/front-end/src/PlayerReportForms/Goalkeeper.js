import React from 'react'
import './PlayerPos.css'
class GoalkeeperForm extends React.Component {

    state = {

        response: '', handling: '', shot_stopping: '', tendancy_to_punch: '', tendancy_to_catch: '', positioning: '', recovery_saves: '',
        control_when_recieving: '', right_foot: '', left_foot: '', dead_ball_kicks: '', kicking_out_of_hands: '', throwing: '',
        kicking_under_pressure: '', kicking_when_given_time: '', dealing_with_crosses: '', starting_position: '', one_v_one: '', dealing_with_through_ball: '',
        agility: '', reactions: '', strength: '', speed: '', bravery: '', leadership: '', presence: '', communication: '', reaction_to_mistake: '', rating: '',
        notes: '', first_name: '', last_name: '', club_name: '', height: '', age: '', date_played: '', club_played: '', ht_score: '', ft_score: '',shirt_number : '',
    }

    handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch('/api/goalkeeper', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify({
                handling: this.state.handling, shot_stopping: this.state.shot_stopping, tendancy_to_punch: this.state.tendancy_to_punch, tendancy_to_catch: this.state.tendancy_to_catch, positioning: this.state.positioning, recovery_saves: this.state.recovery_saves,
                control_when_recieving: this.state.control_when_recieving, right_foot: this.state.right_foot, left_foot: this.state.left_foot, dead_ball_kicks: this.state.dead_ball_kicks, kicking_out_of_hands: this.state.kicking_out_of_hands,
                throwing: this.state.throwing, kicking_under_pressure: this.state.kicking_under_pressure, kicking_when_given_time: this.state.kicking_when_given_time, dealing_with_crosses: this.state.dealing_with_crosses, starting_position: this.state.starting_position,
                one_v_one: this.state.one_v_one, dealing_with_through_ball: this.state.dealing_with_through_ball, agility: this.state.agility, reactions: this.state.reactions, strength: this.state.strength, speed: this.state.speed, bravery: this.state.bravery, leadership: this.state.leadership,
                presence: this.state.presence, communication: this.state.communication, reaction_to_mistake: this.state.reaction_to_mistake, rating: this.state.rating,shirt_number: this.state.shirt_number,
                notes: this.state.notes, first_name: this.state.first_name, last_name: this.state.last_name ,club_name: this.state.club_name, height: this.state.height, age: this.state.age, date_played: this.state.date_played, club_played: this.state.club_played, ht_score: this.state.ht_score ,ft_score: this.state.ft_score

            }),

        });

        const body = await response.text();

        this.setState({ response: body });

    };



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Goalkeeper</h2>
                <div class="grid-container">

                    <div class="grid-item">

                        <label>First Name: </label>
                        <input value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })}></input>

                        <label>Last Name: </label>
                        <input value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })}></input>

                        <label>Club: </label>
                        <input value={this.state.club_name} onChange={e => this.setState({ club_name: e.target.value })}></input>

                        <label>Shirt Number: </label>
                        <input value={this.state.shirt_number} onChange={e => this.setState({ shirt_number: e.target.value })}></input>

                        <br></br>

                        <label>Height: </label>
                        <input value={this.state.height} onChange={e => this.setState({ height: e.target.value })}></input>

                        <label>Age: </label>
                        <input value={this.state.age} onChange={e => this.setState({ age: e.target.value })}></input>



                        <br></br>

                        <label>Date Scouted: </label>
                        <input value={this.state.date_played} onChange={e => this.setState({ date_played: e.target.value })}></input>

                        <label>Playing Against: </label>
                        <input value={this.state.club_played} onChange={e => this.setState({ club_played: e.target.value })}></input>



                        <br></br>


                        <label>H/T: </label>
                        <input value={this.state.ht_score} onChange={e => this.setState({ ht_score: e.target.value })}></input>

                        <label>F/T: </label>
                        <input value={this.state.ft_score} onChange={e => this.setState({ ft_score: e.target.value })}></input>


                        <h4>Grade</h4>

                        <label>Grade (A-C): </label>


                        <select value={this.state.rating} onChange={e => this.setState({ rating: e.target.value })}>
                            <option>
                                A
                            </option>
                            <option>
                                B+
                            </option>
                            <option>
                                B
                            </option>
                            <option>
                                C
                            </option>
                        </select>

                    </div>

                    <div class="grid-item">
                        <h4>General</h4>

                        <label>Handling: </label>
                        <input type="number" max="10" min="0" value={this.state.handling} onChange={e => this.setState({ handling: e.target.value })}></input>

                        <label>Shot Stopping: </label>
                        <input type="number" max="10" min="0" value={this.state.shot_stopping} onChange={e => this.setState({ shot_stopping: e.target.value })}></input>


                        <br></br>

                        <label>Positioning: </label>
                        <input type="number" max="10" min="0" value={this.state.positioning} onChange={e => this.setState({ positioning: e.target.value })}></input>

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
                        <input type="number" max="10" min="0" value={this.state.bravery} onChange={e => this.setState({ bravery: e.target.value })}></input>

                        <label>Leadership: </label>
                        <input type="number" max="10" min="0" value={this.state.leadership} onChange={e => this.setState({ leadership: e.target.value })}></input>

                        <label>Presence/Aura: </label>
                        <input type="number" max="10" min="0" value={this.state.presence} onChange={e => this.setState({ presence: e.target.value })}></input>
                        <br></br>
                        <label>Communication: </label>
                        <input type="number" max="10" min="0" value={this.state.communication} onChange={e => this.setState({ communication: e.target.value })}></input>

                        <label>Reaction to Mistake: </label>
                        <input type="number" max="10" min="0" value={this.state.reaction_to_mistake} onChange={e => this.setState({ reaction_to_mistake: e.target.value })}></input>

                    </div>


                    <div class="grid-item">
                        <h3>Additional Comments</h3>
                        <textarea class="notes">

                        </textarea>
                    </div>

                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default GoalkeeperForm;