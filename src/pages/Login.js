import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            type="email"
            id="email"
            placeholder="Digite seu E-mail"
          />
        </label>
        <label htmlFor="senha">
          Password
          <input
            data-testid="password-input"
            type="password"
            id="senha"
            placeholder="Digite seu senha"
          />
        </label>
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
