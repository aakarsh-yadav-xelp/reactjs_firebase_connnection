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
import Header from "./header";
import _ from "lodash";
import SideBar from "./sideBar";
import classNames from "classnames";
import Icon from "./Icon";
import UserIcon from "./img/user.svg";
import MoneyIcon from "./img/money.svg";
import "./css/PaymentsGraph.css";
export default class PaymentsGraph extends React.Component {
  render() {
    let { payments } = this.props;
    _.map(payments, payment => {
      return (
        (payment.amountPaid = parseInt(payment.amountPaid)),
        (payment.amountPayable = parseInt(payment.amountPayable)),
        (payment.balance = parseInt(payment.balance))
      );
    });

    return (
      <div className="PaymentsGraph">
        <SideBar {...this.props} />

        <div className="PaymentGraph-graphs">
          <Header {...this.props} />
          <div className="PaymentGraph-graphs-Body">
            <div className="PaymentGraph-totalBal">
              <div className="PaymentGraph-totalBal-item">
                <div className="PaymentGraph-totalBal-label" />
                <div className="PaymentGraph-totalBal-value">
                  <div>
                    <div className="PaymentGraph-totalBal-value-label">
                      Total Payable
                    </div>
                    <div className="PaymentGraph-totalBal-value-labelMoney">
                      GHS {_.sumBy(payments, pay => pay.amountPayable)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="PaymentGraph-totalBal-item">
                <div className="PaymentGraph-totalBal-label1" />
                <div className="PaymentGraph-totalBal-value">
                  <div>
                    <div className="PaymentGraph-totalBal-value-label">
                      Total Payable
                    </div>
                    <div className="PaymentGraph-totalBal-value-labelMoney">
                      GHS {_.sumBy(payments, pay => pay.amountPaid)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="PaymentGraph-totalBal-item">
                <div className="PaymentGraph-totalBal-label2" />
                <div className="PaymentGraph-totalBal-value">
                  <div>
                    <div className="PaymentGraph-totalBal-value-label">
                      Total Balance
                    </div>
                    <div className="PaymentGraph-totalBal-value-labelMoney">
                      GHS {_.sumBy(payments, pay => pay.balance)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="PaymentGraph-graphsItem">
              <div>
                <div className="PaymentGraph-header">
                  Graph of transactions per client
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
              </div>
            </div>
            <div className="PaymentGraph-graphsItem">
              <div>
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
          </div>
        </div>
      </div>
    );
  }
}
