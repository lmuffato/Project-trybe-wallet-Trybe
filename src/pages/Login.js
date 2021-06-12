import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import login from '../actions';

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
      if (this.hasValidEmail() && this.hasValidPassword()) {
        this.setState({ hasValidLogin: true });
      } else {
        this.setState({ hasValidLogin: false });
      }
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
          <div>
            <form>
              <label htmlFor="email">
                Email:
                <input
                  type="email"
                  name="email"
                  id="email"
                  data-testid="email-input"
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  name="password"
                  id="password"
                  data-testid="password-input"
                  onChange={ this.handleChange }
                />
              </label>
              <button
                type="button"
                disabled={ !hasValidLogin }
                onClick={ () => {
                  loginDispatcher(email, password);
                  this.setState({ buttonClicked: true });
                } }
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
