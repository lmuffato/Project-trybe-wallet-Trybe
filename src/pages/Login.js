import React from 'react';

import logo from '../assets/trybe.png';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <form className="flex login">
        <fieldset>
          <img src={ logo } alt="Logo da trybe." />
          <label htmlFor="email">
            Email
            <input
              id="email"
              className="input"
              data-testid="email-input"
              type="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              id="password"
              className="input"
              data-testid="password-input"
              type="password"
              placeholder="Password"
            />
          </label>

          <button type="submit">Entrar</button>
        </fieldset>
      </form>
    );
  }
}

export default Login;
