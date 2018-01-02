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
    // let { payments } = this.props;
    // console.log(this.props.agents);
    let payments = [];
    _.map(this.props.agents, agents => {
      if (agents.Clients) {
        _.map(agents.Clients, client => {
          _.map(client.Payments && client.Payments, pay => {
            console.log(pay);
            payments.push({
              totalPaid: parseInt(pay.totalPaid),
              balance: parseInt(pay.balance),
              lastAmountPaid: parseInt(pay.lastAmountPaid),
              time: pay.paymentTime
            });
          });
        });
      }
    });
    console.log(payments);
    if (!_.isEmpty(payments)) {
      _.map(payments, payment => {
        return (
          (payment.amountPaid = parseInt(payment.balance)),
          (payment.amountPayable = parseInt(payment.lastAmountPaid)),
          (payment.balance = parseInt(payment.totalPaid)),
          // (payment.name =
          //   // payment.name.length < 6
          //   //   ? payment.name
          //   //   :
          //   `${payment.name.substring(0, 3)}...`),
          (payment.date = moment(payment.time).format("DD-MM-YYYY"))
        );
      });
      _.map(payments, payment => {
        nameAndPayable.push({ name: payment.name, value: payment.balance });
        nameAndPaid.push({ name: payment.name, value: payment.lastAmountPaid });
      });
    }

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
                      GHS {_.sumBy(payments, pay => pay.totalPaid)}
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
                      GHS {_.sumBy(payments, pay => pay.lastAmountPaid)}
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
                  <Bar dataKey="lastAmountPaid" fill="#F1785E" />
                  <Bar dataKey="totalPaid" fill="#795EF1" />
                  <Bar dataKey="balance" fill="#2BC891" />
                </BarChart>
              </div>
              <div className="PaymentGraph-graphsItem-graph2">
                <div className="PaymentGraph-header">
                  Pie Graph for all clients Payable v/s Paid
                </div>

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
                          return payment.totalPaid;
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
                          return payment.lastAmountPaid;
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
                    dataKey="balance"
                    stroke="#F1785E"
                    strokeDasharray="5 5"
                  />
                  <Line
                    type="monotone"
                    dataKey="totalPaid"
                    stroke="#82ca9d"
                    strokeDasharray="3 4 5 2"
                  />
                  <Line
                    type="monotone"
                    dataKey="lastAmountPaid"
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
