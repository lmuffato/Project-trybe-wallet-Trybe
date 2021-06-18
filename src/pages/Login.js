import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { login } from '../actions';
import '../style/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      hasValidLogin: false,
      buttonClicked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.hasValidEmail = this.hasValidEmail.bind(this);
    this.hasValidPassword = this.hasValidPassword.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      const valid = this.hasValidEmail() && this.hasValidPassword();
      this.setState({ hasValidLogin: valid });
    });
  }

  hasValidEmail() {
    const { email } = this.state;
    const emailRegex = /[a-z0-9]+@[a-z0-9]+(\.com)$/gi;
    return emailRegex.test(email);
  }

  hasValidPassword() {
    const { password } = this.state;
    const maxPasswordLength = 6;
    return password.length >= maxPasswordLength;
  }

  render() {
    const { email, password, hasValidLogin, buttonClicked } = this.state;
    const { loginDispatcher } = this.props;

    return (
      buttonClicked ? <Redirect to="/carteira" />
        : (
          <div className="login-page">
            <h1>trybewallet</h1>
            <form className="login-container">
              <label htmlFor="email" className="login-label-input">
                {/* Email: */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  data-testid="email-input"
                  onChange={ this.handleChange }
                  className="login-text-input"
                  placeholder="email"
                />
              </label>
              <label htmlFor="password" className="login-label-input">
                {/* Password: */}
                <input
                  type="password"
                  name="password"
                  id="password"
                  data-testid="password-input"
                  onChange={ this.handleChange }
                  className="login-text-input"
                  placeholder="password"
                />
              </label>
              <button
                type="button"
                disabled={ !hasValidLogin }
                onClick={ () => {
                  loginDispatcher(email, password);
                  this.setState({ buttonClicked: true });
                } }
                className="login-button"
              >
                Entrar
              </button>
            </form>
          </div>
        )
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatcher: (email, password) => dispatch(login(email, password)),
});

Login.propTypes = {
  login: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
