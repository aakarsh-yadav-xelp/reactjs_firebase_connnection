import React from "react";
import Button from "./button";
import Input from "./input";
import "./css/loginForm.css";
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }
  redirectToSignUp() {
    this.props.history.push("/signup");
  }
  loginUser() {
    if (this.state.email && this.state.password && this.props.login) {
      this.props.login({
        email: this.state.email,
        password: this.state.password
      });
    }
    console.log("lonig");
  }
  render() {
    return (
      <div className="LoginForm">
        <div className="LoginForm-login">
          <div className="LoginForm-container">
            <div className="LoginForm-containerTitle">Welcome to ASDA</div>
            <div className="LoginForm-containerItem">
              <img
                src={require("./img/logo.png")}
                width={100}
                height={100}
                alt={"home-loho"}
                className="Home-logo-image"
              />
            </div>
            <div className="LoginForm-containerItem">
              <Input
                placeholder="Email"
                value={this.state.email}
                width={250}
                height={45}
                onChange={email => this.setState({ email })}
              />
            </div>
            <div className="LoginForm-containerItem">
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                width={250}
                height={45}
                onChange={password => this.setState({ password })}
              />
            </div>
            <Button label="Login" onClick={() => this.loginUser()} />
          </div>
        </div>
        <div className="LoginForm-image">
          <div className="LoginForm-imageItem">
            <div className="LoginForm-imageItem-image" />
          </div>
          <div className="LoginForm-imageItem1">
            <div className="LoginForm-imageItem-image" />
          </div>
          <div className="LoginForm-imageItem2">
            <div className="LoginForm-imageItem-image" />
          </div>
          <div className="LoginForm-imageItem3">
            <div className="LoginForm-imageItem-image" />
          </div>
        </div>
      </div>
    );
  }
}
