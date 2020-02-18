import React from 'react'
import './PlayerPos.css'
class GoalkeeperForm extends React.Component{
    
    state = {

        message: '',
        handling: '',
        shot_stopping: '',

        }

        
    handleSubmit = async (e) => {

        e.preventDefault();
    
        const response = await fetch('/api/goalkeeper', {
    
          method: 'POST',
    
          headers: {
    
            'Content-Type': 'application/json',
    
          },
    
          body: JSON.stringify({ handling: this.state.handling, shot_stopping: this.state.shot_stopping }),
    
        });
    
        const body = await response.text();
    
        this.setState({ message: body });
    
      };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
             
             <label><b>Handling</b></label>
      
                  <input type="text" placeholder="Enter Username" value={this.state.handling} onChange={e => this.setState({ handling: e.target.value })} />
                  <input type="text" placeholder="Enter Password" value={this.state.shot_stopping} onChange={e => this.setState({ shot_stopping: e.target.value })} />
                  
                  <button type="submit">Submit</button>
                
            </form>
          );
    }
}
export default GoalkeeperForm;