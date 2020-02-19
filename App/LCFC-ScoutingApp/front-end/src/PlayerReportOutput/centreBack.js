import React from "react";
import "./PlayerPos.css";
class centreBackForm extends React.Component {
  render() {
    return (
      <form>
        <h2>Centre Back</h2>
        <div class="grid-container">
          <div class="grid-item">
            <h3 class="rating">Player Rating</h3>
            <select>
              <option>A</option>
              <option>B+</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <div class="grid-item">
            <h3>In Possession</h3>
            <label>Receiving under pressure: </label>
            <label class="recieving_under_pressure"> </label>
            <br></br>
            <label>Short passing: </label>
            <label class="short_passing"> </label>
            <br></br>
            <label>Long passing: </label>
            <label class="long_passing"> </label>
            <br></br>
            <label>Carrying the ball forward: </label>
            <label class="carrying_the_ball_forward"> </label>
            <br></br>
            <label>Right foot: </label>
            <label class="right_foot"> </label>
            <br></br>
            <label>Left foot: </label>
            <label class="left_foot"> </label>
            <br></br>
          </div>

          <div class="grid-item">
            <h3>Attacking</h3>
            <label>Threat at set plays: </label>
            <label class="threat_at_set_plays"> </label>
            <br></br>
            <label>Aerial ability: </label>
            <label class="attacking_aerial_ability"> </label>
            <br></br>
          </div>

          <div class="grid-item">
            <h3>Defending</h3>
            <label>1v1: </label>
            <label class="one_v_one"> </label>
            <br></br>
            <label>Aerial ability: </label>
            <label class="defending_aerial_ability"> </label>
            <br></br>
            <label>Tackling: </label>
            <label class="tackling"> </label>
            <br></br>
            <label>Marking: </label>
            <label class="marking"> </label>
            <br></br>
            <label>Reading game/interceptions: </label>
            <label class="interceptions"> </label>
            <br></br>
            <label>Sensing danger: </label>
            <label class="sensing_danger"> </label>
            <br></br>
            <label>Defending crosses: </label>
            <label class="defending_crosses"> </label>
            <br></br>
            <label>Pressing: </label>
            <label class="pressing"> </label>
            <br></br>
            <label>Recovery runs: </label>
            <label class="recovery_runs"> </label>
            <br></br>
            <label>Tracking runners: </label>
            <label class="tracking_runners"> </label>
            <br></br>
          </div>

          <div class="grid-item">
            <h3>Tactical</h3>
            <label>Agility: </label>
            <label class="agility"> </label>
            <br></br>
            <label>Angles to receive: </label>
            <label class="angles_to_recieve"> </label>
            <br></br>
            <label>Distances: </label>
            <label class="distances"> </label>
            <br></br>
            <label>Recovering to shape: </label>
            <label class="recovering_to_shape"> </label>
            <br></br>
          </div>

          <div class="grid-item">
            <h3>Physical</h3>
            <label>Pace when turning: </label>
            <label class="pace_when_turning"> </label>
            <br></br>
            <label>Jump/spring: </label>
            <label class="jump"> </label>
            <br></br>
            <label>Mobility: </label>
            <label class="mobility"> </label>
            <br></br>
            <label>Strength: </label>
            <label class="strength"> </label>
            <br></br>
            <label>Aggression: </label>
            <label class="aggression"> </label>
            <br></br>
          </div>

          <div class="grid-item">
            <h3>Pyschological</h3>
            <label>Bravery: </label>
            <label class="bravery"> </label>
            <br></br>
            <label>Leadership: </label>
            <label class="leadership"> </label>
            <br></br>
            <label>Team work: </label>
            <label class="team_work"> </label>
            <br></br>
            <label>Communication: </label>
            <label class="communication"> </label>
            <br></br>
            <label>Response to criticism: </label>
            <label class="response_to_criticism"> </label>
            <br></br>
            <label>Reaction to mistakes: </label>
            <label class="reaction_to_mistake"> </label>
            <br></br>
          </div>
          <div class="grid-item">
            <h3>Additional Comments</h3>
            <textarea class="commentBox" readOnly></textarea>
          </div>
        </div>
      </form>
    );
  }
}
export default centreBackForm;
