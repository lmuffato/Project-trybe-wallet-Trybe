import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          Login
          <input
            data-testid="email-input"
            placeholder="Insira o subtítulo"
            id="email"
            type="email"
          />
        </label>
        <label htmlFor="password">
          Login
          <input
            data-testid="password-input"
            placeholder="Insira o subtítulo"
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
