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
    const seven = 7;
    return (
      <div>
        <h2>Login</h2>

        <input
          type="email"
          data-testid="email-input"
          onChange={
            (event) => this.setState({ email: event.target.value })
          }
        />

        <input
          type="password"
          data-testid="password-input"
          onChange={
            (event) => this.setState({ password: event.target.value })
          }
        />

        <Link to="/carteira">
          <button
            type="submit"
            disabled={
              email.includes('@') !== true
              || email.includes('.com') !== true
              || password.length < seven
            }
            onClick={
              () => console.log(email, password)
            }
          >
            Entrar
          </button>
        </Link>

      </div>
    );
  }
}

export default Login;

// codigo escrito com ajuda do Marcelo Mauricio t10 //
