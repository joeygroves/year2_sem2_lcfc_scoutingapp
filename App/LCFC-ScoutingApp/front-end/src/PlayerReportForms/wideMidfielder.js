import React from 'react'
import './PlayerPos.css'
class wideMidfielderForm extends React.Component {
    state = {

        first_name: '', last_name: '', club_name: '', height: '', age: '', date_played: '', club_played: '', ht_score: '', ft_score: '',
    }
    render() {
        return (
            <form>

                <h2><u>Wide midfielder</u></h2>
                <div class="grid-container">
                    <div class="grid-item">

                        <label>First Name: </label>
                        <input value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })}></input>

                        <label>Last Name: </label>
                        <input value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })}></input>

                        <label>Club: </label>
                        <input value={this.state.club_name} onChange={e => this.setState({ club_name: e.target.value })}></input>


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

                        <label>Control: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Receiving under pressure: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Short passing: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                        <label>Switching play: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Left foot: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Right foot: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Attacking</h4>

                        <label>1v1: </label>
                        <input type="number" max="10" min="0"></input>


                        <label>Crossing: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Shooting: </label>
                        <input type="number" max="10" min="0"></input>

                        <br></br>

                        <label>Dribbling: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Aerial ability: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Defending</h4>

                        <label>1v1: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Aerial ability: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Supporting full back: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                        <label>Tackling: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Pressing: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Positional awareness: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                        <label>Recovery runs: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Tracking runners: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Tactical</h4>

                        <label>Agility: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Coming in off the line: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Finding space out wide: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                        <label>Link up with full back: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Willingness to get forward: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                    </div>

                    <div class="grid-item">
                        <h4>Physical</h4>

                        <label>Pace: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Speed when Dribbling: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Agility: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                        <label>Strength: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Work rate: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                    </div>


                    <div class="grid-item">
                        <h4>Pyschological</h4>

                        <label>Bravery: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Leadership: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Team work: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                        <label>Communication: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Response to criticism: </label>
                        <input type="number" max="10" min="0"></input>

                        <label>Reaction to mistakes: </label>
                        <input type="number" max="10" min="0"></input>
                        <br></br>
                    </div>
                    <div class="grid-item">
                        <h3>Additional Comments</h3>
                        <textarea class="notes">

                        </textarea>
                    </div>
                </div>
            </form>
        );
    }
}
export default wideMidfielderForm;