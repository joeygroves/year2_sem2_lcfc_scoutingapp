import React from "react";
import "./PlayerPos.css";
class centreMidfielderForm extends React.Component {
    state = {
        first_name: "", last_name: "", club_name: "", height: "", age: "", date_played: "", club_played: "", ht_score: "", ft_score: "", control_under_pressure: "", bravery_in_posession: "", short_passing: "", switching_play: "", running_with_the_ball: "", right_foot: "",
        left_foot: "", attacking_one_v_one: "", attacking_ariel_ability: "", shooting: "", crossing: "", defending_one_v_one: "", defending_ariel_ability: "", tackling: "",
        closing_down: "", recovery_runs: "", marking: "", agility: "", finding_space: "", vision: "", creativity: "", speed: "", movement_skills: "", work_rate: "", strength: "",
        communication: "", concentration: "", commitment: "", emotional_control: "", confidence: "", rating: "A",
        shirt_number: "", notes: "",confirmation : '',
    };

    handleSubmit = async e => {
        
        this.setState({confirmation : 'Player Report Has Been Succesfully Created, Please Go To Home Page To View Report' });

        e.preventDefault();

        const response = await fetch("/api/centreMid", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                control_under_pressure: this.state.control_under_pressure,
                bravery_in_posession: this.state.bravery_in_posession,
                short_passing: this.state.short_passing,
                switching_play: this.state.switching_play,
                running_with_the_ball: this.state.running_with_the_ball,
                right_foot: this.state.right_foot,
                left_foot: this.state.left_foot,
                attacking_one_v_one: this.state.attacking_one_v_one,
                attacking_ariel_ability: this.state.attacking_ariel_ability,
                shooting: this.state.shooting,
                crossing: this.state.crossing,
                defending_one_v_one: this.state.defending_one_v_one,
                defending_ariel_ability: this.state.defending_ariel_ability,
                tackling: this.state.tackling,
                closing_down: this.state.closing_down,
                recovery_runs: this.state.recovery_runs,
                marking: this.state.marking,
                agility: this.state.agility,
                finding_space: this.state.finding_space,
                vision: this.state.vision,
                creativity: this.state.creativity,
                speed: this.state.speed,
                movement_skills: this.state.movement_skills,
                work_rate: this.state.work_rate,
                strength: this.state.strength,
                communication: this.state.communication,
                concentration: this.state.concentration,
                commitment: this.state.commitment,
                emotional_control: this.state.emotional_control,
                confidence: this.state.confidence,
                rating: this.state.rating,
                notes: this.state.notes,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                club_name: this.state.club_name,
                height: this.state.height,
                age: this.state.age,
                date_played: this.state.date_played,
                club_played: this.state.club_played,
                ht_score: this.state.ht_score,
                ft_score: this.state.ft_score,
                shirt_number: this.state.shirt_number
            })
        });

        const body = await response.text();

        this.setState({ response: body });

        
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>
                    <u>Centre Midfielder</u>
                </h2>
                <div class="grid-container">
                    <div class="grid-item">
                        <label>First Name: </label>
                        <input type= "string"
                            value={this.state.first_name}
                            onChange={e => this.setState({ first_name: e.target.value })} required
                        ></input>

                        <label>Last Name: </label>
                        <input type = "string"
                            value={this.state.last_name}
                            onChange={e => this.setState({ last_name: e.target.value })} required
                        ></input>

                        <label>Club: </label>
                        <input type="string"
                            value={this.state.club_name}
                            onChange={e => this.setState({ club_name: e.target.value })} required
                        ></input>

                        <label>Shirt Number: </label>
                        <input type = "number" min="1" max="99"
                            value={this.state.shirt_number}
                            onChange={e => this.setState({ shirt_number: e.target.value })} required
                        ></input>

                        <br></br>

                        <label>Height: </label>
                        <input
                            value={this.state.height}
                            onChange={e => this.setState({ height: e.target.value })} required
                        ></input>

                        <label>Age: </label>
                        <input type="number"
                            value={this.state.age}
                            onChange={e => this.setState({ age: e.target.value })} required
                        ></input>

                        <br></br>

                        <label>Date Scouted: </label>
                        <input type = "date"
                            value={this.state.date_played}
                            onChange={e => this.setState({ date_played: e.target.value })} required
                        ></input>

                        <label>Playing Against: </label>
                        <input type="string"
                            value={this.state.club_played}
                            onChange={e => this.setState({ club_played: e.target.value })} required
                        ></input>

                        <br></br>

                        <label>H/T: </label>
                        <input
                            value={this.state.ht_score}
                            onChange={e => this.setState({ ht_score: e.target.value })} required
                        ></input>

                        <label>F/T: </label>
                        <input
                            value={this.state.ft_score}
                            onChange={e => this.setState({ ft_score: e.target.value })} required
                        ></input>

                        <h4>Player Rating</h4>
                        <h6>
                            Code reference: A = Sign Player, B+ = Closely monitor/Follow Up, B
                            = Monitor Player, C = Not good enough
                        </h6>
                        <select
                            value={this.state.rating}
                            onChange={e => this.setState({ rating: e.target.value })} required
                        >
                            <option>A</option>
                            <option>B+</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>

                    <div class="grid-item">
                        <h4>In Possession</h4>

                        <label>Control under pressure: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.control_under_pressure}
                            onChange={e =>
                                this.setState({ control_under_pressure: e.target.value })
                            }
                        ></input>

                        <label>Bravery in possession: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.bravery_in_posession}
                            onChange={e =>
                                this.setState({ bravery_in_posession: e.target.value })
                            }
                        ></input>

                        <label>Short passing: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.short_passing}
                            onChange={e => this.setState({ short_passing: e.target.value })}
                        ></input>
                        <br></br>
                        <label>Switching play: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.switching_play}
                            onChange={e => this.setState({ switching_play: e.target.value })}
                        ></input>

                        <label>Running with the ball: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.running_with_the_ball}
                            onChange={e =>
                                this.setState({ running_with_the_ball: e.target.value })
                            }
                        ></input>
                        <br></br>
                        <label>Left foot: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.left_foot}
                            onChange={e => this.setState({ left_foot: e.target.value })}
                        ></input>
                        <label>Right foot: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.right_foot}
                            onChange={e => this.setState({ right_foot: e.target.value })}
                        ></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Attacking</h4>

                        <label>1v1: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.attacking_one_v_one}
                            onChange={e =>
                                this.setState({ attacking_one_v_one: e.target.value })
                            }
                        ></input>

                        <label>Aerial ability: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.attacking_ariel_ability}
                            onChange={e =>
                                this.setState({ attacking_ariel_ability: e.target.value })
                            }
                        ></input>

                        <label>Crossing: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.crossing}
                            onChange={e => this.setState({ crossing: e.target.value })}
                        ></input>

                        <label>Shooting: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.shooting}
                            onChange={e => this.setState({ shooting: e.target.value })}
                        ></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Defending</h4>

                        <label>1v1: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.defending_one_v_one}
                            onChange={e =>
                                this.setState({ defending_one_v_one: e.target.value })
                            }
                        ></input>

                        <label>Aerial ability: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.defending_ariel_ability}
                            onChange={e =>
                                this.setState({ defending_ariel_ability: e.target.value })
                            }
                        ></input>

                        <label>Tackling: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.tackling}
                            onChange={e => this.setState({ tackling: e.target.value })}
                        ></input>
                        <br></br>
                        <label>Closing down: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.closing_down}
                            onChange={e => this.setState({ closing_down: e.target.value })}
                        ></input>

                        <label>Recovery runs: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.recovery_runs}
                            onChange={e => this.setState({ recovery_runs: e.target.value })}
                        ></input>

                        <label>Marking awareness: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.marking}
                            onChange={e => this.setState({ marking: e.target.value })}
                        ></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Tactical</h4>

                        <label>Agility: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.agility}
                            onChange={e => this.setState({ agility: e.target.value })}
                        ></input>

                        <label>Finding space: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.finding_space}
                            onChange={e => this.setState({ finding_space: e.target.value })}
                        ></input>

                        <label>Vision to see a pass: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.vision}
                            onChange={e => this.setState({ vision: e.target.value })}
                        ></input>

                        <label>Creativity: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.creativity}
                            onChange={e => this.setState({ creativity: e.target.value })}
                        ></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Physical</h4>

                        <label>Speed: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.speed}
                            onChange={e => this.setState({ speed: e.target.value })}
                        ></input>

                        <label>Movement skills: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.movement_skills}
                            onChange={e => this.setState({ movement_skills: e.target.value })}
                        ></input>

                        <label>Work rate: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.work_rate}
                            onChange={e => this.setState({ work_rate: e.target.value })}
                        ></input>

                        <label>Strength: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.strength}
                            onChange={e => this.setState({ strength: e.target.value })}
                        ></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Pyschological</h4>

                        <label>Communication: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.communication}
                            onChange={e => this.setState({ communication: e.target.value })}
                        ></input>

                        <label>Concentration: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.concentration}
                            onChange={e => this.setState({ concentration: e.target.value })}
                        ></input>

                        <label>Commitment: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.commitment}
                            onChange={e => this.setState({ commitment: e.target.value })}
                        ></input>
                        <br></br>
                        <label>Emotional control: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.emotional_control}
                            onChange={e =>
                                this.setState({ emotional_control: e.target.value })
                            }
                        ></input>

                        <label>Confidence: </label>
                        <input
                            type="number"
                            max="10"
                            min="0"
                            value={this.state.confidence}
                            onChange={e => this.setState({ confidence: e.target.value })}
                        ></input>
                        <br></br>
                        
                    </div>
                    
                    <div class="grid-item">
                        <h3>Additional Comments</h3>
                        <textarea
                            class="notes"
                            value={this.state.notes}
                            onChange={e => this.setState({ notes: e.target.value })}
                        ></textarea>
                       
                    </div>
                </div> 
                
                <button type="submit">Submit</button>
                <p>{this.state.confirmation}</p>
            </form>
        );
    }
}
export default centreMidfielderForm;
