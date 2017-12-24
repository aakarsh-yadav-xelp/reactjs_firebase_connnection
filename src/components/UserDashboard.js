import React from "react";
import _ from "lodash";
import "./css/userDashboard.css";
export default class UserDashboard extends React.Component {
  redirectToAgentInfo(id) {
    this.props.history.push(`/agents/${id}`);
  }
  renderUniqueAgents(agent) {
    console.log(agent);
    return (
      <div
        className="UserDashboard-Item"
        onClick={() => this.redirectToAgentInfo(agent.idNumber)}
        key={agent.idNumber}
      >
        <div className="UserDashboard-ItemAge">{agent.name}</div>
        <div className="UserDashboard-ItemIdNumber"> {agent.idNumber}</div>
        <div className="UserDashboard-ItemMobile">{agent.mobile}</div>
        <div className="UserDashboard-ItemGender">{agent.gender}</div>
        <div className="UserDashboard-ItemOAmount">{agent.occupation}</div>
        <div className="UserDashboard-ItemSelectedOption">{agent.location}</div>
      </div>
    );
  }
  renderAgents(agents) {
    return _.toArray(agents).map(item => {
      return this.renderUniqueAgents(item);
    });
  }
  render() {
    let agents = _.toArray(this.props.agents);
    return (
      <div className="UserDashboard">
        <div className="UserDashboard-List">
          <div className="UserDashboard-ListHeader">
            <div className="UserDashboard-ItemAge">Name</div>
            <div className="UserDashboard-ItemIdNumber">Id No.</div>
            <div className="UserDashboard-ItemMobile">Mobile</div>
            <div className="UserDashboard-ItemGender">Gender</div>
            <div className="UserDashboard-ItemOAmount">occupation</div>
            <div className="UserDashboard-ItemSelectedOption">location</div>
          </div>
          {agents &&
            agents.map(agent => {
              return this.renderAgents(agent);
            })}
        </div>
      </div>
    );
  }
}
