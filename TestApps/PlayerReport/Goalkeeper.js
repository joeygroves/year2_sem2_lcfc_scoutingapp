import React from 'react'
import './PlayerPos.css'
class GoalkeeperForm extends React.Component {

    state = {
      
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
        tendancy_to_punch: '',
        tendancy_to_catch: '',
        starting_position: '',
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
    };



    render() {
        return (
            <form>
                <h2>Goalkeeper</h2>
                <div class="grid-container">

                    <div class="grid-item">
                        <h3>General</h3>

                        <label>Handling: </label>
                        <input type="number" max="10" min="0" value={this.state.handling} onChange={e => this.setState({ handling: e.target.value })}></input>
                        <br></br>
                       
                        <label>Shot Stopping: </label>
                        <input type="number" max="10" min="0" value={this.state.shot_stopping} onChange={e => this.setState({ shot_stopping: e.target.value })}></input>
                        <br></br>
                        
                        <label>Tendancy to Punch: </label>
                        <input type="number" max="10" min="0" value={this.state.tendancy_to_punch} onChange={e => this.setState({ tendancy_to_punch: e.target.value })}></input>
                        <br></br>
                        
                        <label>Tendancy to Catch: </label>
                        <input type="number" max="10" min="0" value={this.state.tendancy_to_catch} onChange={e => this.setState({ tendancy_to_catch: e.target.value })}></input>
                        <br></br>
                       
                        <label>Positioning: </label>
                        <input type="number" max="10" min="0" value={this.state.positioning} onChange={e => this.setState({ positioning: e.target.value })}></input>
                        <br></br>
                       
                        <label>Recovery Saves: </label>
                        <input type="number" max="10" min="0" value={this.state.recovery_saves} onChange={e => this.setState({ recovery_saves: e.target.value })}></input>
                        <br></br>
                        
                        <label>Control When Receiving: </label>
                        <input type="number" max="10" min="0" value={this.state.control_when_recieving} onChange={e => this.setState({ control_when_recieving: e.target.value })}></input>
                        <br></br>
                       
                        <label>Right Foot: </label>
                        <input type="number" max="10" min="0" value={this.state.right_foot} onChange={e => this.setState({ right_foot: e.target.value })}></input>
                        <br></br>
                       
                        <label>Left Foot: </label>
                        <input type="number" max="10" min="0" value={this.state.left_foot} onChange={e => this.setState({ left_foot: e.target.value })}></input>
                        <br></br>
                    
                    </div>
                    <div class="grid-item">
                        <h3>Distribution</h3>

                        <label>Dead Ball Kicks: </label>
                        <input type="number" max="10" min="0" value={this.state.dead_ball_kicks} onChange={e => this.setState({ dead_ball_kicks: e.target.value })}></input>
                        <br></br>
                   
                        <label>Kicking Our of Hands: </label>
                        <input type="number" max="10" min="0" value={this.state.kicking_out_of_hands} onChange={e => this.setState({ kicking_out_of_hands: e.target.value })}></input>
                        <br></br>
                     
                        <label>Throwing: </label>
                        <input type="number" max="10" min="0" value={this.state.throwing} onChange={e => this.setState({ throwing: e.target.value })}></input>
                        <br></br>
                  
                        <label>Kicking Under Pressure: </label>
                        <input type="number" max="10" min="0" value={this.state.kicking_under_pressure} onChange={e => this.setState({ kicking_under_pressure: e.target.value })}></input>
                        <br></br>
                    
                        <label>Kicking When Given Time: </label>
                        <input type="number" max="10" min="0" value={this.state.kicking_when_given_time} onChange={e => this.setState({ kicking_when_given_time: e.target.value })}></input>
                        <br></br>
                  
                    </div>
                
                    <div class="grid-item">
                   
                        <h3>Decision Making</h3>
                  
                        <label>Dealing With Crosses: </label>
                        <input type="number" max="10" min="0" value={this.state.dealing_with_crosses} onChange={e => this.setState({ dealing_with_crosses: e.target.value })}></input>
                        <br></br>
                    
                        <label>Tendancy to Punch: </label>
                        <input type="number" max="10" min="0" value={this.state.tendancy_to_punch} onChange={e => this.setState({ tendancy_to_punch: e.target.value })}></input>
                        <br></br>
                    
                        <label>Tendancy to Catch: </label>
                        <input type="number" max="10" min="0" value={this.state.tendancy_to_catch} onChange={e => this.setState({ tendancy_to_catch: e.target.value })}></input>
                        <br></br>
                     
                        <label>Starting Position: </label>
                        <input type="number" max="10" min="0" value={this.state.starting_position} onChange={e => this.setState({ starting_position: e.target.value })}></input>
                        <br></br>
                      
                        <label>1v1: </label>
                        <input type="number" max="10" min="0" value={this.state.one_v_one} onChange={e => this.setState({ one_v_one: e.target.value })}></input>
                        <br></br>
                      
                        <label>Dealing With Through Ball: </label>
                        <input type="number" max="10" min="0" value={this.state.dealing_with_through_ball} onChange={e => this.setState({ dealing_with_through_ball: e.target.value })}></input>
                        <br></br>

                    </div>

                    <div class="grid-item">
                     
                        <h3>Physical</h3>
                      
                        <label>Agility: </label>
                        <input type="number" max="10" min="0" value={this.state.agility} onChange={e => this.setState({ agility: e.target.value })}></input>
                        <br></br>
                    
                        <label>Reactions: </label>
                        <input type="number" max="10" min="0" value={this.state.reactions} onChange={e => this.setState({ reactions: e.target.value })}></input>
                        <br></br>
                      
                        <label>Strength: </label>
                        <input type="number" max="10" min="0" value={this.state.strength} onChange={e => this.setState({ strength: e.target.value })}></input>
                        <br></br>
                      
                        <label>Speed: </label>
                        <input type="number" max="10" min="0" value={this.state.speed} onChange={e => this.setState({ speed: e.target.value })}></input>
                    </div>
                    
                    <div class="grid-item">
                      
                        <h3>Psychological</h3>
                       
                        <label>Bravery: </label>
                        <input type="number" max="10" min="0" value={this.state.bravery} onChange={e => this.setState({ bravery: e.target.value })}></input>
                        <br></br>
                       
                        <label>Leadership: </label>
                        <input type="number" max="10" min="0" value={this.state.leadership} onChange={e => this.setState({ leadership: e.target.value })}></input>
                        <br></br>
                       
                        <label>Presence/Aura: </label>
                        <input type="number" max="10" min="0" value={this.state.presence} onChange={e => this.setState({ presence: e.target.value })}></input>
                        <br></br>
                       
                        <label>Communication: </label>
                        <input type="number" max="10" min="0" value={this.state.communication} onChange={e => this.setState({ communication: e.target.value })}></input>
                        <br></br>
                      
                        <label>Reaction to Mistake: </label>
                        <input type="number" max="10" min="0" value={this.state.reaction_to_mistake} onChange={e => this.setState({ reaction_to_mistake: e.target.value })}></input>
                        <br></br>
                      
                        <button>Submit</button>
                    </div>

                </div>
            </form>
        );
    }
}
export default GoalkeeperForm;