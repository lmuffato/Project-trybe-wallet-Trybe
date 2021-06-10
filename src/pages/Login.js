import React, { Component } from 'react';
import '../Login.css';

class Login extends Component {
  constructor() {
    super();

    this.isEnebledTheButton = this.isEnebledTheButton.bind(this);
    this.createEmailAndPasswordState = this.createEmailAndPasswordState.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  isEnebledTheButton() {
    const { email, password } = this.state;
    const Valid = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const isValidEmail = Valid.test(email);
    const minLength = 6;
    const passwordLength = password.length >= minLength;
    console.log(isValidEmail, passwordLength);
    return (isValidEmail && passwordLength);
  }

  async createEmailAndPasswordState({ target: { value, type } }) {
    console.log(value, type);
    await this.setState({ [type]: value });
    return this.isEnebledTheButton();
  }

  render() {
    return (
      <div className="login">
        <label htmlFor="emailInput">
          Login:
          <input
            onChange={ this.createEmailAndPasswordState }
            className="inputBox"
            id="emailInput"
            type="email"
            data-testid="email-input"
            required
          />
        </label>
        <label htmlFor="passwordInput">
          Password:
          <input
            onChange={ this.createEmailAndPasswordState }
            className="inputBox"
            id="passwordInput"
            type="password"
            data-testid="password-input"
            required
          />
        </label>
        <button disabled={ !this.isEnebledTheButton() } type="button">
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
