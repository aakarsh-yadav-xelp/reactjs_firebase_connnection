import React from "react";
import "./css/Payment.css";
import _ from "lodash";
import SideBar from "./sideBar";
import Header from "./header";
import { convertDateStringToTimeAgoFromNow } from "../dbUtils/timeUtils";

export default class Payment extends React.Component {
  renderUniquePayments(payment) {
    return (
      <div
        className="Payment-Item"
        key={payment.id}
        onClick={() => this.props.history.push(`/payment/${payment.clientId}`)}
      >
        <div className="Payment-ItemName">{payment.name}</div>
        <div className="Payment-ItemClientId"> {payment.clientId}</div>
        <div className="Payment-ItemAgentId">{payment.agentId}</div>
        <div className="Payment-ItemAmountPayable">{payment.amountPayable}</div>
        <div className="Payment-ItemAmountPaid">{payment.amountPaid}</div>
        <div className="Payment-ItemBalance">{payment.balance}</div>
      </div>
    );
  }

  render() {
    let payments = [];
    let { agents } = this.props;
    _.map(agents, agent => {
      if (agent.Clients) {
        _.map(agent.Clients, client => {
          if (client.Payments) {
            let totalPaid = 0,
              balance,
              totalPayable = 0;

            _.mapValues(client.Payments, payment => {
              totalPaid += parseInt(payment.lastAmountPaid);
              balance = payment.balance;
            });
            payments.push({
              clientId: client.IdNumber,
              agentId: agent.idNumber,
              name: client.Name,
              mobile: client.Mobile,
              amountPaid: totalPaid,
              amountPayable: client.AmountPayable,
              balance
            });
          }
        });
      }
    });
    return (
      <div className="Payment">
        <SideBar {...this.props} />
        <div className="Payment-List">
          <Header {...this.props} />
          <div className="Payment-graphs-Body">
            <div className="Payment-ListHeader">
              <div className="Payment-ItemHeaderName">Name</div>
              <div className="Payment-ItemHeaderClientId">Client Id</div>
              <div className="Payment-ItemHeaderAgentId">AgentId</div>
              <div className="Payment-ItemHeaderAmountPayable">
                Total Payable
              </div>
              <div className="Payment-ItemHeaderAmountPaid">Total Paid</div>
              <div className="Payment-ItemHeaderBalance">Balance</div>
            </div>
            {payments &&
              payments.map(payment => {
                return this.renderUniquePayments(payment);
              })}
          </div>
        </div>
      </div>
    );
  }
}
