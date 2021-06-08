import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="email-input">
          <input
            type="email"
            placeholder="Email"
            id="email-input"
            data-testid="email-input"
          />
        </label>
        <br />
        <label htmlFor="password-input">
          <input
            type="password"
            placeholder="Password"
            id="password-input"
            data-testid="password-input"
          />
        </label>
        <button type="button">Entrar</button>
      </>
    );
  }
}

export default Login;
