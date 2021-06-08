import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Bem Vindo a Trybe Wallet</h1>
        <form>
          <div>
            <input data-testid="email-input" type="email" />
            <input data-testid="password-input" type="password" />
          </div>
          <div>
            <button type="button">Entrar</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
