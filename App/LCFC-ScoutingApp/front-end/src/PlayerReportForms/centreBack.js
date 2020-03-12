import React from 'react'
import './PlayerPos.css'
class centreBackForm extends React.Component {
    state = {

        response: '', recieving_under_pressure: '', short_passing: '', long_passing: '', carrying_the_ball_forward: '', right_foot: '', left_foot: '',
        threat_at_set_plays: '', attacking_ariel_ability: '', one_v_one: '', defending_ariel_ability: '', tackling: '', marking: '',
        interceptions: '', sensing_danger: '', defending_crosses: '', pressing: '', recovery_runs: '', tracking_runners: '',
        agility: '', angles_to_recieve: '', distances: '', recovering_to_shape: '', pace_when_turning: '', jump: '', mobility: '', strength: '', aggression: '', bravery: '',
        leadership: '', team_work: '', communication: '', response_to_criticism: '', reaction_to_mistake: '', rating: 'A', shirt_number: '',
        notes: '', first_name: '', last_name: '', club_name: '', height: '', age: '', date_played: '', club_played: '', ht_score: '', ft_score: '',
        confirmation : '',
    }

    handleSubmit = async (e) => {

        this.setState({confirmation : 'Player Report Has Been Succesfully Created, Please Go To Home Page To View Report' });

        e.preventDefault();

        const response = await fetch('/api/centreBack', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify({
                recieving_under_pressure: this.state.recieving_under_pressure, short_passing: this.state.short_passing, long_passing: this.state.long_passing, carrying_the_ball_forward: this.state.carrying_the_ball_forward, right_foot: this.state.right_foot, left_foot: this.state.left_foot,
                threat_at_set_plays: this.state.threat_at_set_plays, attacking_ariel_ability: this.state.attacking_ariel_ability, one_v_one: this.state.one_v_one, defending_ariel_ability: this.state.defending_ariel_ability, tackling: this.state.tackling,
                marking: this.state.marking, interceptions: this.state.interceptions, sensing_danger: this.state.sensing_danger, defending_crosses: this.state.defending_crosses, pressing: this.state.pressing,
                recovery_runs: this.state.recovery_runs, tracking_runners: this.state.tracking_runners, agility: this.state.agility, angles_to_recieve: this.state.angles_to_recieve, distances: this.state.distances, recovering_to_shape: this.state.recovering_to_shape, pace_when_turning: this.state.pace_when_turning, jump: this.state.jump,
                mobility: this.state.mobility, strength: this.state.strength, aggression: this.state.aggression, bravery: this.state.bravery,
                leadership: this.state.leadership, team_work: this.state.team_work, communication: this.state.communication, response_to_criticism: this.state.response_to_criticism,
                reaction_to_mistake: this.state.reaction_to_mistake, rating: this.state.rating, shirt_number: this.state.shirt_number,
                notes: this.state.notes, first_name: this.state.first_name, last_name: this.state.last_name, club_name: this.state.club_name, height: this.state.height, age: this.state.age, date_played: this.state.date_played, club_played: this.state.club_played, ht_score: this.state.ht_score, ft_score: this.state.ft_score

            }),

        });

        const body = await response.text();

        this.setState({ response: body });

    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <h2><u>Centre Back</u></h2>
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
                        <select value={this.state.rating} onChange={e => this.setState({ rating: e.target.value })}>
                            <option>A</option>
                            <option>B+</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div class="grid-item">

                        <h4>In Possession</h4>
                        <label>Receiving under pressure: </label>
                        <input type="number" max="10" min="0" value={this.state.recieving_under_pressure} onChange={e => this.setState({ recieving_under_pressure: e.target.value })}></input>

                        <label>Short passing: </label>
                        <input type="number" max="10" min="0" value={this.state.short_passing} onChange={e => this.setState({ short_passing: e.target.value })}></input>

                        <label>Long passing: </label>
                        <input type="number" max="10" min="0" value={this.state.long_passing} onChange={e => this.setState({ long_passing: e.target.value })}></input>
                        <br></br>
                        <label>Carrying the ball forward: </label>
                        <input type="number" max="10" min="0" value={this.state.carrying_the_ball_forward} onChange={e => this.setState({ carrying_the_ball_forward: e.target.value })}></input>

                        <label>Left foot: </label>
                        <input type="number" max="10" min="0" value={this.state.left_foot} onChange={e => this.setState({ left_foot: e.target.value })}></input>

