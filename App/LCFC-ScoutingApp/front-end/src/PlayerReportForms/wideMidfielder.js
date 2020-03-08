import React from 'react'
import './PlayerPos.css'
class wideMidfielderForm extends React.Component {
    state = {

        // In Possession 

        control : '', receiving_under_pressure : '', short_passing : '', switching_play : '', left_foot : '', right_foot: '',

        // Attacking

        one_vs_one_attacking : '', crossing : '', shooting : '', dribbling : '', attacking_aerial_ability : '',

        // Defending 

        one_vs_one_defending : '', defending_aerial_ability : '', supporting_full_back : '', tackling : '', pressing : '', positional_awareness : '', recovery_runs : '', tracking_runners : '',

        // Tactical 

        agility : '', coming_in_off_the_line : '' , finding_space_out_wide : '', link_up_with_full_back : '', willingness_to_get_forward : '',
        
        // Physical 

        pace : '', speed_when_dribbling : '', agility : '', strength : '', work_rate : '',

        // Pyschological

        bravery : '', leadership : '', team_work : '', communication : '', response_to_criticism : '', reaction_to_mistakes : '',

        // Additional Information

        notes: '', rating : 'A', 

        // Player Information

        first_name: '', last_name: '', club_name: '', height: '', age: '', date_played: '', club_played: '', ht_score: '', ft_score: '', shirt_number : '',
    
    }
    handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch('/api/widemidfielder', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify({
                
                control : this.state.control, receiving_under_pressure : this.state.receiving_under_pressure, short_passing : this.state.short_passing,  switching_play : this.state.switching_play, left_foot : this.state.left_foot, right_foot: this.state.right_foot,

                // Attacking
        
                one_vs_one_attacking : this.state.one_vs_one_attacking, crossing : this.state.crossing, shooting : this.state.shooting, dribbling : this.state.dribbling , attacking_ariel_ability : this.state.attacking_ariel_ability,
        
                // Defending 
        
                one_vs_one_defending : this.state.one_vs_one_defending, defending_ariel_ability : this.state.defending_ariel_ability, supporting_full_back : this.state.supporting_full_back, tackling : this.state.tackling, pressing : this.state.pressing, positional_awareness : this.state.positional_awareness, recovery_runs : this.state.recovery_runs, tracking_runners : this.state.tracking_runners,
        
                // Tactical 
        
                agility : this.state.agility, coming_in_off_the_line : this.state.coming_in_off_the_line , finding_space_out_wide : this.state.finding_space_out_wide, link_up_with_full_back : this.state.link_up_with_full_back, willingness_to_get_forward : this.state.willingness_to_get_forward,
                
                // Physical 
        
                pace : this.state.pace, speed_when_dribbling : this.state.speed_when_dribbling, agility : this.state.speed_when_dribbling, strength : this.state.strength, work_rate : this.state.work_rate,
        
                // Pyschological
        
                bravery : this.state.bravery, leadership : this.state.leadership, team_work : this.state.team_work, communication : this.state.team_work, response_to_criticism : this.state.response_to_criticism, reaction_to_mistakes : this.state.reaction_to_mistakes,
        
                // Additional Information
        
                notes: this.state.notes, rating: this.state.rating,
        
                // Player Information
        
                first_name: this.state.first_name, last_name: this.state.last_name, club_name: this.state.club_name, height: this.state.height, age: this.state.age, date_played: this.state.date_played, club_played: this.state.club_played, ht_score: this.state.ht_score, ft_score: this.state.ft_score, shirt_number: this.state.shirt_number,
            

            }),

        });

        const body = await response.text();

        this.setState({ response: body });

    };




    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <h2><u>Wide midfielder</u></h2>
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
                        <select  value={this.state.rating} onChange={e => this.setState({ rating: e.target.value })}>>
                            <option>A</option>
                            <option>B+</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>

                    <div class="grid-item">
                        <h4>In Possession</h4>

                        <label>Control: </label>
                        <input type="number" max="10" min="0" value={this.state.control} onChange={e => this.setState({ control: e.target.value })}></input>
                        

                        <label>Receiving under pressure: </label>
                        <input type="number" max="10" min="0" value={this.state.receiving_under_pressure} onChange={e => this.setState({ receiving_under_pressure: e.target.value })}></input>

                        <label>Short passing: </label>
                        <input type="number" max="10" min="0" value={this.state.short_passing} onChange={e => this.setState({ short_passing: e.target.value })}></input>
                        <br></br>
                        <label>Switching play: </label>
                        <input type="number" max="10" min="0" value={this.state.switching_play} onChange={e => this.setState({ switching_play: e.target.value })}></input>

                        <label>Left foot: </label>
                        <input type="number" max="10" min="0" value={this.state.left_foot} onChange={e => this.setState({ left_foot: e.target.value })}></input>

                        <label>Right foot: </label>
                        <input type="number" max="10" min="0" value={this.state.right_foot} onChange={e => this.setState({ right_foot: e.target.value })}></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Attacking</h4>

                        <label>1v1: </label>
                        <input type="number" max="10" min="0" value={this.state.one_vs_one_attacking} onChange={e => this.setState({ one_vs_one_attacking: e.target.value })}></input>


                        <label>Crossing: </label>
                        <input type="number" max="10" min="0" value={this.state.crossing} onChange={e => this.setState({ crossing: e.target.value })}></input>

                        <label>Shooting: </label>
                        <input type="number" max="10" min="0" value={this.state.shooting} onChange={e => this.setState({ shooting: e.target.value })}></input>

                        <br></br>

                        <label>Dribbling: </label>
                        <input type="number" max="10" min="0" value={this.state.dribbling} onChange={e => this.setState({ dribbling: e.target.value })}></input>

                        <label>Aerial ability: </label>
                        <input type="number" max="10" min="0" value={this.state.attacking_ariel_ability} onChange={e => this.setState({ attacking_ariel_ability: e.target.value })}></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Defending</h4>

                        <label>1v1: </label>
                        <input type="number" max="10" min="0" value={this.state.one_vs_one_defending} onChange={e => this.setState({ one_vs_one_defending: e.target.value })}></input>

                        <label>Aerial ability: </label>
                        <input type="number" max="10" min="0" value={this.state.defending_aerial_ability} onChange={e => this.setState({ defending_aerial_ability: e.target.value })}></input>

                        <label>Supporting full back: </label>
                        <input type="number" max="10" min="0" value={this.state.supporting_full_back} onChange={e => this.setState({ supporting_full_back: e.target.value })}></input>
                        <br></br>
                        <label>Tackling: </label>
                        <input type="number" max="10" min="0" value={this.state.tackling} onChange={e => this.setState({ tackling: e.target.value })}></input>

                        <label>Pressing: </label>
                        <input type="number" max="10" min="0" value={this.state.pressing} onChange={e => this.setState({ pressing: e.target.value })}></input>

                        <label>Positional awareness: </label>
                        <input type="number" max="10" min="0" value={this.state.positional_awareness} onChange={e => this.setState({ positional_awareness: e.target.value })}></input>
                        <br></br>
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

                        <label>Coming in off the line: </label>
                        <input type="number" max="10" min="0" value={this.state.coming_in_off_the_line} onChange={e => this.setState({ coming_in_off_the_line: e.target.value })}></input>
 
                        <label>Finding space out wide: </label>
                        <input type="number" max="10" min="0" value={this.state.finding_space_out_wide} onChange={e => this.setState({ finding_space_out_wide: e.target.value })}></input>
                        <br></br>
                        <label>Link up with full back: </label>
                        <input type="number" max="10" min="0" value={this.state.link_up_with_full_back} onChange={e => this.setState({ link_up_with_full_back: e.target.value })}></input>

                        <label>Willingness to get forward: </label>
                        <input type="number" max="10" min="0" value={this.state.willingness_to_get_forward} onChange={e => this.setState({ willingness_to_get_forward: e.target.value })}></input>
                    </div>

                    <div class="grid-item">
                        <h4>Physical</h4>

                        <label>Pace: </label>
                        <input type="number" max="10" min="0"  value={this.state.pace} onChange={e => this.setState({ pace: e.target.value })}></input>

                        <label>Speed when Dribbling: </label>
                        <input type="number" max="10" min="0"  value={this.state.speed_when_dribbling} onChange={e => this.setState({ speed_when_dribbling: e.target.value })}></input>

                        <label>Agility: </label>
                        <input type="number" max="10" min="0" value={this.state.agility} onChange={e => this.setState({ agility: e.target.value })}></input>
                        <br></br>
                        <label>Strength: </label>
                        <input type="number" max="10" min="0" value={this.state.strength} onChange={e => this.setState({ strength: e.target.value })}></input>
                        <label>Work rate: </label>
                        <input type="number" max="10" min="0"  value={this.state.work_rate} onChange={e => this.setState({ work_rate: e.target.value })}></input>
                        <br></br>
                    </div>


                    <div class="grid-item">
                        <h4>Pyschological</h4>

                        <label>Bravery: </label>
                        <input type="number" max="10" min="0"  value={this.state.bravery} onChange={e => this.setState({ bravery: e.target.value })}></input>

                        <label>Leadership: </label>
                        <input type="number" max="10" min="0"  value={this.state.leadership} onChange={e => this.setState({ leadership: e.target.value })}></input>

                        <label>Team work: </label>
                        <input type="number" max="10" min="0"  value={this.state.team_work} onChange={e => this.setState({ team_work: e.target.value })}></input>
                        <br></br>
                        <label>Communication: </label>
                        <input type="number" max="10" min="0"  value={this.state.communication} onChange={e => this.setState({ communication: e.target.value })}></input>

                        <label>Response to criticism: </label>
                        <input type="number" max="10" min="0"  value={this.state.response_to_criticism} onChange={e => this.setState({ response_to_criticism: e.target.value })}></input>

                        <label>Reaction to mistakes: </label>
                        <input type="number" max="10" min="0"  value={this.state.reaction_to_mistakes} onChange={e => this.setState({ reaction_to_mistakes: e.target.value })}></input>
                        <br></br>
                    </div>
                    <div class="grid-item">
                        <h3>Additional Comments</h3>
                        <textarea class="notes"value={this.state.notes} onChange={e => this.setState({ notes: e.target.value })} >

                        </textarea>
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default wideMidfielderForm;