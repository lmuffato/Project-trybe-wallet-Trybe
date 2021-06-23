import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <form>
          <label htmlFor="email-input">
            <input data-testid="email-input" type="email" />
          </label>
          <label htmlFor="password-input">
            <input data-testid="password-input" type="password" />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </>
    );
  }
}

export default Login;
