import React from 'react';

import '../styles/pages/login.css';
import trybeLogo from '../assets/trybe-logo.png';

class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <img src={ trybeLogo } alt="Logo da Trybe" />
        <input
          type="email"
          data-testid="email-input"
          placeholder="seu@email.com"
        />
        <input
          type="password"
          name="password"
          id="password"
          data-testid="password-input"
          placeholder="*******"
        />
        <button type="button">Entrar</button>
      </div>);
  }
}

export default Login;
