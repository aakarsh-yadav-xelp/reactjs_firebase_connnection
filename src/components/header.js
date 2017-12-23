import React from "react";
import "./css/header.css";
export default class Header extends React.Component {
  render() {
    return (
      <div className="Header" onClick={() => this.props.history.push("/")}>
        <div className="Header-text">Welcome Buddy</div>
      </div>
    );
  }
}
