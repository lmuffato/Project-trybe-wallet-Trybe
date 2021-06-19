import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            placeholder="Insira seu email"
            id="email"
            type="email"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="password-input"
            placeholder="Insira uma senha"
            id="password"
            type="text"
          />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
