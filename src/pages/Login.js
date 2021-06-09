import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <h2>Login</h2>
        <label htmlFor="email-input">
          <input
            type="email"
            placeholder="E-mail"
            data-testid="email-input"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            name="password"
            id="password"
          />
        </label>
        <button type="submit" id="btn-submit">Entrar</button>
      </>
    );
  }
}

export default Login;
