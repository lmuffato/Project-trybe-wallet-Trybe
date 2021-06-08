import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <h3>Enter Email and Password</h3>
        <input type="email" data-testid="email-input" placeholder="Email" />
        {' '}
        <br />
        {' '}
        <br />
        <input type="password" data-testid="password-input" placeholder="PassWord" />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
