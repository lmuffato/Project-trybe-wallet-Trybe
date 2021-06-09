import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.emailInput = this.emailInput.bind(this);
    this.passWordInput = this.passWordInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { clickLogin } = this.props;
    const { email } = this.state;
    clickLogin(email);
    this.setState({
      redirect: true,
    });
    event.preventDefault();
  }

  emailInput(event) {
    this.setState({
      email: event.target.value,
    });
  }

  validateEmail() {
    const { email } = this.state;
    const validate = /^\w+@\w+.com$/;

    return validate.test(email);
  }

  validatePassword() {
    const MIN_PASS = 6;
    const { password } = this.state;
    if (password.length >= MIN_PASS) {
      return true;
    }
    return false;
  }

  passWordInput(event) {
    this.setState({
      password: event.target.value,
    });
  }

  validateInput() {
    return (this.validatePassword() && this.validateEmail());
  }

  render() {
    const { email, password, redirect } = this.state;
    return (
      <form onSubmit={ this.onSubmit }>
        <label
          htmlFor="email"
        >
          Email
          <input
            data-testid="email-input"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            type="email"
            value={ email }
            onChange={ this.emailInput }
          />
        </label>
        <label
          htmlFor="password"
        >
          Password
          <input
            data-testid="password-input"
            name="password"
            type="password"
            minLength="6"
            value={ password }
            onChange={ this.passWordInput }
          />
        </label>
        <button
          type="submit"
          disabled={ !this.validateInput() }
        >
          Entrar
        </button>
        {redirect ? <Redirect to="/carteira" /> : true}
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  clickLogin: (email) => dispatch(login(email)),
});

Login.propTypes = {
  clickLogin: PropTypes.func,

}.isRequired;
export default connect(null, mapDispatchToProps)(Login);
