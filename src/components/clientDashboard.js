import React from "react";
import _ from "lodash";
import "./css/clientDashboard.css";
import Button from "./button";
import SideBar from "./sideBar";
import classNames from "classnames";
import Header from "./header";
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
  renderUniqueAgents(agent) {
    return (
      <div className="UserAgent-Item" key={agent.idNumber}>
        <div className="UserAgent-ItemHeader">Client Info</div>
        {_.toPairs(agent).map((item, index) => {
          return (
            <div className="UserAgent-ItemAge" key={index}>
              <div className="UserAgent-ItemAgeLabel">{item[0]}</div>
              <div className="UserAgent-ItemAgeValue">{item[1]}</div>
            </div>
          );
        })}
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
    let agentId = `${this.props.match.params.agentId}/${this.props.match.params
      .subAgentId}`;
    return (
      agent.IdNumber === this.props.match.params.subAgentId && (
        <div className="UserAgent-Item" key={agent.idNumber}>
          <div className="UserAgent-ItemHeader">Client Info</div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Age</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.age ? this.state.age : agent.age}
                onChange={val => this.setState({ age: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">name</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={this.state.name ? this.state.name : agent.name}
                onChange={val => this.setState({ name: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">amountPayable</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={
                  this.state.amountPayable
                    ? this.state.amountPayable
                    : agent.amountPayable
                }
                onChange={val => this.setState({ amountPayable: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">balance</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.balance ? this.state.balance : agent.balance}
                onChange={val => this.setState({ balance: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">cAmount</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.cAmount ? this.state.cAmount : agent.cAmount}
                onChange={val => this.setState({ cAmount: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">cLocation</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.cLocation ? this.state.cLocation : agent.cLocation
                }
                onChange={val => this.setState({ cLocation: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">cType</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={this.state.cType ? this.state.cType : agent.cType}
                onChange={val => this.setState({ cType: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">date</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="date"
                value={this.state.date ? this.state.date : agent.date}
                onChange={val => this.setState({ date: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">disability</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.disability
                    ? this.state.disability
                    : agent.disability
                }
                onChange={val => this.setState({ disability: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">discount</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.discount ? this.state.discount : agent.discount
                }
                onChange={val => this.setState({ discount: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">dob</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="date"
                value={this.state.dob ? this.state.dob : agent.dob}
                onChange={val => this.setState({ dob: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">gender</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={this.state.gender ? this.state.gender : agent.gender}
                onChange={val => this.setState({ gender: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">lastAmountPaid</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={
                  this.state.lastAmountPaid
                    ? this.state.lastAmountPaid
                    : agent.lastAmountPaid
                }
                onChange={val => this.setState({ lastAmountPaid: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">location</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.location ? this.state.location : agent.location
                }
                onChange={val => this.setState({ location: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">mobile</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.mobile ? this.state.mobile : agent.mobile}
                onChange={val => this.setState({ mobile: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">oAmount</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.oAmount ? this.state.oAmount : agent.oAmount}
                onChange={val => this.setState({ oAmount: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">oPurpose</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.oPurpose ? this.state.oPurpose : agent.oPurpose
                }
                onChange={val => this.setState({ oPurpose: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">oType</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={this.state.oType ? this.state.oType : agent.oType}
                onChange={val => this.setState({ oType: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">occupation</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.occupation
                    ? this.state.occupation
                    : agent.occupation
                }
                onChange={val => this.setState({ occupation: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">pAmount</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.pAmount ? this.state.pAmount : agent.pAmount}
                onChange={val => this.setState({ pAmount: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">pLocation</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.pLocation ? this.state.pLocation : agent.pLocation
                }
                onChange={val => this.setState({ pLocation: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">pNumber</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.pNumber ? this.state.pNumber : agent.pNumber}
                onChange={val => this.setState({ pNumber: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">pType</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={this.state.pType ? this.state.pType : agent.pType}
                onChange={val => this.setState({ pType: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">paymentTime</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="date"
                value={
                  this.state.paymentTime
                    ? this.state.paymentTime
                    : agent.paymentTime
                }
                onChange={val => this.setState({ paymentTime: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">selectedOOption</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={
                  this.state.selectedOOption
                    ? this.state.selectedOOption
                    : agent.selectedOOption
                }
                onChange={val => this.setState({ selectedOOption: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">taxYear</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.taxYear ? this.state.taxYear : agent.taxYear}
                onChange={val => this.setState({ taxYear: val })}
              />
            </div>
          </div>
          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">totalPaid</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={
                  this.state.totalPaid ? this.state.totalPaid : agent.totalPaid
                }
                onChange={val => this.setState({ totalPaid: val })}
              />
            </div>
          </div>
          <div className="UserAgent-button">
            <div className="UserAgent-buttonItem">
              <Button
                label="Cancel"
                onClick={() => this.setState({ edit: false })}
              />
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
          <Header {...this.props} />
          <div className="UserAgent-Body">
            {client
              ? this.state.edit
                ? this.renderUniqueAgentEdit(client)
                : this.renderUniqueAgents(client)
              : ""}
          </div>
        </div>
      </div>
    );
  }
}
