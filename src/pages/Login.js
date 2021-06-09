import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userEmail } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      auth: false,
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.updateState = this.updateState.bind(this);
    this.renderEmailInput = this.renderEmailInput.bind(this);
    this.renderPasswordInput = this.renderPasswordInput.bind(this);
    this.dispatchButton = this.dispatchButton.bind(this);
    this.renderEntryButton = this.renderEntryButton.bind(this);
  }

  handleAuth() {
    const { email, password } = this.state;
    const regex2Email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const minLenght = 5;
    const authValid = regex2Email.test(email) && password.length >= minLenght;
    return authValid ? this.setState({ auth: true }) : this.setState({ auth: false });
  }

  updateState(field, event) {
    const { value } = event.target;
    this.setState({ [field]: value });
    this.handleAuth();
  }

  dispatchButton() {
    const { email } = this.state;
    const { sendEmail, history: { push } } = this.props;
    sendEmail(email);
    push('/carteira');
  }

  renderPasswordInput() {
    return (
      <label htmlFor="passWordInput">
        PassWord:
        <input
          type="password"
          id="passWordInput"
          placeholder="User Password"
          onChange={ (event) => this.updateState('password', event) }
          data-testid="password-input"
        />
      </label>
    );
  }

  renderEmailInput() {
    return (
      <label htmlFor="emailInput">
        Email:
        <input
          type="email"
          id="emailInput"
          placeholder="User Email"
          data-testid="email-input"
          onChange={ (event) => this.updateState('email', event) }
        />
      </label>
    );
  }

  renderEntryButton() {
    const { auth } = this.state;
    return (
      <button
        type="button"
        disabled={ !auth }
        onClick={ this.dispatchButton }
      >
        Entrar
      </button>
    );
  }

  render() {
    return (
      <div>
        { this.renderEmailInput() }
        { this.renderPasswordInput() }
        { this.renderEntryButton() }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(userEmail(email)),
});

Login.propTypes = {
  sendEmail: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.shape({
    push: PropTypes.func.isRequired,
  })).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
