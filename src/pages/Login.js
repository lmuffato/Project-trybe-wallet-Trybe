import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
  }

  validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  checkInputs() {
    const { email, password } = this.state;
    const MAX_PASSWORD_LENGTH = 5;

    if (this.validateEmail(email) && password.length > MAX_PASSWORD_LENGTH) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleChange(event) {
    const { type, value } = event.target;

    this.setState({
      [type]: value,
    }, () => this.checkInputs());
  }

  render() {
    const { disabled } = this.state;
    return (
      <main>
        <input
          data-testid="email-input"
          type="email"
          placeholder="E-mail"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </main>
    );
  }
}

export default Login;
