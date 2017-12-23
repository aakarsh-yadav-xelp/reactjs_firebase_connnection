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

    return agent.idNumber === agentId &&
      <div className="UserAgent-Item" key={agent.idNumber}>
        <div className="UserAgent-ItemHeader">Agent Info</div>
        {_.toPairs(agent).map((item, index) => {
          return <div className="UserAgent-ItemAge" key={index}>
            <div className="UserAgent-ItemAgeLabel">{item[0]}</div>
            <div className="UserAgent-ItemAgeValue">{item[1]}</div>
          </div>
        })}
        <Button label="Go back" onClick={() => this.redirectToBack()} />
      </div>

      ;
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
