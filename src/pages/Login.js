import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>

        <input type="email" data-testid="email-input" />

        <input type="password" data-testid="password-input" />

        <Link to="/">
          <button type="submit">Entrar</button>
        </Link>

      </div>
    );
  }
}

export default Login;
