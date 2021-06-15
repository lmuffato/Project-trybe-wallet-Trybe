import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="email-input" placeholder="Email" />
        <input type="password" data-testid="password-input" placeholder="Senha" />

      </div>);
  }
}

export default Login;
