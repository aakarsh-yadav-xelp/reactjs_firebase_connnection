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
        <div className="UserDashboard-ItemAge">{agent.name}</div>
        <div className="UserDashboard-ItemIdNumber"> {agent.idNumber}</div>
        <div className="UserDashboard-ItemMobile">{agent.mobile}</div>
        <div className="UserDashboard-ItemGender">{agent.gender}</div>
        <div className="UserDashboard-ItemOAmount">{agent.occupation}</div>
        <div className="UserDashboard-ItemSelectedOption">{agent.location}</div>
      </div>
    );
  }

  render() {
    let { pathname } = this.props.location;

    let classForFirst = classNames("UserAgent-tabItem", {
      "UserAgent-tabItem-active": pathname === "/agents"
    });
    let classForSecond = classNames("UserAgent-tabItem", {
      "UserAgent-tabItem-active": pathname === "/payment"
    });
    let classForThird = classNames("UserDashboard-tabItem", {
      "UserDashboard-tabItem-active": pathname === "/paymentgraph"
    });
    let { agents, messages, payments } = this.props;
    agents = _.orderBy(agents, agent => agent.idNumber);
    return (
      <div className="UserDashboard">
        <SideBar {...this.props} />
        <div className="UserDashboard-List">
          <Header {...this.props} />
          <div className="UserDashboard-Body">
            <div className="UserDashboard-ListHeader">
              <div className="UserDashboard-ItemHeaderAge">Name</div>
              <div className="UserDashboard-ItemHeaderIdNumber">Id Number</div>
              <div className="UserDashboard-ItemHeaderMobile">Mobile</div>
              <div className="UserDashboard-ItemHeaderGender">Gender</div>
              <div className="UserDashboard-ItemHeaderOAmount">occupation</div>
              <div className="UserDashboard-ItemHeaderSelectedOption">
                location
              </div>
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
