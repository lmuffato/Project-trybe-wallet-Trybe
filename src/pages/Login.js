import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          minLength="6"
          data-testid="password-input"
          required
        />
        <Link to="/carteira">
          <button
            type="button"
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;
