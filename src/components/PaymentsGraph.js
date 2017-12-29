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
  Line,
  PieChart,
  Pie
} from "recharts";
import moment from "moment";
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
    let nameAndPayable = [],
      nameAndPaid = [],
      nameAndBalance = [];
    let { payments } = this.props;
    _.map(payments, payment => {
      return (
        (payment.amountPaid = parseInt(payment.amountPaid)),
        (payment.amountPayable = parseInt(payment.amountPayable)),
        (payment.balance = parseInt(payment.balance)),
        (payment.name =
          payment.name.length < 6
            ? payment.name
            : `${payment.name.substring(0, 3)}...`),
        (payment.date = moment(payment.time).format("DD-MM-YYYY"))
      );
    });
    _.map(payments, payment => {
      nameAndPayable.push({ name: payment.name, value: payment.amountPaid });
      nameAndPaid.push({ name: payment.name, value: payment.amountPaid });
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
                      Total Paid
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
            <div className="PaymentGraph-graphsItems">
              <div className="PaymentGraph-graphsItem-graph1">
                <div className="PaymentGraph-header">
                  Graph of transactions per client
                </div>
                <BarChart
                  width={500}
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
              <div className="PaymentGraph-graphsItem-graph2">
                helo
                <PieChart width={350} height={350}>
                  <Pie
                    data={nameAndPayable}
                    cx={175}
                    cy={175}
                    outerRadius={70}
                    fill="#8884d8"
                  />
                  <Pie
                    data={nameAndPaid}
                    cx={175}
                    cy={175}
                    innerRadius={90}
                    outerRadius={120}
                    fill="#82ca9d"
                    label
                  />
                </PieChart>
              </div>
            </div>
            <div className="PaymentGraph-totalBal">
              <div className="PaymentGraph-totalBal-item">
                <div className="PaymentGraph-totalBal-label" />
                <div className="PaymentGraph-totalBal-value">
                  <div>
                    <div className="PaymentGraph-totalBal-value-label">
                      Total Payable(last week)
                    </div>
                    <div className="PaymentGraph-totalBal-value-labelMoney">
                      GHS{" "}
                      {_.sumBy(payments, payment => {
                        if (
                          payment.date >
                          moment()
                            .subtract(7, "d")
                            .format("DD-MM-YYYY")
                        )
                          return payment.amountPayable;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="PaymentGraph-totalBal-item">
                <div className="PaymentGraph-totalBal-label1" />
                <div className="PaymentGraph-totalBal-value">
                  <div>
                    <div className="PaymentGraph-totalBal-value-label">
                      Total Paid(last week)
                    </div>
                    <div className="PaymentGraph-totalBal-value-labelMoney">
                      GHS{" "}
                      {_.sumBy(payments, payment => {
                        if (
                          payment.date >
                          moment()
                            .subtract(7, "d")
                            .format("DD-MM-YYYY")
                        )
                          return payment.amountPaid;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="PaymentGraph-totalBal-item">
                <div className="PaymentGraph-totalBal-label2" />
                <div className="PaymentGraph-totalBal-value">
                  <div>
                    <div className="PaymentGraph-totalBal-value-label">
                      Total Balance(last week)
                    </div>
                    <div className="PaymentGraph-totalBal-value-labelMoney">
                      GHS{" "}
                      {_.sumBy(payments, payment => {
                        if (
                          payment.date >
                          moment()
                            .subtract(7, "d")
                            .format("DD-MM-YYYY")
                        )
                          return payment.balance;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="PaymentGraph-graphsItem">
              <div>
                <div className="PaymentGraph-header">Graph of transactions</div>
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
