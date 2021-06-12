import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="Insira seu email"
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Senha"
          />
        </label>

        <button type="button">
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
