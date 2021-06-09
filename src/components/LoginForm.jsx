import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style/LoginForm.css';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import userLogin from '../actions';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisable: true,
      redirect: false,
    };
    this.emailVerification = this.emailVerification.bind(this);
    this.passwordVerification = this.passwordVerification.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailVerification() {
    const { email } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const result = regex.test(email);
    return result;
  }

  passwordVerification() {
    const { password } = this.state;
    const minimumPasswordLength = 5;
    return password.length >= minimumPasswordLength;
  }

  handleChange(event) {
    const { target: { value, name } } = event;
    this.setState({ [name]: value });
    const verifications = (this.emailVerification() && this.passwordVerification()
      ? this.setState({ buttonDisable: false })
      : this.setState({ buttonDisable: true }));
    return verifications;
  }

  handleSubmit() {
    const { email } = this.state;
    const { getEmail } = this.props;
    getEmail(email);
    this.setState({ redirect: true });
  }

  render() {
    const { email, password, buttonDisable, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <form className="login-form-container">
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
            placeholder="Digite sua senha"
          />
        </label>
        <button type="button" disabled={ buttonDisable } onClick={ this.handleSubmit }>
          Entrar
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  getEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(
    userLogin(email),
  ),
});

export default connect(null, mapDispatchToProps)(LoginForm);

// regex email https://www.kindacode.com/article/live-email-validation-in-react-with-regex/
// redirect condicional https://stackoverflow.com/questions/45805930/react-router-redirect-conditional
