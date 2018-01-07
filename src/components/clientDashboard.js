import React from "react";
import _ from "lodash";
import Modal from "react-modal";
import "./css/clientDashboard.css";
import Button from "./button";
import SideBar from "./sideBar";
import classNames from "classnames";
import HeaderContainer from "../containers/headerContainer";
import Icon from "./Icon";
import Input from "./input";
import UserIcon from "./img/user.svg";
import MoneyIcon from "./img/money.svg";
import { convertDateStringToTimeAgoFromNow } from "../dbUtils/timeUtils";

export default class ClientsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      value: {},
      age: null
    };
  }
  onSave(agentId, IdNumber) {
    if (this.props.onEdit) {
      this.props.onEdit(agentId, Object.assign({}, this.state, { IdNumber }));
      this.setState({ edit: false });
    }
  }
  redirectToBack() {
    this.props.history.push("/agents");
  }
  renderModal() {
    return (
      <Modal isOpen={this.state.edit} closeTimeoutMS={3} contentLabel="Modal">
        <h1>Modal Content</h1>
        <p>Etc.</p>
      </Modal>
    );
  }
  renderUniqueAgents(agent) {
    return (
      <div className="UserAgent-Item" key={agent.idNumber}>
        <div className="UserAgent-ItemHeader">Client Info</div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Name</div>
          <div className="UserAgent-ItemAgeValue">{agent.Name}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Id Number</div>
          <div className="UserAgent-ItemAgeValue">{agent.IdNumber}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Date Of Brth</div>
          <div className="UserAgent-ItemAgeValue">{agent["Date Of Birth"]}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Age</div>
          <div className="UserAgent-ItemAgeValue">{agent.Age}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Gender</div>
          <div className="UserAgent-ItemAgeValue">{agent.Gender}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Location</div>
          <div className="UserAgent-ItemAgeValue">{agent.Location}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Mobile</div>
          <div className="UserAgent-ItemAgeValue">{agent.Mobile}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Occupation</div>
          <div className="UserAgent-ItemAgeValue">{agent.Occupation}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Disability</div>
          <div className="UserAgent-ItemAgeValue">{agent.Disability}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Total Payable</div>
          <div className="UserAgent-ItemAgeValue">{agent.AmountPayable}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Tax Year</div>
          <div className="UserAgent-ItemAgeValue">{agent.TaxYear}</div>
        </div>{" "}
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Total Payable</div>
          <div className="UserAgent-ItemAgeValue">{agent.AmountPayable}</div>
        </div>{" "}
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Property Address </div>
          <div className="UserAgent-ItemAgeValue">{agent.PropertyAddress}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Property Amount </div>
          <div className="UserAgent-ItemAgeValue">{agent.PropertyAmount}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Property Number </div>
          <div className="UserAgent-ItemAgeValue">{agent.PropertyNumber}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Property Payment Option </div>
          <div className="UserAgent-ItemAgeValue">
            {agent.PropertPaymentOption}
          </div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Council Amount </div>
          <div className="UserAgent-ItemAgeValue">{agent.CouncilAmount}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Council Location </div>
          <div className="UserAgent-ItemAgeValue">{agent.CouncilLocation}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Council Type </div>
          <div className="UserAgent-ItemAgeValue">{agent.CouncilType}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Council Payment Option </div>
          <div className="UserAgent-ItemAgeValue">
            {agent.CouncilPaymentOption}
          </div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Other Amount </div>
          <div className="UserAgent-ItemAgeValue">{agent.OtherAmount}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Other Purpose </div>
          <div className="UserAgent-ItemAgeValue">{agent.OtherPurpose}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Other Type </div>
          <div className="UserAgent-ItemAgeValue">{agent.OtherType}</div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Other Payment Option </div>
          <div className="UserAgent-ItemAgeValue">
            {agent.OtherPaymentOption}
          </div>
        </div>
        <div className="UserAgent-ItemAge">
          <div className="UserAgent-ItemAgeLabel">Agent Id </div>
          <div className="UserAgent-ItemAgeValue">{agent.AgentId}</div>
        </div>
        <div className="UserAgent-button">
          <div className="UserAgent-buttonItem">
            <Button label="Go Back" onClick={() => this.redirectToBack()} />
          </div>
          <div className="UserAgent-buttonItem">
            <Button
              label="Edit"
              onClick={() => this.setState({ edit: true })}
            />
          </div>
        </div>
      </div>
    );
  }

  renderUniqueAgentEdit(agent) {
    console.log(agent);
    let agentId = `${this.props.match.params.agentId}/${
      this.props.match.params.subAgentId
    }`;
    return (
      agent.IdNumber === this.props.match.params.subAgentId && (
        <div className="UserAgent-Item" key={agent.idNumber}>
          <div className="UserAgent-ItemHeader">Client Info</div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Name</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={this.state.name ? this.state.name : agent.Name}
                onChange={val => this.setState({ name: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Date Of Birth</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="date"
                value={
                  this.state["Date Of Birth"]
                    ? this.state["Date Of Birth"]
                    : agent["Date Of Birth"]
                }
                onChange={val => this.setState({ "Date Of Birth": val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Age</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.Age ? this.state.Age : agent.Age}
                onChange={val => this.setState({ Age: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Gender</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={this.state.Gender ? this.state.Gender : agent.Gender}
                onChange={val => this.setState({ Gender: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Location</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.Location ? this.state.Location : agent.Location
                }
                onChange={val => this.setState({ Location: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Mobile</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.Mobile ? this.state.Mobile : agent.Mobile}
                onChange={val => this.setState({ Mobile: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Occupation</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.Occupation
                    ? this.state.Occupation
                    : agent.Occupation
                }
                onChange={val => this.setState({ Occupation: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Disability</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.Disability
                    ? this.state.Disability
                    : agent.Disability
                }
                onChange={val => this.setState({ Disability: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Amount Payable</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={
                  this.state.AmountPayable
                    ? this.state.AmountPayable
                    : agent.AmountPayable
                }
                onChange={val => this.setState({ AmountPayable: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Tax Year</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.TaxYear ? this.state.TaxYear : agent.TaxYear}
                onChange={val => this.setState({ TaxYear: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Property Address</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.PropertyAddress
                    ? this.state.PropertyAddress
                    : agent.PropertyAddress
                }
                onChange={val => this.setState({ PropertyAddress: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Property Amount</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={
                  this.state.PropertyAmount
                    ? this.state.PropertyAmount
                    : agent.PropertyAmount
                }
                onChange={val => this.setState({ PropertyAmount: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Property Number</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={
                  this.state.PropertyNumber
                    ? this.state.PropertyNumber
                    : agent.PropertyNumber
                }
                onChange={val => this.setState({ PropertyNumber: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Council Amount</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={
                  this.state.CouncilAmount
                    ? this.state.CouncilAmount
                    : agent.CouncilAmount
                }
                onChange={val => this.setState({ CouncilAmount: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Council Location</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.CouncilLocation
                    ? this.state.CouncilLocation
                    : agent.CouncilLocation
                }
                onChange={val => this.setState({ CouncilLocation: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Council Type</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.CouncilType
                    ? this.state.CouncilType
                    : agent.CouncilType
                }
                onChange={val => this.setState({ CouncilType: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Other Amount</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={
                  this.state.OtherAmount
                    ? this.state.OtherAmount
                    : agent.OtherAmount
                }
                onChange={val => this.setState({ OtherAmount: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Other Purpose</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.OtherPurpose
                    ? this.state.OtherPurpose
                    : agent.OtherPurpose
                }
                onChange={val => this.setState({ OtherPurpose: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Other Type</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.OtherType ? this.state.OtherType : agent.OtherType
                }
                onChange={val => this.setState({ OtherType: val })}
              />
            </div>
          </div>

          <div className="UserAgent-button">
            <div className="UserAgent-buttonItem">
              <Button label="Cancel" onClick={() => this.props.onCloseEdit()} />
            </div>
            <div className="UserAgent-buttonItem">
              <Button
                label="Save"
                onClick={() => this.onSave(agent.AgentId, agent.IdNumber)}
              />
            </div>
          </div>
        </div>
      )
    );
  }
  onEditRequest() {
    this.setState({ edit: false });
    this.props.onVerifyPassword(this.state.password);
  }
  render() {
    let client = {};
    _.map(this.props.agents, agents => {
      _.map(agents.Clients, i => {
        if (i.IdNumber === this.props.match.params.subAgentId) {
          i.AgentId = agents.idNumber;
          client = i;
        }
      });
    });
    client.Payments =
      client && client.Payments ? Object.keys(client.Payments).length : 0;

    return (
      <div className="UserAgent">
        <SideBar {...this.props} />
        <div className="UserAgent-info">
          <HeaderContainer />
          <div className="UserAgent-Body">
            {client
              ? this.props.user && this.props.user.isPassWordVerify
                ? this.renderUniqueAgentEdit(client)
                : this.renderUniqueAgents(client)
              : ""}
          </div>
          <Modal
            isOpen={this.state.edit}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.75)"
              },
              content: {
                position: "absolute",
                top: "25%",
                left: "30%",
                right: "30%",
                bottom: "25%",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                display: "flex",
                alignItems: "center",
                padding: "20px"
              }
            }}
            closeTimeoutMS={3}
            contentLabel="Modal"
          >
            <div className="Modal">
              <p className="Modal-heading">Please Enter Password Again</p>
              <div className="Modal-input">
                <Input
                  type="password"
                  value={this.state.password ? this.state.password : ""}
                  onChange={password => this.setState({ password })}
                />
              </div>
              <div className="Modal-buttonWraper">
                <div className="Modal-button">
                  <Button label="Submit" onClick={() => this.onEditRequest()} />
                </div>
                <div className="Modal-button">
                  <Button
                    label="Cancel"
                    backgroundColor="#f44336"
                    onClick={() => this.setState({ edit: false })}
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}
