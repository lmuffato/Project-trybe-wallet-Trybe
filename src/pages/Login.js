import React from 'react';
// import store from '../store';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Trybe Wallet</h1>
        <input type="text" data-testid="email-input" placeholder="Email" />
        <input type="password" data-testid="password-input" placeholder="Password" />
        <button type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
