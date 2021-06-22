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
    const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi; // Regex ==> https://regexr.comm/2ri2c
    const six = 6;
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
              !(email.match(emailRegex))
              ||password.length < six
            }
            onClick={
              () => console.log(email.match(emailRegex))
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
