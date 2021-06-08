import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <section>
          <input
            type="text"
            placeholder="email"
            data-testid="email-input"
          />
          <input
            type="password"
            placeholder="senha"
            data-testid="password-input"
          />
          <div>
            <button type="button">
              <Link to="/carteira" />
              Entrar
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
