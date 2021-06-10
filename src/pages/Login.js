import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            aria-label="email"
            data-testid="email-input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            aria-label="senha"
            data-testid="password-input"
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
