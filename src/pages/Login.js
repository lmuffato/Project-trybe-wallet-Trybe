import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input type="text" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
