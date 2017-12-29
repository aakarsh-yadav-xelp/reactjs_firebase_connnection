import React from "react";
import Input from "./input";
import Button from "./button";
import SideBar from "./sideBar";
import Header from "./header";
import "./css/createAgent.css";
export default class CreateAgent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      idNumber: null,
      email: null,
      mobileNUmber: null,
      password: null
    };
  }
  onSubmit() {
    if (this.props.createAgent) {
      this.props.createAgent(this.state);
    }
  }
  render() {
    return (
      <div className="CreateAgent">
        <SideBar {...this.props} />
        <div className="CreateAgent-List">
          <Header {...this.props} />
          <div className="CreateAgent-BodyWrapper">
            <div className="CreateAgent-Body">
              <div className="CreateAgent-formHeader">Add A new Agent</div>
              <div className="CreateAgent-formBody">
                <div className="CreateAgent-formBody-input">
                  <Input
                    placeholder="Name"
                    width={250}
                    value={this.state.name}
                    onChange={val => this.setState({ name: val })}
                  />
                </div>
                <div className="CreateAgent-formBody-input">
                  <Input
                    placeholder="Agent Id"
                    width={250}
                    onChange={val => this.setState({ idNumber: val })}
                  />
                </div>
                <div className="CreateAgent-formBody-input">
                  <Input
                    placeholder="Email"
                    width={250}
                    onChange={val => this.setState({ email: val })}
                  />
                </div>
                <div className="CreateAgent-formBody-input">
                  <Input
                    placeholder="Mobile"
                    width={250}
                    onChange={val => this.setState({ mobileNUmber: val })}
                  />
                </div>
                <div className="CreateAgent-formBody-input">
                  <Input
                    placeholder="Password"
                    width={250}
                    onChange={val => this.setState({ password: val })}
                  />
                </div>
                <div className="CreateAgent-formBody-button">
                  <div className="CreateAgent-formBody-buttonItem">
                    <Button label="Save" onClick={() => this.onSubmit()} />
                  </div>
                  <div className="CreateAgent-formBody-buttonItem">
                    <Button
                      label="Go Back"
                      onClick={() => this.props.history.push("/paymentgraph")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
