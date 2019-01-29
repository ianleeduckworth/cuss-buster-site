import React, { Component } from 'react';
import axios from 'axios';
import Utility from '../extensions/Utility';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitDisabled: true
    };
  }

  handleChange = e => {
    if (Utility.areAllPropsTruthy(this.props.signinInfo)) {
      this.setState({
        isSubmitDisabled: false
      });
    } else {
      this.setState({
        isSubmitDisabled: true
      });
    }

    this.props.signinInfo[e.target.id] = e.target.value;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onUiBlock(true);

    axios.post("http://api.local.cussbuster.com/v1/signin", this.props.signinInfo, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(data => {
        document.getElementById('signin-form').reset();
        this.props.onSubmitFinish(data)
      })
      .catch(data => this.props.onSubmitError(data))
      .finally(() => this.props.onUiBlock(false));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="signin-form">
          <label htmlFor="emailAddress">Email</label>
          <input
            className="form-input"
            id="emailAddress"
            type="text"
            placeholder="Your email address..."
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            id="password"
            type="password"
            placeholder="Your password..."
            onChange={this.handleChange}
          />
          <div className="padding-bottom" />
          <div>
            <button
              disabled={this.state.isSubmitDisabled}
              className="signup-button"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
