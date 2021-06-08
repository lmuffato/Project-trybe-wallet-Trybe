import React, { Component } from 'react';
import './style/LoginForm.css';

export default class LoginForm extends Component {
  render() {
    return (
      <form className="login-form-container">
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            data-testid="email-input"
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    );
  }
}
