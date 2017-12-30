import React from "react";
import _ from "lodash";
import SideBar from "./sideBar";
import Header from "./header";
import "./css/agentDashboard.css";
export default class AgentDashboard extends React.Component {
  redirectToAgentInfo(id) {
    this.props.history.push(`/agents/${this.props.match.params.agentId}/${id}`);
  }
  renderUniqueClients(agent, index) {
    console.log(agent);
    return (
      <div
        key={index}
        className="AgentDashboard-Item"
        onClick={() => this.redirectToAgentInfo(agent.IdNumber)}
      >
        <div className="AgentDashboard-ItemAge">{agent.Name}</div>
        <div className="AgentDashboard-ItemIdNumber"> {agent.IdNumber}</div>
        <div className="AgentDashboard-ItemMobile">{agent.Mobile}</div>
        <div className="AgentDashboard-ItemGender">{agent.Gender}</div>
        <div className="AgentDashboard-ItemOAmount">{agent.Occupation}</div>
        <div className="AgentDashboard-ItemSelectedOption">
          {agent.Location}
        </div>
      </div>
    );
  }
  render() {
    let clients = _.find(
      this.props.agents,
      agent => agent.idNumber === this.props.match.params.agentId
    );

    return (
      <div className="AgentDashboard">
        <SideBar {...this.props} />
        <div className="AgentDashboard-info">
          <Header {...this.props} />
          <div className="AgentDashboard-Body">
            <div className="AgentDashboard-ListHeader">
              <div className="AgentDashboard-ItemHeaderAge">Name</div>
              <div className="AgentDashboard-ItemHeaderIdNumber">Id Number</div>
              <div className="AgentDashboard-ItemHeaderMobile">Mobile</div>
              <div className="AgentDashboard-ItemHeaderGender">Gender</div>
              <div className="AgentDashboard-ItemHeaderOAmount">occupation</div>
              <div className="AgentDashboard-ItemHeaderSelectedOption">
                location
              </div>
            </div>
            {clients &&
              clients.Clients &&
              clients.Clients.map((client, index) => {
                return this.renderUniqueClients(client, index);
              })}
          </div>
        </div>
      </div>
    );
  }
}
