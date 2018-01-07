import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  // LineChart,
  // Line,
  PieChart,
  Pie
} from "recharts";
import moment from "moment";
import HeaderContainer from "../containers/headerContainer";
import _ from "lodash";
import SideBar from "./sideBar";
import "./css/PaymentsGraph.css";
export default class PaymentsGraph extends React.Component {
  filter(payments) {
    return payments.slice(0, 5);
  }
  renderPieChart(totalCouncilAmount, totalPropertyAmount, totalOtherAmount) {
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
    let data = [
      { name: "Group A", value: totalCouncilAmount },
      { name: "Group B", value: totalPropertyAmount },
      { name: "Group C", value: totalOtherAmount }
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return (
      <div className="PaymentGraph-graphWraper">
        <div className="PaymentGraph-graph">
          <PieChart width={300} height={235} onMouseEnter={this.onPieEnter}>
            <Pie
              data={data}
              cx={150}
              cy={100}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="PaymentGraph-graphWraperIndicatore">
          <div className="PaymentGraph-graphWraperIndicatore-1">
            Council Amount
          </div>
          <div className="PaymentGraph-graphWraperIndicatore-2">
            Property Amount
          </div>
          <div className="PaymentGraph-graphWraperIndicatore-3">
            Other Amount
          </div>
        </div>
      </div>
    );
  }
  render() {
    let nameAndPayable = [],
      nameAndPaid = [],
      graphPayments,
      allPayment = [];

    let payments = [];
    console.log(this.props.agents);
    _.map(this.props.agents, agents => {
      if (agents.Clients) {
        _.map(agents.Clients, client => {
          allPayment.push({
            name: client.Name,
            AmountPayable: client.AmountPayable,
            amountPaid: client.Payments,
            CouncilAmount: client.CouncilAmount,
            PropertyAmount: client.PropertyAmount,
            OtherAmount: client.OtherAmount
          });
          if (client.Payments) {
            let totalPaidByClient = 0;
            _.map(client.Payments, pay => {
              totalPaidByClient = +pay.lastAmountPaid;
            });
            payments.push({
              lastAmountPaid: totalPaidByClient,
              name: client.Name,
              AmountPayable: client.AmountPayable
            });
          }
        });
      }
    });
    if (!_.isEmpty(payments)) {
      graphPayments = this.filter(payments);
      _.map(payments, payment => {
        return (
          (payment.amountPaid = parseInt(payment.lastAmountPaid)),
          (payment.amountPayable = parseInt(payment.AmountPayable)),
          (payment.balance =
            parseInt(payment.AmountPayable) - parseInt(payment.lastAmountPaid)),
          (payment.name =
            payment.name.length < 6
              ? payment.name
              : `${payment.name.substring(0, 5)}...`),
          (payment.date = moment(moment(payment.paymentTime).format()).format(
            "DD-MM-YYYY"
          ))
        );
      });
      _.map(graphPayments, payment => {
        nameAndPayable.push({ name: payment.name, value: payment.amountPaid });
        nameAndPaid.push({ name: payment.name, value: payment.amountPaid });
      });
    }
    let totalCouncilAmount = _.sumBy(allPayment, pay =>
      parseInt(pay.CouncilAmount)
    );
    let totalPropertyAmount = _.sumBy(allPayment, pay =>
      parseInt(pay.PropertyAmount)
    );
    let totalOtherAmount = _.sumBy(allPayment, pay =>
      parseInt(pay.OtherAmount)
    );
    let totalPayable = _.sumBy(allPayment, pay => parseInt(pay.AmountPayable));
    let totlaPaidArr = [];
    _.map(allPayment, pay => {
      _.map(_.toArray(pay.amountPaid), item => totlaPaidArr.push(item));
    });
    let totalPaid = _.sumBy(totlaPaidArr, pay => parseInt(pay.lastAmountPaid));
    let totalPaidLastDay = _.sumBy(totlaPaidArr, pay => {
      if (
        moment(pay.paymentTime).format() >
        moment()
          .subtract(1, "days")
          .format()
      )
        return parseInt(pay.lastAmountPaid);
      else return 0;
    });

    let totalPaidLastWeek = _.sumBy(totlaPaidArr, pay => {
      if (
        moment(pay.paymentTime).format() >
        moment()
          .subtract(7, "days")
          .format()
      )
        return parseInt(pay.lastAmountPaid);
      else return 0;
    });

    let totalPaidLastMonth = _.sumBy(totlaPaidArr, pay => {
      if (
        moment(pay.paymentTime).format() >
        moment()
          .subtract(30, "days")
          .format()
      )
        return parseInt(pay.lastAmountPaid);
      else return 0;
    });

    return (
      <div className="PaymentsGraph">
        <SideBar {...this.props} />
        <div className="PaymentGraph-graphs">
          <HeaderContainer />
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
                      GHS {totalPayable}
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
                      GHS {totalPaid}
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
                      GHS {totalPayable - totalPaid}
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
                  data={graphPayments}
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
                      Total Payable(last day)
                    </div>
                    <div className="PaymentGraph-totalBal-value-labelMoney">
                      GHS {totalPayable}
                    </div>
                  </div>
                </div>
              </div>
              <div className="PaymentGraph-totalBal-item">
                <div className="PaymentGraph-totalBal-label1" />
                <div className="PaymentGraph-totalBal-value">
                  <div>
                    <div className="PaymentGraph-totalBal-value-label">
                      Total Paid(last day)
                    </div>
                    <div className="PaymentGraph-totalBal-value-labelMoney">
                      GHS {totalPaidLastDay}
                    </div>
                  </div>
                </div>
              </div>
              <div className="PaymentGraph-totalBal-item">
                <div className="PaymentGraph-totalBal-label2" />
                <div className="PaymentGraph-totalBal-value">
                  <div>
                    <div className="PaymentGraph-totalBal-value-label">
                      Total Balance(last day)
                    </div>
                    <div className="PaymentGraph-totalBal-value-labelMoney">
                      GHS {totalPayable - totalPaidLastDay}
                    </div>
                  </div>
                </div>
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
                      GHS {totalPayable}
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
                      GHS {totalPaidLastWeek}
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
                      GHS {totalPayable - totalPaidLastWeek}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="PaymentGraph-totalBal">
              <div className="PaymentGraph-totalBal-item">
                <div className="PaymentGraph-totalBal-label" />
                <div className="PaymentGraph-totalBal-value">
                  <div>
                    <div className="PaymentGraph-totalBal-value-label">
                      Total Payable(last month)
                    </div>
                    <div className="PaymentGraph-totalBal-value-labelMoney">
                      GHS {totalPayable}
                    </div>
                  </div>
                </div>
              </div>
              <div className="PaymentGraph-totalBal-item">
                <div className="PaymentGraph-totalBal-label1" />
                <div className="PaymentGraph-totalBal-value">
                  <div>
                    <div className="PaymentGraph-totalBal-value-label">
                      Total Paid(last month)
                    </div>
                    <div className="PaymentGraph-totalBal-value-labelMoney">
                      GHS {totalPaidLastMonth}
                    </div>
                  </div>
                </div>
              </div>
              <div className="PaymentGraph-totalBal-item">
                <div className="PaymentGraph-totalBal-label2" />
                <div className="PaymentGraph-totalBal-value">
                  <div>
                    <div className="PaymentGraph-totalBal-value-label">
                      Total Balance(last month)
                    </div>
                    <div className="PaymentGraph-totalBal-value-labelMoney">
                      GHS {totalPayable - totalPaidLastMonth}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="PaymentGraph-totalOther">Tax Category Summary</div>
            <div className="PaymentGraph-totalOther">
              <div className="PaymentGraph-totalOtherAmount">
                <div className="PaymentGraph-totalBal-Otheritem">
                  <div className="PaymentGraph-totalBal-label" />
                  <div className="PaymentGraph-totalBal-value">
                    <div>
                      <div className="PaymentGraph-totalBal-value-label">
                        Total Council Amount
                      </div>
                      <div className="PaymentGraph-totalBal-value-labelMoney">
                        GHS {totalCouncilAmount}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="PaymentGraph-totalBal-Otheritem">
                  <div className="PaymentGraph-totalBal-labelOut" />
                  <div className="PaymentGraph-totalBal-value">
                    <div>
                      <div className="PaymentGraph-totalBal-value-label">
                        Total Property Amount
                      </div>
                      <div className="PaymentGraph-totalBal-value-labelMoney">
                        GHS {totalPropertyAmount}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="PaymentGraph-totalBal-Otheritem">
                  <div className="PaymentGraph-totalBal-label" />
                  <div className="PaymentGraph-totalBal-value">
                    <div>
                      <div className="PaymentGraph-totalBal-value-label">
                        Total Other Amount
                      </div>
                      <div className="PaymentGraph-totalBal-value-labelMoney">
                        GHS {totalOtherAmount}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="PaymentGraph-totalOtherGraphs">
                <div className="PaymentGraph-header">Graph of transactions</div>
                {this.renderPieChart(
                  totalCouncilAmount,
                  totalPropertyAmount,
                  totalOtherAmount
                )}
              </div>
            </div>

            {/* <div className="PaymentGraph-graphsItem">
              <div>
                <div className="PaymentGraph-header">Graph of transactions</div>
                <LineChart
                  width={600}
                  height={300}
                  data={graphPayments}
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
