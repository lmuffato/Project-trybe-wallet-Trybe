import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email
            <input name="email" type="mail" data-testid="email-input" />
          </label>
          <label htmlFor="pass">
            Password
            <input name="pass" type="password" data-testid="password-input" />
          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
