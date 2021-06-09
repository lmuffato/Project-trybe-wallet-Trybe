import React from 'react';
import '../Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <label htmlFor="emailInput">
          Login:
          <input
            className="inputBox"
            id="emailInput"
            type="password"
            data-testid="email-input"
            required
          />
        </label>
        <label htmlFor="passwordInput">
          Password:
          <input
            className="inputBox"
            id="passwordInput"
            type="password"
            data-testid="password-input"
            required
            minLength="8"
          />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
