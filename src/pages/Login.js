import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <input
          type="text"
          placeholder="User"
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
        />
        <button type="button">
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
