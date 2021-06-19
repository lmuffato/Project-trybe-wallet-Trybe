import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input data-testid="email-input" placeholder="Email" type="email" />
        <input data-testid="password-input" placeholder="Senha" type="password" />
        <input type="button" value="Entrar" />
      </form>
    )
  }
}

export default Login;
