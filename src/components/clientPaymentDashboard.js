import React from "react";
import _ from "lodash";
import SideBar from "./sideBar";
import Header from "./header";
import { convertDateStringToTimeAgoFromNow } from "../dbUtils/timeUtils";
import "./css/clientPaymentDashboard.css";
export default class ClientPaymentDashboard extends React.Component {
  renderPayments(payment, index) {
    return (
      <div className="ClientPaymentDashboard-Item" key={index}>
        <div className="ClientPaymentDashboard-ItemName">{index + 1}</div>
        <div className="ClientPaymentDashboard-ItemClientId">
          {" "}
          {payment.lastAmountPaid}
        </div>
        <div className="ClientPaymentDashboard-ItemAmountPaid">
          {payment.totalPaid}
        </div>
        <div className="ClientPaymentDashboard-ItemAmountPayable">
          {payment.balance}
        </div>
        <div className="ClientPaymentDashboard-ItemBalance">
          {convertDateStringToTimeAgoFromNow(payment.paymentTime)}
        </div>
      </div>
    );
  }
  render() {
    let clientId = this.props.match.params.clientId;
    let payments = [],
      clientInfo;
    _.map(this.props.agents, agent => {
      if (agent.Clients) {
        _.map(agent.Clients, client => {
          if (client.IdNumber === clientId && client.Payments) {
            clientInfo = client;

            _.mapValues(client.Payments, payment => {
              payments.push(payment);
            });
          }
        });
      }
    });

    return (
      <div className="ClientPaymentDashboard">
        <SideBar {...this.props} />
        <div className="ClientPaymentDashboard-List">
          <Header {...this.props} />
          <div className="ClientPaymentDashboard-clientInfo">
            {clientInfo && clientInfo.Name}
            {clientInfo && clientInfo.AgentId}
          </div>
          <div className="ClientPaymentDashboard-graphs-Body">
            <div className="ClientPaymentDashboard-ListHeader">
              <div className="ClientPaymentDashboard-ItemHeaderSrNumber">
                Sr. Number
              </div>
              <div className="ClientPaymentDashboard-ItemHeaderLastAmountPaid">
                Last Amount Paid
              </div>
              <div className="ClientPaymentDashboard-ItemHeaderAmountPayable">
                Total Payable
              </div>
              <div className="ClientPaymentDashboard-ItemHeaderAmountPaid">
                Total Paid
              </div>
              <div className="ClientPaymentDashboard-ItemHeaderBalance">
                Time
              </div>
            </div>
            {payments &&
              payments.map((payment, index) => {
                return this.renderPayments(payment, index);
              })}
          </div>
        </div>
      </div>
    );
  }
}
