import React, { Component } from 'react';
import Utility from '../extensions/Utility';
import Validation from '../extensions/Validation';

const _passwordLength = 8;
let _typingTimeout = null;

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordLabelText: null,
      passwordLabelClass: null,
      password: null
    };
  }

  updatePasswordStatus = () => {
    _typingTimeout = Utility.doWithDelay(
      () => {
        let password = this.state.password;

        //don't display any user prompts if they haven't even started to enter a password yet
        if (!password) {
          this.setState({
            passwordLabelText: "",
            passwordLabelClass: ""
          });
          return;
        }

        let passwordState = this.getPasswordStatus();

        if (!passwordState.hasOkLength) {
          this.setState({
            passwordLabelText:
              "Password must be at least " +
              _passwordLength +
              " characters long",
            passwordLabelClass: "password-error"
          });
          return;
        }

        if (!passwordState.hasNumber && !passwordState.hasSpecialCharacter) {
          this.setState({
            passwordLabelText:
              "Weak: password should have at least 1 number and 1 special character",
            passwordLabelClass: "password-weak"
          });
          return;
        }

        if (!passwordState.hasNumber) {
          this.setState({
            passwordLabelText:
              "Moderate: password should have at least 1 number",
            passwordLabelClass: "password-moderate"
          });
          return;
        }

        if (!passwordState.hasSpecialCharacter) {
          this.setState({
            passwordLabelText:
              "Moderate: password should contain at least 1 special character",
            passwordLabelClass: "password-moderate"
          });
          return;
        }

        this.setState({
          passwordLabelText: "Excellent password choice!",
          passwordLabelClass: "password-ok"
        });
      },
      _typingTimeout,
      500
    );
  };

  getPasswordStatus = () => {
    const returnVal = {
      hasOkLength: false,
      hasNumber: false,
      hasSpecialCharacter: false
    };

    let password = this.state.password;

    if (!password) {
      return returnVal;
    }

    if (password.length >= _passwordLength) {
      returnVal.hasOkLength = true;
    }

    if (Validation.hasNumber(password)) {
      returnVal.hasNumber = true;
    }

    if (Validation.hasSpecialCharacter(password)) {
      returnVal.hasSpecialCharacter = true;
    }

    return returnVal;
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });

    this.updatePasswordStatus();
    this.props.onChange(e);
  };

  render() {
    return (
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="form-input"
          id="password"
          type="password"
          placeholder="Your password..."
          onChange={this.handlePasswordChange}
        />
        <div className="password-label">
          <label className={"password-label " + this.state.passwordLabelClass}>
            {this.state.passwordLabelText}
          </label>
        </div>
      </div>
    );
  }
}

export default PasswordInput;
