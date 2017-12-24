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
    this.props.history.push("/agents");
  }
  render() {
    return (
      <div className="Home">
        <div className="Home-title">Welcome to IdiotBox</div>
        <div className="Home-titleCaption">
          "The most technologically efficient machine that man has ever invented
          is the book."
        </div>
        <div className="Home-container">
          <div className="Home-containerLogin">
            <div className="Home-containerLoginBody">
              <div className="Home-containerLogin-header">
                Login To Create Some technology
              </div>
              <div className="Home-containerLogin-button">
                <Button
                  onClick={() => this.redirectToLogin()}
                  label="Login"
                  width={200}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="Home-containerSignUp">
            <div className="Home-containerSignUpBody">
              <div className="Home-containerLogin-header">
                View Our Agents list here..
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
          <div className="Home-containerSignUp">
            <div className="Home-containerSignUpBody">
              <div className="Home-containerLogin-header">
                Sign Up for Explore technology in our platform
              </div>
              <div className="Home-containerLogin-button">
                <Button
                  onClick={() => this.redirectToSignUp()}
                  label="Sign Up"
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
