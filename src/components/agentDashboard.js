import React from "react";
import _ from "lodash";
import "./css/agentDashboard.css";
import Button from "./button";
export default class AgentDashboard extends React.Component {
  redirectToBack() {
    this.props.history.push("/agents");
  }
  renderUniqueAgents(agent) {
    let agentId = `${this.props.match.params.agentId}/${
      this.props.match.params.subAgentId
    }`;
    return (
      agent.idNumber === agentId && (
        <div className="UserAgent-Item" key={agent.idNumber}>
          <div className="UserAgent-ItemHeader">Agent Info</div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Age </div>
            <div className="UserAgent-ItemAgeValue">{agent.age}</div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Number </div>
            <div className="UserAgent-ItemAgeValue"> {agent.idNumber}</div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Mobile </div>
            <div className="UserAgent-ItemAgeValue"> {agent.mobile}</div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Gender </div>
            <div className="UserAgent-ItemAgeValue"> {agent.gender}</div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">O Amount </div>
            <div className="UserAgent-ItemAgeValue">{agent.oAmount}</div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Selected Type </div>
            <div className="UserAgent-ItemAgeValue">
              {agent.selectedOOption}
            </div>
          </div>
          <Button label="Go back" onClick={() => this.redirectToBack()} />
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
