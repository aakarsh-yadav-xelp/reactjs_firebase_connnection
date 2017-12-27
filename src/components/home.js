import React from "react";
import Button from "./button";
import "./css/home.css";
export default class Home extends React.Component {
  redirectToLogin() {
    this.props.history.push("/login");
  }
  redirectToSignUp() {
    this.props.history.push("/signup");
  }
  redirectToAgentList() {
    this.props.history.push("/paymentgraph");
  }
  render() {
    return (
      <div className="Home">
        <div className="Home-title">Welcome to ASDA</div>
        <div className="Home-titleCaption">
          "The most technologically efficient machine that man has ever invented
          is the book."
        </div>
        <div className="Home-container">
          <div className="Home-containerSignUp">
            <div className="Home-containerSignUpBody">
              <div className="Home-containerLogin-header">
                View Our Client list here..
              </div>
              <div className="Home-containerLogin-button">
                <Button
                  onClick={() => this.redirectToAgentList()}
                  label="View"
                  width={200}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
