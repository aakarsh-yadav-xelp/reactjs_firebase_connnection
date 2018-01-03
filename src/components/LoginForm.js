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
        <div className="LoginForm-container">
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
              placeholder="password"
              value={this.state.password}
              width={250}
              height={45}
              onChange={password => this.setState({ password })}
            />
          </div>
          <Button label="Login" onClick={() => this.loginUser()} />
          <div className="LoginForm-signUp">
            <div className="LoginForm-signUpHeader">
              already have an account
            </div>
            <div className="">
              <Button label="SignUp" onClick={() => this.redirectToSignUp()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
