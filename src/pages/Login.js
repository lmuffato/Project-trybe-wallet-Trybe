import React from 'react';
import { connect } from 'react-redux';
import { func, shape } from 'prop-types';
import loginAction from '../actions';

class Login extends React.Component {
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
    const verification = /^\w+@\w+.com$/;
    const NO_REGEX_MATCH = -1;
    return email.search(verification) !== NO_REGEX_MATCH;
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
    const { state: { email }, props: { login, history } } = this;
    login(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isDisabled } = this.state;

    return (
      <section>
        <h1>Login</h1>
        <input
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
        />
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
