import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, shape } from 'prop-types';

import loginAction from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.hasValidEmail = this.hasValidEmail.bind(this);
    this.hasValidPassword = this.hasValidPassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  hasValidEmail() {
    const { email } = this.state;
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    // REGEX 101
    return email.match(/\S+@\S+\.\S+/);
  }

  hasValidPassword() {
    const { password } = this.state;
    const MINIMUM_LENGTH = 6;
    return password.length >= MINIMUM_LENGTH;
  }

  handleChange({ target: { type, value } }) {
    this.setState({ [type]: value },
      () => {
        if (this.hasValidEmail() && this.hasValidPassword()) {
          this.setState({ isDisabled: false });
        } else {
          this.setState({ isDisabled: true });
        }
      });
  }

  handleLogin() {
    const { email } = this.state;
    const { login, history } = this.props;
    login(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <section>
        <label htmlFor="email">
          Email
          <input
            type="email"
            data-testid="email-input"
            placeholder="Insira seu email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.handleLogin }
        >
          Entrar
        </button>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});
Login.propTypes = {
  login: func,
  history: shape({ push: func }),
}.isRequired;
export default connect(null, mapDispatchToProps)(Login);
