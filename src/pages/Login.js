import React from 'react';
// import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            name="email"
            type="email"
            data-testid="email-input"
            placeholder="email"
          />
          <input
            name="password"
            type="password"
            data-testid="password-input"
            placeholder="senha"
          />
          <button type="button">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
