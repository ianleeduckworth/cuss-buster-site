import React, { Component } from 'react';
import CreditCardInput from 'react-credit-card-input';
import { RegionDropdown } from 'react-country-region-selector';
import axios from 'axios';
import Select from 'react-select';
import Utility from '../extensions/Utility';
import PasswordInput from '../widgets/PasswordInput';

const _freePricingTierId = 1;

const pricingTiers = [
  {
    label: "Free",
    value: 1
  },
  {
    label: "Standard",
    value: 2
  },
  {
    label: "Premium",
    value: 3
  }
];

const pricingTierText = [
  {
    label:
      "Free accounts do not cost anything and you do not have to enter any credit card information!  However, they are limited to 250 API calls per month",
    value: 1
  },
  {
    label:
      "Standard accounts cost $25 per month and you must enter credit card information to sign up.  You get 10,000 calls per month",
    value: 2
  },
  {
    label:
      "Premium accounts cost $50 per month and you must enter credit card information to sign up.  You get 100,000 calls per month",
    value: 3
  }
];

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: undefined,
      zipCode: null,
      emailAddress: null,
      creditCardNumber: null,
      creditCardExpirationDate: null,
      creditCardCvcCode: null,
      password: null,
      pricingTierId: _freePricingTierId
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleCreditCardNumberChange = e => {
    this.setState({
      creditCardNumber: Utility.removeSpaces(e.target.value)
    });
  };

  handleCardExpiryChange = e => {
    this.setState({
      creditCardExpirationDate: Utility.removeSpaces(e.target.value)
    });
  };

  handleCardCVCChange = e => {
    this.setState({
      creditCardCvcCode: e.target.value
    });
  };

  handleRegionDropdownChange = e => {
    this.setState({
      state: e
    });
  };

  handlePricingTierChange = e => {
    this.setState({
      pricingTierId: e.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onUiBlock(true);

    axios.post("http://api.local.cussbuster.com/v1/webPage", this.state, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(data => this.props.onSubmitFinish(data))
      .catch(data => this.props.onSubmitError(data))
      .finally(() => this.props.onUiBlock(false));
  };

  isSignupButtonDisabled = () => {
    //if the user hasn't entered a valid password, then return true right away
    if (!this.state.password || this.state.password.length < 8) {
      return true;
    }

    //if the user has selected a free account, only validate the email and password fields
    if (this.state.pricingTierId === _freePricingTierId) {
      return !Utility.areAllPropsTruthy({
        email: this.state.emailAddress,
        password: this.state.password
      });
    }

    //at this point the user has selected a paid account.  Validate all fields
    return !Utility.areAllPropsTruthy(this.state, ["addressLine2"]);
  };

  renderPayFields = () => {
    if (this.state.pricingTierId !== _freePricingTierId) {
      return (
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            className="form-input"
            id="firstName"
            type="text"
            placeholder="Your first name..."
            onChange={this.handleChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            className="form-input"
            id="lastName"
            type="text"
            placeholder="Your last name..."
            onChange={this.handleChange}
          />

          <label htmlFor="addressLine1">Address Line 1</label>
          <input
            className="form-input"
            id="addressLine1"
            type="text"
            placeholder="First line of your address here..."
            onChange={this.handleChange}
          />

          <label htmlFor="addressLine2">Address Line 2</label>
          <input
            className="form-input"
            id="addressLine2"
            type="text"
            placeholder="Second line of your address here..."
            onChange={this.handleChange}
          />

          <label htmlFor="city">City</label>
          <input
            className="form-input"
            id="city"
            type="text"
            placeholder="Your city..."
            onChange={this.handleChange}
          />

          <label htmlFor="regionDropdown">State</label>
          <RegionDropdown
            classes="form-input"
            countryValueType="short"
            valueType="short"
            country="US"
            value={this.state.state}
            onChange={this.handleRegionDropdownChange}
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input
            className="form-input"
            id="zipCode"
            type="text"
            placeholder="Your zip code..."
            onChange={this.handleChange}
          />

          <label htmlFor="creditCardNumber">Credit Card Number</label>
          <CreditCardInput
            containerClassName="form-input credit-card-input"
            cardNumberInputProps={{
              onChange: this.handleCreditCardNumberChange
            }}
            cardExpiryInputProps={{ onChange: this.handleCardExpiryChange }}
            cardCVCInputProps={{ onChange: this.handleCardCVCChange }}
          />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="pricingTier" className="margin-bottom">Account Type</label>
          <div className="margin-bottom"></div>
          <Select
            value={pricingTiers.filter(
              x => x.value === this.state.pricingTierId
            )}
            options={pricingTiers}
            onChange={this.handlePricingTierChange}
          />

          <div className="pricing-tier-label">
            <label className="pricing-tier-label">
              {
                pricingTierText.filter(
                  x => x.value === this.state.pricingTierId
                )[0].label
              }
            </label>
          </div>

          <label htmlFor="emailAddress">Email</label>
          <input
            className="form-input"
            id="emailAddress"
            type="text"
            placeholder="Your email address..."
            onChange={this.handleChange}
          />

          <PasswordInput onChange={this.handleChange} />

          {this.renderPayFields()}

          <div className="padding-bottom" />
          <div>
            <button
              disabled={this.isSignupButtonDisabled()}
              className="signup-button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
