import React, { Component } from "react";
import Note from "../widgets/Note";
import Signup from "../widgets/Signup";
import { NavLink, Link } from "react-router-dom";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocking: false
    };
  }

  onSignupSubmitFinish = response => {
    NotificationManager.success("Your account was created successfully");
  };

  onSignupSubmitError = response => {
    NotificationManager.error(
      "Something went wrong while creating your account :("
    );
  };

  onUiBlock = e => {
    this.setState({
      blocking: e
    });
  };

  render() {
    return (
      <div>
        <BlockUi tag="div" blocking={this.state.blocking}>
          <h3>What is Cussbuster?</h3>
          <p>
            Cussbuster is an API that can be called programatically. You pass it
            a string of text and it will flag any inappropriate words. That's it! It
            is fast, secure, and efficient while still being very easy to use.
            Sign up for a free account below to get up and running immediately!
            Please visit our <NavLink to="/tutorial">tutorial</NavLink> once you
            have an account.
          </p>
          <h3>Focus on what is important to you</h3>
          <p>
            Tracking down every single bad word is an icky task.
            It involves aggregating every awful word people say into your own
            blacklist as well as keeping track of any new bad words as they are
            created. Leave this unenviable task up to us. We make understanding
            foul language our business so that you can focus on yours.
          </p>
          <Note symbol="💳" headerText="Hey!">
            Custom pricing and plans are available to meet your unique needs!
            Please <Link to="/contact">contact support</Link> for more
            information.
          </Note>
          <h4 className="italic">
            Already have an account? Sign in <Link to="/myaccount">here</Link>.
          </h4>
          <h3>Sign up for an account</h3>
          <Signup
            onSubmitFinish={this.onSignupSubmitFinish}
            onSubmitError={this.onSignupSubmitError}
            onUiBlock={this.onUiBlock}
          />
        </BlockUi>
        <NotificationContainer />
      </div>
    );
  }
}

export default Home;
