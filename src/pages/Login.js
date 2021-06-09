import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <form>
          <input type="email" data-testid="email-input" placeholder="alguem@email.com" />
          <input type="password" data-testid="password-input" />
          <button type="submit">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
