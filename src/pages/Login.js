import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input id="email" type="email" data-testid="email-input" />
          </label>
          <label htmlFor="senha">
            Senha:
            <input id="senha" type="password" data-testid="password-input" />
          </label>
          <Link to="/carteira">Entrar</Link>
        </form>
      </div>
    );
  }
}

export default Login;
