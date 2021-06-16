import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            data-testid="password-input"
          />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
