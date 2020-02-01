import React from 'react';
import NavBar from '../Components/NavigationBar/NavBar'
// eslint-disable-next-line
import Goalkeeper from '../PlayerReportForms/Goalkeeper'
// eslint-disable-next-line
import Defender from '../PlayerReportForms/Defender'
// eslint-disable-next-line
import fallBack from '../PlayerReportForms/fallBack'
// eslint-disable-next-line
import Midfielder from '../PlayerReportForms/Midfielder'
// eslint-disable-next-line
import wideMidfielder from '../PlayerReportForms/wideMidfielder'
// eslint-disable-next-line
import Striker from '../PlayerReportForms/Striker'

var FormChange = Goalkeeper;


class PlayerReportPage extends React.Component{
   /* runFormChange(id){;
        FormChange = id;
    }
    
    onChange={this.runFormChange(this.value)}
    */
    render(){
        return(
            <div class= "Player Reports Forms">
                <NavBar />
                <div class= "PlayerForms">
                    <h1>
                        Player Report Page
                    </h1>
                    <label for="PlayerPositions">Select Player Position</label>
                    <br/>
                    <select id = "PlayerPositions" >
                        <option value = "Goalkeeper">Goalkeeper</option>
                        <option value = "Defender">Defender</option>
                        <option value = "fallBack">Fall Back</option>
                        <option value = "Midfielder">Midfielder</option>
                        <option value = "wideMidfielder">Wide Midfielder</option>
                        <option value = "Striker">Striker</option>
                    </select>
                    
                    <FormChange />
                </div>
            </div>
        );
    }
}
export default PlayerReportPage;