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
          <h2>CussBuster</h2>
          <h3>Take the bad words right out of their mouths</h3>
          <p>
            This might shock you, but some people say abusive and horrible
            things online. I know, it sounds crazy but it does happen sometimes.
            If you moderate user generated content, what are you to do to stop
            these hooligans? Aside from maintaining your own database of
            upsetting words you are pretty much powerless. Unil now...
          </p>
          <p>
            CussBuster is an API that can be called programatically. You pass it
            a string of text and it will flag any naughty words. That's it! It
            is fast and efficient while still being very easy to use.
            Additionally, CussBuster has a filty mind and has heard all the
            dirty words. When you use CussBuster you do not worry about having
            to stay up to date with all the awful new ways people come up with
            to curse. Let us handle that for you. Please visit our{" "}
            <NavLink to="/tutorial">tutorial</NavLink> to get up and running.
          </p>
          <Note>
            This should go without saying, but since we need to demonstrate how
            CussBuster works, our tutorials and documentation contain profanity
            and other offensive words
          </Note>
          <div className="padding-bottom" />
          <Note symbol="💳" headerText="Hey!">
            Custom pricing and plans are available to meet your unique needs!
            Please <Link to="/contact">contact support</Link> for more
            information
          </Note>
          <h4 className="italic">
            Already have an account? Sign in <Link to="/myaccount">here</Link>.
          </h4>
          <h3>Sign Up for an Account</h3>
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
