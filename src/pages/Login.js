import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  validate() {
    const { email, password } = this.state;
    const minLength = 6;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if ((password.length >= minLength) && (emailPattern.test(email) === true)) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className="form-login">
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          onChange={ (e) => this.setState({ email: e.target.value }) }
          value={ email }
          required
        />
        <input
          type="password"
          placeholder="Senha"
          minLength="6"
          data-testid="password-input"
          onChange={ (e) => this.setState({ password: e.target.value }) }
          value={ password }
          required
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.validate() }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;
