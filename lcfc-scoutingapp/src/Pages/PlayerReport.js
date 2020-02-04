import React from 'react';
import NavBar from '../Components/NavigationBar/NavBar'
// eslint-disable-next-line
import Goalkeeper from '../PlayerReportForms/Goalkeeper'
// eslint-disable-next-line
import centreBack from '../PlayerReportForms/centreBack'
// eslint-disable-next-line
import fallBack from '../PlayerReportForms/fallBack'
// eslint-disable-next-line
import centreMid from '../PlayerReportForms/centreMid'
// eslint-disable-next-line
import wideMidfielder from '../PlayerReportForms/wideMidfielder'
// eslint-disable-next-line
import Striker from '../PlayerReportForms/Striker'
// eslint-disable-next-line
import PlayerInfo from '../PlayerReportForms/Player Info'

var FormChange = Goalkeeper;



class PlayerReportPage extends React.Component{
    runFormChange(SelectedValue){
        if(SelectedValue.value == "Goalkeeper"){
            FormChange = Goalkeeper;
            this.forceUpdate(); 
        }
        else if(SelectedValue.value == "centreBack"){
            FormChange = centreBack;
            this.forceUpdate(); 
        } 
        
     }
    render(){
        return(
            <div class= "Player Reports Forms">
                <NavBar />
                <div class= "PlayerForms">
                    <h1>
                        Player Report Page
                    </h1>
                    <label for="PlayerPositions" >Select Player Position</label>
                    <br/>
                    <select id = "PlayerPositions" onChange = {this.runFormChange(this)} > 
                        <option value = "Goalkeeper"> Goalkeeper</option>
                        <option value = "centreBack">Central Defender</option>
                        <option value = "fallBack">Fall Back </option>
                        <option value = "centreMidfielder">Central Midfielder</option>
                        <option value = "wideMidfielder">Wide Midfielder</option>
                        <option value = "Striker">Striker</option>
                    </select>
                    <br/>
                    <br/>
                    <label>Scout Name: </label>
                    <input></input>
                    <br/>
                    <br/>
                    
                    <PlayerInfo/>
                    
                    <FormChange />
                    
                    <br/>
                    <input type="submit"/>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}
export default PlayerReportPage;