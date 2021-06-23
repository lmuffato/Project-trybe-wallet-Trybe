import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            E-mail:
            <input
              type="email"
              name="name"
              data-testid="email-input"
            />

          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              data-testid="password-input"
            />

          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
