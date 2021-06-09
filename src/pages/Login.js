import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  verifyInputs() {
    const { email, password } = this.state;
    const emailRegex = /^\w+@\w+.com$/;
    const passwordLength = 5;
    if (emailRegex.test(email) && password.length > passwordLength) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            disabled={ this.verifyInputs() }
            type="button"
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
