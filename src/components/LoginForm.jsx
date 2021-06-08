import React, { Component } from "react";
import "./style/LoginForm.css";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      button: true,
    };
  }

  emailVerification = () => {
    const { email } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const result = regex.test(email);
    return result;
  };

  passwordVerification = () => {
    const { password } = this.state;
    return password.length >= 5 ? true : false;
  };

  handleChange = (event) => {
    const { target: { value, name } } = event;
    this.setState({ [name]: value });
    this.emailVerification() && this.passwordVerification() 
    ? this.setState({ button: false })
    : this.setState({ button: true });
  };

  render() {
    const { email, password, button } = this.state;
    return (
      <form className="login-form-container">
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            data-testid="email-input"
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            data-testid="password-input"
            placeholder="Digite sua senha"
          />
        </label>
        <button type="button" disabled={button}>
          Entrar
        </button>
      </form>
    );
  }
}
