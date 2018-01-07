import React from "react";
import _ from "lodash";
import SideBar from "./sideBar";
import HeaderContainer from "../containers/headerContainer";
import ChatBox from "./ChatBox";
import "./css/agentDashboard.css";
export default class AgentDashboard extends React.Component {
  redirectToAgentInfo(agentId, id) {
    this.props.history.push(`/agents/client/${id}`);
  }
  renderUniqueClients(agent, index) {
    return (
      <div
        key={index}
        className="AgentDashboard-Item"
        onClick={() => this.redirectToAgentInfo(agent.agentId, agent.IdNumber)}
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
    let clients,
      messages = [],
      clientsArr = [];
    if (this.props.match.params.agentId) {
      clients = _.find(
        this.props.agents,
        agent => agent.idNumber === this.props.match.params.agentId
      );
      let tempMessages = _.toArray(clients && clients.messages);
      _.forEach(tempMessages, msg => {
        messages.push({ message: msg.Message });
      });
    } else {
      _.map(this.props.agents, agent => {
        if (agent.Clients) {
          _.map(agent.Clients, client => {
            clientsArr.push(client);
          });
        }
      });
    }
    return (
      <div className="AgentDashboard">
        <SideBar {...this.props} />
        <div className="AgentDashboard-info">
          <HeaderContainer />
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
            {this.props.match.params.agentId &&
              clients &&
              clients.Clients &&
              clients.Clients.map((client, index) => {
                return this.renderUniqueClients(client, index);
              })}
            {!this.props.match.params.agentId &&
              clientsArr &&
              clientsArr.map((client, index) => {
                return this.renderUniqueClients(client, index);
              })}
          </div>
          {this.props.match.params.agentId && <ChatBox messages={messages} />}
        </div>
      </div>
    );
  }
}
