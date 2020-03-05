import React from 'react'

import './PlayerPos.css'

class fullBackForm extends React.Component {
    state = {
        //In Possession
        receiving_under_pressure: '', short_passing: '', long_passing: '', control: '', right_foot: '', left_foot: '',

        //Attacking
        attacking_one_v_one: '', attacking_ariel_ability: '', crossing: '',

        //Defending
        defending_one_v_one: '', defending_ariel_ability: '', tackling: '',
        defending_far_post: '', stopping_the_cross: '', pressing: '', recovery_runs: '', tracking_runners: '',

        //Tactical
        agility: '', angles_to_recieve: '', link_up_with_winger: '', covering_across: '', willlingness_to_get_forward: '',

        //Physical
        pace: '', mobility: '', work_rate: '', strength: '', jump: '',

        //Psychological
        bravery: '', leadership: '', team_work: '', communicaton: '', reponse_to_criticism: '', reaction_to_mistake: '',

        //Rating
        rating: '',

        //Additional Comments
        notes: '',


        //Player Information
        first_name: '', last_name: '', club_name: '', height: '', age: '', date_played: '', club_played: '', ht_score: '', ft_score: '', shirt_number: '',
    }


    handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch('/api/fullback', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify({

                //In Posession
                receiving_under_pressure: this.state.receiving_under_pressure, short_passing: this.state.short_passing, long_passing: this.state.long_passing, control: this.state.control, right_foot: this.state.right_foot, left_foot: this.state.left_foot,

                //Attacking
                attacking_one_v_one: this.state.attacking_one_v_one, attacking_ariel_ability: this.state.attacking_ariel_ability, crossing: this.state.crossing,

                //Defending
                defending_one_v_one: this.state.defending_one_v_one, defending_ariel_ability: this.state.defending_ariel_ability, tackling: this.state.tackling,
                defending_far_post: this.state.defending_far_post, stopping_the_cross: this.state.stopping_the_cross, pressing: this.state.pressing, recovery_runs: this.state.recovery_runs, tracking_runners: this.state.tracking_runners,

                //Tactical
                agility: this.state.agility, angles_to_recieve: this.state.angles_to_recieve, link_up_with_winger: this.state.link_up_with_winger, covering_across: this.state.covering_across, willlingness_to_get_forward: this.state.willlingness_to_get_forward,

                //Physical
                pace: this.state.pace, mobility: this.state.mobility, work_rate: this.state.work_rate, strength: this.state.strength, jump: this.state.jump,

                //Psychological
                bravery: this.state.bravery, leadership: this.state.leadership, team_work: this.state.team_work, communicaton: this.state.communicaton, reponse_to_criticism: this.state.reponse_to_criticism, reaction_to_mistake: this.state.reaction_to_mistake,


                rating: this.state.rating,

                notes: this.state.notes, first_name: this.state.first_name, last_name: this.state.last_name,
                club_name: this.state.club_name, height: this.state.height, age: this.state.age,
                date_played: this.state.date_played, club_played: this.state.club_played, ht_score: this.state.ht_score,
                ft_score: this.state.ft_score, shirt_number: this.state.shirt_number,

            }),

        });

        const body = await response.text();

        this.setState({ response: body });

    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <h2><u>Full back</u></h2>

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
                        <h4>In Possession</h4>
                        <label>Receiving under pressure: </label>
                        <input type="number" max="10" min="0" value={this.state.receiving_under_pressure} onChange={e => this.setState({ receiving_under_pressure: e.target.value })}></input>

                        <label>Short passing: </label>
                        <input type="number" max="10" min="0" value={this.state.short_passing} onChange={e => this.setState({ short_passing: e.target.value })}></input>

                        <label>Long passing: </label>
                        <input type="number" max="10" min="0" value={this.state.long_passing} onChange={e => this.setState({ long_passing: e.target.value })}></input>
                        <br></br>
                        <label>Control: </label>
                        <input type="number" max="10" min="0" value={this.state.control} onChange={e => this.setState({ control: e.target.value })}></input>

                        <label>Right foot: </label>
                        <input type="number" max="10" min="0" value={this.state.right_foot} onChange={e => this.setState({ right_foot: e.target.value })}></input>

                        <label>Left foot: </label>
                        <input type="number" max="10" min="0" value={this.state.left_foot} onChange={e => this.setState({ left_foot: e.target.value })}></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Attacking</h4>
                        <label>1v1: </label>
                        <input type="number" max="10" min="0" value={this.state.attacking_one_v_one} onChange={e => this.setState({ attacking_one_v_one: e.target.value })}></input>

                        <label>Aerial ability: </label>
                        <input type="number" max="10" min="0" value={this.state.attacking_ariel_ability} onChange={e => this.setState({ attacking_ariel_ability: e.target.value })}></input>

                        <label>Crossing: </label>
                        <input type="number" max="10" min="0" value={this.state.crossing} onChange={e => this.setState({ crossing: e.target.value })}></input>

                    </div>

                    <div class="grid-item">
                        <h4>Defending</h4>
                        <label>1v1: </label>
                        <input type="number" max="10" min="0" value={this.state.defending_one_v_one} onChange={e => this.setState({ defending_one_v_one: e.target.value })}></input>

                        <label>Aerial ability: </label>
                        <input type="number" max="10" min="0" value={this.state.defending_ariel_ability} onChange={e => this.setState({ defending_ariel_ability: e.target.value })}></input>

                        <label>Tackling: </label>
                        <input type="number" max="10" min="0" value={this.state.tackling} onChange={e => this.setState({ tackling: e.target.value })}></input>

                        <label>Defending far post: </label>
                        <input type="number" max="10" min="0" value={this.state.defending_far_post} onChange={e => this.setState({ defending_far_post: e.target.value })}></input>
                        <br></br>
                        <label>Stop the cross: </label>
                        <input type="number" max="10" min="0" value={this.state.stopping_the_cross} onChange={e => this.setState({ stopping_the_cross: e.target.value })}></input>

                        <label>Pressing: </label>
                        <input type="number" max="10" min="0" value={this.state.pressing} onChange={e => this.setState({ pressing: e.target.value })}></input>

                        <label>Recovery runs: </label>
                        <input type="number" max="10" min="0" value={this.state.recovery_runs} onChange={e => this.setState({ recovery_runs: e.target.value })}></input>

                        <label>Tracking runners: </label>
                        <input type="number" max="10" min="0" value={this.state.tracking_runners} onChange={e => this.setState({ tracking_runners: e.target.value })}></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Tactical</h4>
                        <label>Agility: </label>
                        <input type="number" max="10" min="0" value={this.state.agility} onChange={e => this.setState({ agility: e.target.value })}></input>

                        <label>Angles to receive: </label>
                        <input type="number" max="10" min="0" value={this.state.angles_to_recieve} onChange={e => this.setState({ angles_to_recieve: e.target.value })}></input>

                        <label>Link up with winger: </label>
                        <input type="number" max="10" min="0" value={this.state.link_up_with_winger} onChange={e => this.setState({ link_up_with_winger: e.target.value })}></input>
                        <br></br>
                        <label>Covering across: </label>
                        <input type="number" max="10" min="0" value={this.state.covering_across} onChange={e => this.setState({ covering_across: e.target.value })}></input>

                        <label>Willingness to get forward: </label>
                        <input type="number" max="10" min="0" value={this.state.willlingness_to_get_forward} onChange={e => this.setState({ willlingness_to_get_forward: e.target.value })}></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Physical</h4>
                        <label>Pace: </label>
                        <input type="number" max="10" min="0" value={this.state.pace} onChange={e => this.setState({ pace: e.target.value })}></input>

                        <label>Mobility: </label>
                        <input type="number" max="10" min="0" value={this.state.mobility} onChange={e => this.setState({ mobility: e.target.value })}></input>

                        <label>Work rate: </label>
                        <input type="number" max="10" min="0" value={this.state.work_rate} onChange={e => this.setState({ work_rate: e.target.value })}></input>
                        <br></br>
                        <label>Strength: </label>
                        <input type="number" max="10" min="0" value={this.state.strength} onChange={e => this.setState({ strength: e.target.value })}></input>

                        <label>Jump/spring: </label>
                        <input type="number" max="10" min="0" value={this.state.jump} onChange={e => this.setState({ jump: e.target.value })}></input>

                    </div>


                    <div class="grid-item">
                        <h4>Pyschological</h4>

                        <label>Bravery: </label>
                        <input type="number" max="10" min="0" value={this.state.bravery} onChange={e => this.setState({ bravery: e.target.value })}></input>

                        <label>Leadership: </label>
                        <input type="number" max="10" min="0" value={this.state.leadership} onChange={e => this.setState({ leadership: e.target.value })}></input>

                        <label>Team work: </label>
                        <input type="number" max="10" min="0" value={this.state.team_work} onChange={e => this.setState({ team_work: e.target.value })}></input>
                        <br></br>
                        <label>Communication: </label>
                        <input type="number" max="10" min="0" value={this.state.communicaton} onChange={e => this.setState({ communicaton: e.target.value })}></input>

                        <label>Response to criticism: </label>
                        <input type="number" max="10" min="0" value={this.state.reponse_to_criticism} onChange={e => this.setState({ reponse_to_criticism: e.target.value })}></input>

                        <label>Reaction to mistakes: </label>
                        <input type="number" max="10" min="0" value={this.state.reaction_to_mistake} onChange={e => this.setState({ reaction_to_mistake: e.target.value })}></input>
                        <br></br>
                    </div>
                    <div class="grid-item">
                        <h3>Additional Comments</h3>
                        <textarea class="notes" value={this.state.notes} onChange={e => this.setState({ notes: e.target.value })}>

                        </textarea>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default fullBackForm;
