import React from 'react';
import imagem from '../money.jpg';

class Login extends React.Component {
  render() {
    return (
      <div id="mainLogin">
        Pocket Login
        <img src={ imagem } alt="imagem bolso" />
        <label htmlFor="email">
          Email
          <br />
          <input type="text" id="email" data-testid="email-input" />
        </label>
        <label htmlFor="password">
          Password
          <br />
          <input type="password" id="password" data-testid="password-input" />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
