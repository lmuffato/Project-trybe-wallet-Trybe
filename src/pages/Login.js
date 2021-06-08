import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <label htmlFor="emailInput">
          <input
            id="emailInput"
            data-testid="email-input"
            type="email"
            placeholder="Digite seu e-mail..."
          />
        </label>
        <label htmlFor="passwordInput">
          <input
            id="passwordInput"
            data-testid="password-input"
            type="password"
            placeholder="Digite sua senha"
          />
        </label>
        <button id="enterBtn" type="submit">
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
