import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <input
            type="email"
            value={ email }
            placeholder="email"
            data-testid="email-input"
            onChange={ (event) => this.setState({ email: event.target.value }) }
          />
          <input
            type="password"
            value={ password }
            password="senha"
            data-testid="password-input"
            onChange={ (event) => this.setState({ password: event.target.value }) }
          />
        </div>
        <Link
          to="/carteira"
        >
          <button type="button">Entrar</button>
        </Link>
      </div>
    );
  }
}

export default Login;
