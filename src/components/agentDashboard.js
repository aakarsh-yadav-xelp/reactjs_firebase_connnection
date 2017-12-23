import React from "react";
import _ from "lodash";
import "./css/agentDashboard.css";
export default class AgentDashboard extends React.Component {
  renderUniqueAgents(agent) {
    let agentId = `${this.props.match.params.agentId}/${
      this.props.match.params.subAgentId
    }`;
    return (
      agent.idNumber === agentId && (
        <div className="UserAgent-Item">
          <div className="UserAgent-ItemHeader">Agent Info</div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Age </div>
            <div className="UserAgent-ItemAgeValue">{agent.age}</div>
          </div>
          <div className="UserAgent-ItemIdNumber">
            Number : {agent.idNumber}
          </div>
          <div className="UserAgent-ItemMobile">Mobile : {agent.mobile}</div>
          <div className="UserAgent-ItemGender">{agent.gender}</div>
          <div className="UserAgent-ItemOAmount">{agent.oAmount}</div>
          <div className="UserAgent-ItemSelectedOption">
            {agent.selectedOOption}
          </div>
        </div>
      )
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
      <div className="UserAgent">
        {agents &&
          agents.map(agent => {
            return this.renderAgents(agent);
          })}
      </div>
    );
  }
}
