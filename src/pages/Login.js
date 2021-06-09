import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Trybe Wallet</h1>
        <label htmlFor="input-email">
          Login:
          <input
            type="email"
            data-testid="email-input"
            name="input-email"
          />
        </label>
        <label htmlFor="input-password">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            name="input-password"
          />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
