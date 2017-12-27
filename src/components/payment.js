import React from "react";
import "./css/Payment.css";
import _ from "lodash";
import classNames from "classnames";
import Icon from "./Icon";
import UserIcon from "./img/user.svg";
import MoneyIcon from "./img/money.svg";
import { convertDateStringToTimeAgoFromNow } from "../dbUtils/timeUtils";

export default class Payment extends React.Component {
  renderUniquePayments(payment) {
    return (
      <div className="Payment-Item" key={payment.id}>
        <div className="Payment-ItemAge">{payment.name}</div>
        <div className="Payment-ItemIdNumber"> {payment.amountPaid}</div>
        <div className="Payment-ItemMobile">{payment.balance}</div>
        <div className="Payment-ItemGender">{payment.totalPaid}</div>

        <div className="Payment-ItemSelectedOption">
          {payment.amountPayable}
        </div>
        <div className="Payment-ItemOAmount">
          {convertDateStringToTimeAgoFromNow(payment.time)}
        </div>
      </div>
    );
  }

  render() {
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
    let payments = this.props.payments;

    return (
      <div className="Payment">
        <div className="Payment-tab">
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
          <div
            className={classForThird}
            onClick={() => this.props.history.push("/paymentgraph")}
          >
            <Icon image={MoneyIcon} />PaymentGraph
          </div>
        </div>
        <div className="Payment-List">
          <div className="Payment-ListHeader">
            <div className="Payment-ItemHeaderAge">Name</div>
            <div className="Payment-ItemHeaderIdNumber">AmountPaid</div>
            <div className="Payment-ItemHeaderMobile">Balance</div>
            <div className="Payment-ItemHeaderGender">TotalPaid</div>
            <div className="Payment-ItemHeaderSelectedOption">
              amountPayable
            </div>
            <div className="Payment-ItemHeaderOAmount">Time</div>
          </div>
          {payments &&
            payments.map(payment => {
              return this.renderUniquePayments(payment);
            })}
        </div>
      </div>
    );
  }
}
