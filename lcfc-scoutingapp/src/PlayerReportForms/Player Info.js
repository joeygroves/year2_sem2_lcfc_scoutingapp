import React from 'react'
import './PlayerPos.css'
class PlayerInfoForm extends React.Component{
    
    state = {
      
        first_name: '',
        last_name: '',
        club_name: '',
        height: '',
        age: '',
        date_played: '',
        club_played: '',
        ht_score: '',
        ft_score: '',
    };


    render(){
        return(
            <form>
            <h2>Player Information</h2>
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
                </div>
            </div>
            </form>
        );
    }
}
export default PlayerInfoForm;