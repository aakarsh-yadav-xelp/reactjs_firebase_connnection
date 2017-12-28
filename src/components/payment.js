import React from "react";
import "./css/Payment.css";
import _ from "lodash";
import SideBar from "./sideBar";
import Header from "./header";
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
    let payments = this.props.payments;

    return (
      <div className="Payment">
        <SideBar {...this.props} />
        <div className="Payment-List">
          <Header {...this.props} />
          <div className="Payment-graphs-Body">
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
      </div>
    );
  }
}
