import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Email
            <input type="text" data-testid="email-input" />
          </label>

          <label htmlFor="password-input">
            Senha
            <input type="text" data-testid="password-input" />
          </label>

          <button type="button"> Entrar </button>
        </form>
      </div>
    );
  }
}

export default Login;
