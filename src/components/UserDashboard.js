import React from "react";
import _ from "lodash";
import classNames from "classnames";
import "./css/userDashboard.css";
export default class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1
    };
  }
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
  renderfirst(agents) {
    return (
      <div>
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
    );
  }
  render() {
    let classForFirst = classNames("UserDashboard-tabItem", {
      "UserDashboard-tabItem-active": this.state.selectedTab === 1
    });
    let classForSecond = classNames("UserDashboard-tabItem", {
      "UserDashboard-tabItem-active": this.state.selectedTab === 2
    });
    let classForThird = classNames("UserDashboard-tabItem", {
      "UserDashboard-tabItem-active": this.state.selectedTab === 3
    });
    let agents = _.toArray(this.props.agents);
    return (
      <div className="UserDashboard">
        <div className="UserDashboard-tab">
          <div
            className={classForFirst}
            onClick={() => this.setState({ selectedTab: 1 })}
          >
            Agents List
          </div>
          <div
            className={classForSecond}
            onClick={() => this.setState({ selectedTab: 2 })}
          >
            Payment
          </div>
          <div
            className={classForThird}
            onClick={() => this.setState({ selectedTab: 3 })}
          >
            Messages
          </div>
        </div>
        <div className="UserDashboard-List">{this.renderfirst(agents)}</div>
      </div>
    );
  }
}
