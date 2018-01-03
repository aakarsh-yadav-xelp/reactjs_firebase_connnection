import React from "react";
import "./css/agentsItem.css";
export default class AgentsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDelete: false
    };
  }
  onDelete(evt) {
    evt.stopPropagation();
    if (this.props.onDelete) {
      this.props.onDelete(this.props.agent.idNumber);
    }
  }
  render() {
    let { agent, index } = this.props;
    return (
      <div
        className="UserDashboard-Item"
        onClick={() => this.props.redirectToAgentInfo(agent.idNumber)}
        onMouseEnter={() => this.setState({ showDelete: true })}
        onMouseLeave={() => this.setState({ showDelete: null })}
      >
        <div className="UserDashboard-ItemSrNumber">{index + 1}</div>
        <div className="UserDashboard-ItemName">{agent.name}</div>
        <div className="UserDashboard-ItemIdNumber"> {agent.idNumber}</div>
        <div className="UserDashboard-ItemMobileNo">{agent.mobileNumber}</div>
        <div className="UserDashboard-ItemMail">{agent.email}</div>
        <div className="UserDashboard-ItemClients">
          {agent.Clients ? agent.Clients.length : 0}
          {this.state.showDelete && (
            <div
              className="UserDashboard-ItemClientsDelete"
              onClick={val => this.onDelete(val)}
            />
          )}
        </div>
      </div>
    );
  }
}
