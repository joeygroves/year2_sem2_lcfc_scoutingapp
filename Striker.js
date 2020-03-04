import React from 'react'
import './PlayerPos.css'
class StrikerForm extends React.Component {
    state = {

        hold_up_play: '', receiving_under_pressure: '', link_up_play: '', right_foot: '', left_foot: '', one_v_one: '', ariel_ability: '', 
        finishing: '', right_foot_shooting: '', left_foot_shooting: '', crossing: '', one_v_two: '',  tackling:'',  pressing:'', 
        recovering_into_shape: '', agility: '' , dropping_into_space: '', runs_off_the_shoulder:'', running_the_channels:'', movement_off_the_ball: '', 
        pace: '', mobility: '', strength: '', work_rate: '', jump:'', bravery: '', leadership:'', teamwork:'', communication:'' ,
        response_to_criticism:'', reaction_to_mistakes: '', rating: '', notes: '',
        first_name: '', last_name: '', club_name: '', height: '', age: '', date_played: '', club_played: '', ht_score: '', ft_score: '', shirt_number: ''
    }

    handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch('/api/striker', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                club_name: this.state.club_name,
                height: this.state.height,
                age: this.state.age,
                date_played: this.state.date_played,
                club_played: this.state.club_played,
                ht_score: this.state.ht_score,
                ft_score: this.state.ft_score,
                shirt_number: this.state.shirt_number,

                hold_up_play: this.state.hold_up_play,
                receiving_under_pressure: this.state.receiving_under_pressure,
                link_up_play: this.state.link_up_play,
                right_foot: this.state.right_foot,
                left_foot: this.state.left_foot,
                one_v_one: this.state.one_v_one,
                ariel_ability: this.state.ariel_ability,
                finishing:this.state.finishing,
                right_foot_shooting: this.state.right_foot_shooting,
                left_foot_shooting: this.state.left_foot_shooting,
                crossing: this.state.crossing,
                one_v_two: this.state.one_v_two,
                tackling: this.state.tackling, 
                pressing: this.state.pressing,
                recovering_into_shape: this.state.recovering_into_shape,
                agility: this.state.agility,
                dropping_into_space: this.state.dropping_into_space,
                runs_off_the_shoulder: this.state.runs_off_shoulder,
                running_the_channels: this.state.running_the_channels,
                movement_off_the_ball: this.state.movement_off_the_ball,
                pace: this.state.pace,
                mobility: this.state.mobility,
                strength: this.state.strength,
                work_rate: this.state.work_rate,
                jump: this.state.jump,
                bravery: this.state.bravery,
                leadership: this.state.leadership,
                teamwork: this.state.teamwork,
                communication: this.state.communication,
                response_to_criticism: this.state.response_to_criticism,
                reaction_to_mistakes: this.state.reaction_to_mistakes,
                rating: this.state.rating,
                notes: this.state.notes
                
            }),

        });

        const body = await response.text();

        this.setState({ response: body });

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <h2><u>Striker</u></h2>
               
                <div class="grid-container">
                    <div class="grid-item">
                        <label>First Name: </label>
                        <input
                            value={this.state.first_name}
                            onChange={e => this.setState({ first_name: e.target.value })}
                        ></input>

                        <label>Last Name: </label>
                        <input
                            value={this.state.last_name}
                            onChange={e => this.setState({ last_name: e.target.value })}
                        ></input>

                        <label>Club: </label>
                        <input
                            value={this.state.club_name}
                            onChange={e => this.setState({ club_name: e.target.value })}
                        ></input>

                        <label>Shirt Number: </label>
                        <input
                            value={this.state.shirt_number}
                            onChange={e => this.setState({ shirt_number: e.target.value })}
                        ></input>

                        <br></br>

                        <label>Height: </label>
                        <input
                            value={this.state.height}
                            onChange={e => this.setState({ height: e.target.value })}
                        ></input>

                        <label>Age: </label>
                        <input
                            value={this.state.age}
                            onChange={e => this.setState({ age: e.target.value })}
                        ></input>

                        <br></br>

                        <label>Date Scouted: </label>
                        <input
                            value={this.state.date_played}
                            onChange={e => this.setState({ date_played: e.target.value })}
                        ></input>

                        <label>Playing Against: </label>
                        <input
                            value={this.state.club_played}
                            onChange={e => this.setState({ club_played: e.target.value })}
                        ></input>

                        <br></br>

                        <label>H/T: </label>
                        <input
                            value={this.state.ht_score}
                            onChange={e => this.setState({ ht_score: e.target.value })}
                        ></input>

                        <label>F/T: </label>
                        <input
                            value={this.state.ft_score}
                            onChange={e => this.setState({ ft_score: e.target.value })}
                        ></input>


                        <h4>Player Rating</h4>
                        <h6>Code reference: A = Sign Player, B+ = Closely monitor/Follow Up, B = Monitor Player, C = Not good enough</h6>
                        <select value={this.state.rating} onChange={e => this.setState({rating: e.target.value})}>
                            <option>A</option>
                            <option>B+</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>

                    <div class="grid-item">
                        <h4>In Possession</h4>

                        <label>Hold up play: </label>
                        <input type="number" max="10" min="0" value={this.state.hold_up_play} onChange={e => this.setState({ hold_up_play: e.target.value })}></input>

                        <label>Receiving under pressure: </label>
                        <input type="number" max="10" min="0" value={this.state.recieving_under_pressure} onChange={e => this.setState({ recieving_under_pressure: e.target.value })}></input>

                        <label>Link up play: </label>
                        <input type="number" max="10" min="0"> value={this.state.link_up_play} onChange={e => this.setState({ link_up_play: e.target.value })}></input>
                        <br></br>
                        <label>Left foot: </label>
                        <input type="number" max="10" min="0" value={this.state.left_foot} onChange={e => this.setState({ left_foot: e.target.value })}></input>

                        <label>Right foot: </label>
                        <input type="number" max="10" min="0" value={this.state.right_foot} onChange={e => this.setState({ right_foot: e.target.value })}></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Attacking</h4>

                        <label>1v1: </label>
                        <input type="number" max="10" min="0" value={this.state.one_v_one} onChange={e => this.setState({ one_v_one: e.target.value })}></input>

                        <label>Aerial ability: </label>
                        <input type="number" max="10" min="0" value={this.state.aerial_ability} onChange={e => this.setState({ aerial_ability: e.target.value })}></input>

                        <label>Crossing: </label>
                        <input type="number" max="10" min="0" value={this.state.crossing} onChange={e => this.setState({ crossing: e.target.value })}></input>
                        <br></br>
                        <label>Finishing: </label>
                        <input type="number" max="10" min="0" value={this.state.finishing} onChange={e => this.setState({ finishing: e.target.value })}></input>

                        <label>Left foot shooting: </label>
                        <input type="number" max="10" min="0" value={this.state.left_foot_shooting} onChange={e => this.setState({ left_foot_shooting: e.target.value })}></input>

                        <label>Right foot shooting: </label>
                        <input type="number" max="10" min="0" value={this.state.right_foot_shooting} onChange={e => this.setState({ right_foot_shooting: e.target.value })}></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Defending</h4>

                        <label>1v2: </label>
                        <input type="number" max="10" min="0" value={this.state.one_v_two} onChange={e => this.setState({ one_v_two: e.target.value })}></input>

                        <label>Tackling: </label>
                        <input type="number" max="10" min="0" value={this.state.tackling} onChange={e => this.setState({ tackling: e.target.value })}></input>

                        <label>Pressing: </label>
                        <input type="number" max="10" min="0" value={this.state.pressing} onChange={e => this.setState({ pressing: e.target.value })}></input>

                        <label>Recovering into shape: </label>
                        <input type="number" max="10" min="0" value={this.state.recovering_into_shape} onChange={e => this.setState({ recovering_into_shape: e.target.value })}></input>
                        <br></br>

                    </div>

                    <div class="grid-item">
                        <h4>Tactical</h4>

                        <label>Agility: </label>
                        <input type="number" max="10" min="0" value={this.state.agility} onChange={e => this.setState({ agility: e.target.value })}></input>

                        <label>Dropping into space </label>
                        <input type="number" max="10" min="0" value={this.state.dropping_into_space} onChange={e => this.setState({ dropping_into_space: e.target.value })}></input>

                        <label>Runs off the shoulder </label>
                        <input type="number" max="10" min="0" value={this.state.runs_off_shoulder} onChange={e => this.setState({ runs_off_shoulder: e.target.value })}></input>
                        <br></br>
                        <label>Running the channels: </label>
                        <input type="number" max="10" min="0" value={this.state.running_into_channels} onChange={e => this.setState({ running_into_channels: e.target.value })}></input>

                        <label>Movement off the ball: </label>
                        <input type="number" max="10" min="0" value={this.state.movement_off_the_ball} onChange={e => this.setState({ movement_off_the_ball: e.target.value })}></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Physical</h4>

                        <label>Pace: </label>
                        <input type="number" max="10" min="0" value={this.state.pace} onChange={e => this.setState({ pace: e.target.value })}></input>

                        <label>Mobility: </label>
                        <input type="number" max="10" min="0" value={this.state.mobility} onChange={e => this.setState({ mobility: e.target.value })}></input>

                        <label>Jump/spring: </label>
                        <input type="number" max="10" min="0" value={this.state.jump} onChange={e => this.setState({ jump: e.target.value })}></input>
                        <br></br>
                        <label>Strength/pinning: </label>
                        <input type="number" max="10" min="0" value={this.state.strength} onChange={e => this.setState({ strength: e.target.value })}></input>

                        <label>Work rate: </label>
                        <input type="number" max="10" min="0" value={this.state.work_rate} onChange={e => this.setState({ work_rate: e.target.value })}></input>
                        <br></br>
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
                        <input type="number" max="10" min="0" value={this.state.communication} onChange={e => this.setState({ communication: e.target.value })}></input>

                        <label>Response to criticism: </label>
                        <input type="number" max="10" min="0" value={this.state.response_to_criticiscm} onChange={e => this.setState({ response_to_criticiscm: e.target.value })}></input>

                        <label>Reaction to mistakes: </label>
                        <input type="number" max="10" min="0" value={this.state.reaction_to_mistakes} onChange={e => this.setState({ reaction_to_mistakes: e.target.value })}></input>
                        <br></br>
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
export default StrikerForm;