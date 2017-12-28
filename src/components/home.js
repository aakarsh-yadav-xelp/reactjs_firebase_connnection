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
        <div className="Home-logo">
          <img
            src={require("./img/logo.jpg")}
            width={100}
            height={100}
            alt={"home-loho"}
            className="Home-logo-image"
          />
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
        <div className="Home-image">
          <div className="Home-imageItem">
            <div className="Home-imageItem-image" />
          </div>
          <div className="Home-imageItem1">
            <div className="Home-imageItem-image" />
          </div>
          <div className="Home-imageItem2">
            <div className="Home-imageItem-image" />
          </div>
          <div className="Home-imageItem3">
            <div className="Home-imageItem-image" />
          </div>
        </div>
        <div className="Footer">Contact Us</div>
      </div>
    );
  }
}
