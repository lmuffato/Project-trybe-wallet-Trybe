import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="id_login_email">
          Email
          <input
            type="email"
            name="name"
            id="id_login_email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="id_login_password">
          Senha
          <input
            type="password"
            name="name"
            id="id_login_password"
            data-testid="password-input"
          />
        </label>
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
