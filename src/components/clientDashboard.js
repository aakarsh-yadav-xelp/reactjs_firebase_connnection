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
    console.log(agent);
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
                value={this.state.name ? this.state.name : agent.name}
                onChange={val => this.setState({ name: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Date Of Birth</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="date"
                value={this.state.dob ? this.state.dob : agent.dob}
                onChange={val => this.setState({ dob: val })}
              />
            </div>
          </div>

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
            <div className="UserAgent-ItemAgeLabel">Gender</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={this.state.gender ? this.state.gender : agent.gender}
                onChange={val => this.setState({ gender: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Location</div>
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
            <div className="UserAgent-ItemAgeLabel">Mobile</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.mobile ? this.state.mobile : agent.mobile}
                onChange={val => this.setState({ mobile: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Occupation</div>
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
            <div className="UserAgent-ItemAgeLabel">Disability</div>
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
            <div className="UserAgent-ItemAgeLabel">Amount Payable</div>
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
            <div className="UserAgent-ItemAgeLabel">Tax Year</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.taxYear ? this.state.taxYear : agent.taxYear}
                onChange={val => this.setState({ taxYear: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Property Address</div>
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
            <div className="UserAgent-ItemAgeLabel">Property Amount</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.pAmount ? this.state.pAmount : agent.pAmount}
                onChange={val => this.setState({ pAmount: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Property Number</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.pNumber ? this.state.pNumber : agent.pNumber}
                onChange={val => this.setState({ pNumber: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Council Amount</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.cAmount ? this.state.cAmount : agent.cAmount}
                onChange={val => this.setState({ cAmount: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Council Location</div>
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
            <div className="UserAgent-ItemAgeLabel">Council Type</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={this.state.cType ? this.state.cType : agent.cType}
                onChange={val => this.setState({ cType: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Other Amount</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                type="number"
                value={this.state.oAmount ? this.state.oAmount : agent.oAmount}
                onChange={val => this.setState({ oAmount: val })}
              />
            </div>
          </div>

          <div className="UserAgent-ItemAge">
            <div className="UserAgent-ItemAgeLabel">Other Purpose</div>
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
            <div className="UserAgent-ItemAgeLabel">Other Type</div>
            <div className="UserAgent-ItemAgeValue">
              <Input
                value={this.state.oType ? this.state.oType : agent.oType}
                onChange={val => this.setState({ oType: val })}
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
