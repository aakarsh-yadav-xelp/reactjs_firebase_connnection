import React from "react";
import "./css/sideBar.css";
import classNames from "classnames";
import Icon from "./Icon";
import UserIcon from "./img/user.svg";
import MoneyIcon from "./img/money.svg";
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
    return [
      <div
        className="SideBar-tab"
        style={{ height: `${window.innerHeight}px` }}
      >
        <div className="SideBar-tabHeader">
          <img src={require("./img/logo.png")} className="SideBar-ogo-Img" />Welcome
          Buddy
        </div>

        <div
          className={classForThird}
          onClick={() => this.props.history.push("/paymentgraph")}
        >
          <Icon image={MoneyIcon} />Home
        </div>
        <div
          className={classForFirst}
          onClick={() => this.props.history.push("/agents")}
        >
          <Icon image={UserIcon} />Clients List
        </div>
        <div
          className={classForSecond}
          onClick={() => this.props.history.push("/payment")}
        >
          <Icon image={MoneyIcon} />Payment
        </div>
      </div>,
      <div className="SideBar-adjustwidth" />
    ];
  }
}
