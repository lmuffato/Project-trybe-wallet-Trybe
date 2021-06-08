import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              id="email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="email"
              id="password"
              data-testid="password-input"
            />
          </label>
          <button type="submit">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