                        <label>Right foot: </label>
                        <input type="number" max="10" min="0" value={this.state.right_foot} onChange={e => this.setState({ right_foot: e.target.value })}></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Attacking</h4>

                        <label>Threat at set plays: </label>
                        <input type="number" max="10" min="0" value={this.state.threat_at_set_plays} onChange={e => this.setState({ threat_at_set_plays: e.target.value })}></input>

                        <label>Aerial ability: </label>
                        <input type="number" max="10" min="0" value={this.state.attacking_ariel_ability} onChange={e => this.setState({ attacking_ariel_ability: e.target.value })}></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Defending</h4>

                        <label>1v1: </label>
                        <input type="number" max="10" min="0" value={this.state.one_v_one} onChange={e => this.setState({ one_v_one: e.target.value })}></input>

                        <label>Aerial ability: </label>
                        <input type="number" max="10" min="0" value={this.state.defending_ariel_ability} onChange={e => this.setState({ defending_ariel_ability: e.target.value })}></input>

                        <label>Tackling: </label>
                        <input type="number" max="10" min="0" value={this.state.tackling} onChange={e => this.setState({ tackling: e.target.value })}></input>

                        <label>Marking: </label>
                        <input type="number" max="10" min="0" value={this.state.marking} onChange={e => this.setState({ marking: e.target.value })}></input>
                        <br></br>
                        <label>Reading game/interceptions: </label>
                        <input type="number" max="10" min="0" value={this.state.interceptions} onChange={e => this.setState({ interceptions: e.target.value })}></input>

                        <label>Sensing danger: </label>
                        <input type="number" max="10" min="0" value={this.state.sensing_danger} onChange={e => this.setState({ sensing_danger: e.target.value })}></input>

                        <label>Defending crosses: </label>
                        <input type="number" max="10" min="0" value={this.state.defending_crosses} onChange={e => this.setState({ defending_crosses: e.target.value })}></input>
                        <br></br>

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
                        <br></br>
                        <label>Distances: </label>
                        <input type="number" max="10" min="0" value={this.state.distances} onChange={e => this.setState({ distances: e.target.value })}></input>

                        <label>Recovering to shape: </label>
                        <input type="number" max="10" min="0" value={this.state.recovering_to_shape} onChange={e => this.setState({ recovering_to_shape: e.target.value })}></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Physical</h4>

                        <label>Pace when turning: </label>
                        <input type="number" max="10" min="0" value={this.state.pace_when_turning} onChange={e => this.setState({ pace_when_turning: e.target.value })}></input>

                        <label>Jump/spring: </label>
                        <input type="number" max="10" min="0" value={this.state.jump} onChange={e => this.setState({ jump: e.target.value })}></input>

                        <label>Mobility: </label>
                        <input type="number" max="10" min="0" value={this.state.mobility} onChange={e => this.setState({ mobility: e.target.value })}></input>
                        <br></br>
                        <label>Strength: </label>
                        <input type="number" max="10" min="0" value={this.state.strength} onChange={e => this.setState({ strength: e.target.value })}></input>

                        <label>Aggression: </label>
                        <input type="number" max="10" min="0" value={this.state.aggression} onChange={e => this.setState({ aggression: e.target.value })}></input>
                        <br></br>
                    </div>


                    <div class="grid-item">
                        <h4>Pyschological</h4>

                        <style>


                        </style>
                        <label>Bravery: </label>
                        <input type="number" max="10" min="0" value={this.state.bravery} onChange={e => this.setState({ bravery: e.target.value })}></input>

                        <label>Leadership: </label>
                        <input type="number" max="10" min="0" value={this.state.leadership} onChange={e => this.setState({ leadership: e.target.value })}></input>

                        <label>Team work: </label>
                        <input type="number" max="10" min="0" value={this.state.team_work} onChange={e => this.setState({ team_work: e.target.value })}></input>
                        <br></br>
                        <label>Communication: </label>
                        <input type="number" max="10" min="0" value={this.state.communication} onChange={e => this.setState({ communication: e.target.value })}></input>

                        <label>Response to criticism: </label>
                        <input type="number" max="10" min="0" value={this.state.response_to_criticism} onChange={e => this.setState({ response_to_criticism: e.target.value })}></input>

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
                <p>{this.state.confirmation}</p>
                <button type="submit">Submit</button>

            </form>
        );
    }
}
export default centreBackForm;
