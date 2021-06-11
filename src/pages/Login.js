import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input type="email" data-testid="email-input" value="" placeholder="E-mail" />
        <input
          type="password"
          data-testid="password-input"
          value=""
          placeholder="Password"
        />
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
