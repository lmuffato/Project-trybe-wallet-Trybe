import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
          />
          <input
            type="password"
            data-testid="password-input"
          />
        </form>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
