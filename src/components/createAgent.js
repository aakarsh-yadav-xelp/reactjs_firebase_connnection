import React from "react";
import _ from "lodash";
import Input from "./input";
import Button from "./button";
import { SUCCESS, FAILURE } from "../actions/constant.actions";
import Popup from "./popup";
import SideBar from "./sideBar";
import HeaderContainer from "../containers/headerContainer";
import "./css/createAgent.css";
export default class CreateAgent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      idNumber: null,
      email: null,
      mobileNumber: null,
      password: null,
      popup: { show: false, type: null, message: null }
    };
  }
  closePopup() {
    setTimeout(() => {
      let popup = {
        show: false,
        type: null,
        message: null
      };
      this.setState({ popup });
    }, 2000);
  }
  onSubmit() {
    let { name, idNumber, email, mobileNumber, password } = this.state;
    if (
      !_.isEmpty(name) &&
      !_.isEmpty(idNumber) &&
      !_.isEmpty(email) &&
      !_.isEmpty(mobileNumber) &&
      !_.isEmpty(password) &&
      _.findIndex(this.props.agents, agent => agent.idNumber === idNumber) < 0
    ) {
      if (this.props.createAgent) {
        this.props.createAgent({
          name,
          idNumber,
          email,
          mobileNumber,
          password,
          status: 1
        });
        let popup = {
          show: true,
          type: SUCCESS,
          message: "Agent Created Successfully"
        };
        this.setState({
          popup,
          name: null,
          idNumber: null,
          email: null,
          mobileNumber: null,
          password: null
        });
        this.closePopup();
      }
    } else {
      let popup = {
        show: true,
        type: FAILURE,
        message: "Please Fill all details"
      };
      this.setState({ popup });
      this.closePopup();
    }
  }

  render() {
    return (
      <div className="CreateAgent">
        <SideBar {...this.props} />
        <div className="CreateAgent-List">
          <HeaderContainer />
          {this.state.popup.show && (
            <Popup
              message={this.state.popup.message}
              type={this.state.popup.type}
            />
          )}
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
                    value={this.state.idNumber}
                    onChange={val => this.setState({ idNumber: val })}
                  />
                </div>
                <div className="CreateAgent-formBody-input">
                  <Input
                    placeholder="Email"
                    width={250}
                    value={this.state.email}
                    onChange={val => this.setState({ email: val })}
                  />
                </div>
                <div className="CreateAgent-formBody-input">
                  <Input
                    placeholder="Mobile"
                    width={250}
                    value={this.state.mobileNumber}
                    onChange={val => this.setState({ mobileNumber: val })}
                  />
                </div>
                <div className="CreateAgent-formBody-input">
                  <Input
                    placeholder="Password"
                    type="password"
                    width={250}
                    value={this.state.password}
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
