import React from "react";
import Utility from "../extensions/Utility";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";

function AccountInfo(props) {
  if (!props) {
    props = {};
  }

  let info = { ...props.accountInfo };

  const handlePotentialNull = value => {
    return !value ? "N/A" : value;
  };

  const getSliderClassName = () => {
    const pct = info.callsThisMonth / info.callsPerMonth;

    if (pct === 0) {
      return "slider-excellent";
    }

    if (!pct) {
      return "slider";
    }

    if (pct > 0.93) {
      return "slider-uh-oh";
    }

    if (pct > 0.85) {
      return "slider-critical";
    }

    if (pct > 0.75) {
      return "slider-strong-warn";
    }

    if (pct > 0.5) {
      return "slider-moderate";
    }

    if (pct > 0.25) {
      return "slider-good";
    }

    return "slider-excellent";
  };

  return (
    <div>
      <div hidden={!info.accountLocked}>
        <h3 className="error">
          You have used up all of your API calls for the month. Please{" "}
          <Link to="/contact">contact support</Link>
        </h3>
      </div>
      <table>
        <tbody>
          <tr className="row">
            <td className="left-column">API Token:</td>
            <td>
              <label>{info.apiToken}</label>
            </td>
          </tr>
          <tr className="row">
            <td className="left-column">First Name:</td>
            <td>
              <label>{handlePotentialNull(info.firstName)}</label>
            </td>
          </tr>
          <tr className="row">
            <td className="left-column">Last Name:</td>
            <td>
              <label>{handlePotentialNull(info.lastName)}</label>
            </td>
          </tr>
          <tr className="row">
            <td className="left-column">Email Address:</td>
            <td>
              <label>{info.email}</label>
            </td>
          </tr>
          <tr className="row">
            <td className="left-column">Calls Per Month:</td>
            <td>
              <label>{Utility.formatNumber(info.callsPerMonth, 0)}</label>
            </td>
          </tr>
          <tr className="row">
            <td className="left-column">Price Per Month:</td>
            <td>
              <label>{Utility.formatMoney(info.pricePerMonth)}</label>
            </td>
          </tr>
          <tr className="row">
            <td className="left-column">Credit Card Number:</td>
            <td>
              <label>{handlePotentialNull(info.creditCardNumber)}</label>
            </td>
          </tr>
          <tr className="row">
            <td className="left-column">Account Type:</td>
            <td>
              <label>{info.accountType}</label>
            </td>
          </tr>
          <tr className="row">
            <td className="left-column">Usage:</td>
            <td>
              <Slider
                className={getSliderClassName()}
                disabled={true}
                min={0}
                max={info.callsPerMonth}
                value={info.callsThisMonth}
              />
            </td>
          </tr>
          <tr className="row">
            <td />
            <td>
              <label>
                You have used up {Utility.formatNumber(info.callsThisMonth, 0)}{" "}
                {info.callsThisMonth > 1 ? "calls" : "call"} out of{" "}
                {Utility.formatNumber(info.callsPerMonth, 0)} so far this month.
                You have{" "}
                {Utility.formatNumber(
                  info.callsPerMonth - info.callsThisMonth,
                  0
                )}{" "}
                {info.callsPerMonth - info.callsThisMonth > 1
                  ? "calls"
                  : "call"}{" "}
                left for the next {Utility.getDaysLeftInMonth()} days.
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AccountInfo;
