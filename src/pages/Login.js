import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <label htmlFor="input-email">
          <input data-testid="email-input" type="text" id="input-email" />
        </label>
        <label htmlFor="input-password">
          <input data-testid="password-input" type="password" id="input-password" />
        </label>
        <button type="button">Entrar</button>
      </>
    );
  }
}

export default Login;
