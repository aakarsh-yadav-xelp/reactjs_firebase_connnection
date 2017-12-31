import React from "react";
import _ from "lodash";
import classNames from "classnames";
import SideBar from "./sideBar";
import Header from "./header";
import Icon from "./Icon";
import UserIcon from "./img/user.svg";
import MoneyIcon from "./img/money.svg";
import { convertDateStringToTimeAgoFromNow } from "../dbUtils/timeUtils";
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
  renderUniqueAgents(agent, index) {
    return (
      <div
        key={index}
        className="UserDashboard-Item"
        onClick={() => this.redirectToAgentInfo(agent.idNumber)}
      >
        <div className="UserDashboard-ItemSrNumber">{index + 1}</div>
        <div className="UserDashboard-ItemName">{agent.name}</div>
        <div className="UserDashboard-ItemIdNumber"> {agent.idNumber}</div>
        <div className="UserDashboard-ItemMobileNo">{agent.mobileNumber}</div>
        <div className="UserDashboard-ItemMail">{agent.email}</div>
        <div className="UserDashboard-ItemClients">
          {agent.Clients ? agent.Clients.length : 0}
        </div>
      </div>
    );
  }

  render() {
    let { pathname } = this.props.location;
    let { agents, messages, payments } = this.props;
    agents = _.orderBy(agents, agent => agent.idNumber);
    return (
      <div className="UserDashboard">
        <SideBar {...this.props} />
        <div className="UserDashboard-List">
          <Header {...this.props} />
          <div className="UserDashboard-Body">
            <div className="UserDashboard-ListHeader">
              <div className="UserDashboard-ItemHeaderSrNumber">Sr No.</div>
              <div className="UserDashboard-ItemHeaderName">Name</div>
              <div className="UserDashboard-ItemHeaderIdNumber">Id Number</div>
              <div className="UserDashboard-ItemHeaderMobileNo">Mobile</div>
              <div className="UserDashboard-ItemHeaderMail">Mail</div>
              <div className="UserDashboard-ItemHeaderClients">Clients</div>
            </div>
            {agents &&
              agents.map((agent, index) => {
                return this.renderUniqueAgents(agent, index);
              })}
          </div>
        </div>
      </div>
    );
  }
}
