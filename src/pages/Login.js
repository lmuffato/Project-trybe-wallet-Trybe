import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="email-input"
              id="email"
              name="email"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              id="password"
              name="password"
            />
          </label>
          <button
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
