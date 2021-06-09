import React, { Component } from 'react';
import './style/LoginForm.css';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      button: true,
    };
    this.emailVerification = this.emailVerification.bind(this);
    this.passwordVerification = this.passwordVerification.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  emailVerification() {
    const { email } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const result = regex.test(email);
    return result;
  }

  passwordVerification() {
    const { password } = this.state;
    const minimumLengthPassord = 5;
    return password.length >= minimumLengthPassord;
  }

  handleChange(event) {
    const { target: { value, name } } = event;
    this.setState({ [name]: value });
    const verifications = (this.emailVerification() && this.passwordVerification()
      ? this.setState({ button: false })
      : this.setState({ button: true }));
    return verifications;
  }

  render() {
    const { email, password, button } = this.state;
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
        <button type="button" disabled={ button }>
          Entrar
        </button>
      </form>
    );
  }
}

// regex email https://www.kindacode.com/article/live-email-validation-in-react-with-regex/
