import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="form-login">
        <form>
          <input
            type="email"
            placeholder="E-mail"
            data-testid="email-input"
          />
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
          />
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
