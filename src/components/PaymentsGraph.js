import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line
} from "recharts";
import _ from "lodash";
import classNames from "classnames";
import Icon from "./Icon";
import UserIcon from "./img/user.svg";
import MoneyIcon from "./img/money.svg";
import "./css/PaymentsGraph.css";
export default class PaymentsGraph extends React.Component {
  render() {
    console.log(this.props);
    let { payments } = this.props;
    _.map(payments, payment => {
      return (
        (payment.amountPaid = parseInt(payment.amountPaid)),
        (payment.amountPayable = parseInt(payment.amountPayable)),
        (payment.balance = parseInt(payment.balance))
      );
    });

    let { pathname } = this.props.location;

    let classForFirst = classNames("UserAgent-tabItem", {
      "UserAgent-tabItem-active": pathname === "/agents"
    });
    let classForSecond = classNames("UserAgent-tabItem", {
      "UserAgent-tabItem-active": pathname === "/payment"
    });
    let classForThird = classNames("UserDashboard-tabItem", {
      "UserDashboard-tabItem-active": pathname === "/paymentgraph"
    });
    return (
      <div className="PaymentsGraph">
        <div className="PaymentsGraph-tab">
          <div
            className={classForThird}
            onClick={() => this.props.history.push("/paymentgraph")}
          >
            <Icon image={MoneyIcon} />Home
          </div>
          <div
            className={classForFirst}
            onClick={() => this.props.history.push("/agents")}
          >
            <Icon image={UserIcon} />Clients List
          </div>
          <div
            className={classForSecond}
            onClick={() => this.props.history.push("/payment")}
          >
            <Icon image={MoneyIcon} />Payment
          </div>
        </div>
        <div className="PaymentGraph-graphs">
          <div className="PaymentGraph-totalBal">
            <div className="PaymentGraph-totalBal-item">
              <div className="PaymentGraph-totalBal-label">Total Payable</div>
              <div className="PaymentGraph-totalBal-value">
                GHS {_.sumBy(payments, pay => pay.amountPayable)}
              </div>
            </div>
            <div className="PaymentGraph-totalBal-item1">
              <div className="PaymentGraph-totalBal-label1">Total Paid</div>
              <div className="PaymentGraph-totalBal-value1">
                GHS {_.sumBy(payments, pay => pay.amountPaid)}
              </div>
            </div>
            <div className="PaymentGraph-totalBal-item2">
              <div className="PaymentGraph-totalBal-label2">Total Balance</div>
              <div className="PaymentGraph-totalBal-value2">
                GHS {_.sumBy(payments, pay => pay.balance)}
              </div>
            </div>
          </div>
          <div className="PaymentGraph-header">
            Graph of transations per client
          </div>
          <BarChart
            width={600}
            height={300}
            data={payments}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="amountPaid" fill="#F1785E" />
            <Bar dataKey="amountPayable" fill="#795EF1" />
            <Bar dataKey="balance" fill="#2BC891" />
          </BarChart>
          <div className="PaymentGraph-header">Graph of transations</div>
          <LineChart
            width={600}
            height={300}
            data={payments}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="amountPaid"
              stroke="#F1785E"
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="amountPayable"
              stroke="#82ca9d"
              strokeDasharray="3 4 5 2"
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#2BC891"
              strokeDasharray="3 4 5 2"
            />
          </LineChart>
        </div>
      </div>
    );
  }
}
