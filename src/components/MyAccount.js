import React, { Component } from "react";
import Signin from "../widgets/Signin";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import AccountInfo from "../widgets/AccountInfo";
import { connect } from "react-redux";
import reduxActions from "../staticData/reduxActions";
import { Link } from "react-router-dom";

class MyAccount extends Component {
  constructor(props) {
    super(props);

    let accountInfo = !props.accountInfo ? null : props.accountInfo;

    this.state = {
      blocking: false,
      accountInfo: accountInfo,
      signinInfo: {
        emailAddress: null,
        password: null
      }
    };
  }

  onSubmitFinish = e => {
    this.props.createAccountInfo(e.data);

    this.setState({
      accountInfo: e.data
    });
  };

  onSubmitError = e => {
    let status =
      e != null ? (e.response != null ? e.response.status : null) : null;

    if (status === 401 || status === 400) {
      NotificationManager.error(e.response.data);
      return;
    }

    NotificationManager.error("Something went wrong while signing in :(");
  };

  onUiBlock = e => {
    this.setState({
      blocking: e
    });
  };

  onSignOut = e => {
    this.props.deleteAccountInfo();
    this.setState({
      accountInfo: null,
      signinInfo: {
        emailAddress: null,
        password: null
      }
    });
  };

  render() {
    return (
      <div>
        <BlockUi tag="div" blocking={this.state.blocking}>
          <div hidden={!!this.state.accountInfo}>
            <h3>Sign in to your account</h3>
            <h4 className="italic">
              Don't have an account? Create one <Link to="/">here</Link>
            </h4>
            <Signin
              signinInfo={this.state.signinInfo}
              onSubmitFinish={this.onSubmitFinish}
              onSubmitError={this.onSubmitError}
              onUiBlock={this.onUiBlock}
            />
          </div>
          <div hidden={!this.state.accountInfo}>
            <h3>My Account</h3>
            <AccountInfo accountInfo={this.state.accountInfo} />
            <a onClick={this.onSignOut} className="italic standard">
              Sign Out
            </a>
          </div>
        </BlockUi>
        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accountInfo: state.accountInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createAccountInfo: accountInfo => {
      dispatch({
        type: reduxActions.ADD_ACCOUNT_INFO,
        accountInfo: accountInfo
      });
    },
    deleteAccountInfo: () => {
      dispatch({
        type: reduxActions.DELETE_ACCOUNT_INFO
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount);
