import React from 'react';

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
          <button type="button">
            Entrar
          </button>
        </section>
      </div>
    );
  }
}

export default Login;
