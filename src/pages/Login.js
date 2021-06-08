import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input data-testid="email-input" placeholder="e-mail" />
        <input data-testid="password-input" placeholder="senha" />
        <button type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
