import React from "react";
import _ from "lodash";
import classNames from "classnames";
import SideBar from "./sideBar";
import HeaderContainer from "../containers/headerContainer";
import Icon from "./Icon";
import UserIcon from "./img/user.svg";
import MoneyIcon from "./img/money.svg";
import { convertDateStringToTimeAgoFromNow } from "../dbUtils/timeUtils";
import "./css/userDashboard.css";
import AgentsItem from "./agentsItem";
export default class UserDashboard extends React.Component {
  redirectToAgentInfo(id) {
    this.props.history.push(`/agents/${id}`);
  }
  onDelete(id) {
    console.log("delete");
  }
  render() {
    let { pathname } = this.props.location;
    let { agents, messages, payments } = this.props;
    agents = _.orderBy(agents, agent => agent.idNumber);
    return (
      <div className="UserDashboard">
        <SideBar {...this.props} />
        <div className="UserDashboard-List">
          <HeaderContainer />
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
                return (
                  <AgentsItem
                    agent={agent}
                    key={index}
                    index={index}
                    onDelete={val => this.onDelete(val)}
                    redirectToAgentInfo={val => this.redirectToAgentInfo(val)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
