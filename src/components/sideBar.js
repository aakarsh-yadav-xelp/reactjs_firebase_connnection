import React from "react";
import "./css/sideBar.css";
import classNames from "classnames";
import Icon from "./Icon";
import UserIcon from "./img/user.svg";
import UserSetting from "./img/settings.svg";
import MoneyIcon from "./img/mon.svg";
import CalanderIcon from "./img/icon.svg";
import HomeIcon from "./img/home.svg";
import Logout from "./img/logout.svg";
export default class SideBar extends React.Component {
  render() {
    let { pathname } = this.props.location;

    let classForFirst = classNames("SideBar-tabItem", {
      "SideBar-tabItem-active": pathname === "/agents"
    });
    let classForSecond = classNames("SideBar-tabItem", {
      "SideBar-tabItem-active": pathname === "/payment"
    });
    let classForThird = classNames("SideBar-tabItem", {
      "SideBar-tabItem-active": pathname === "/paymentgraph"
    });
    let classForFourth = classNames("SideBar-tabItem", {
      "SideBar-tabItem-active": pathname === "/createagent"
    });
    let classForFifth = classNames("SideBar-tabItem", {
      "SideBar-tabItem-active": pathname === "/allClients"
    });
    let classForSixeth = classNames("SideBar-tabItem", {
      "SideBar-tabItem-active": pathname === "/logouts"
    });
    return [
      <div
        className="SideBar-tab"
        style={{ height: `${window.innerHeight}px` }}
        key={111}
      >
        <div className="SideBar-tabHeader" key={1}>
          <img
            src={require("./img/logo.png")}
            className="SideBar-ogo-Img"
          />Welcome Buddy
        </div>

        <div
          className={classForFirst}
          onClick={() => this.props.history.push("/agents")}
          key={3}
        >
          <Icon image={UserIcon} />Agents List
        </div>
        <div
          className={classForFifth}
          onClick={() => this.props.history.push("/allClients")}
          key={4}
        >
          <Icon image={UserSetting} />Clients List
        </div>
        <div
          className={classForSecond}
          onClick={() => this.props.history.push("/payment")}
          key={6}
        >
          <Icon image={MoneyIcon} />Payment
        </div>
        <div
          className={classForFourth}
          onClick={() => this.props.history.push("/createagent")}
          key={7}
        >
          <Icon image={MoneyIcon} />Create Agent
        </div>
        <div
          className={classForThird}
          onClick={() => this.props.history.push("/paymentgraph")}
          key={2}
        >
          <Icon image={HomeIcon} />Summary Analysis
        </div>
        <div
          className={classForSixeth}
          onClick={() => this.props.history.push("/logout")}
          key={2}
        >
          <Icon image={Logout} />Logout
        </div>
      </div>,
      <div className="SideBar-adjustwidth" key={10} />
    ];
  }
}
