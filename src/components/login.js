import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class login extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validateInput() {
    const { email, password } = this.state;
    const isValid = email.match(/^\w+@\w+.com$/);
    const minimumPasswordLength = 5;
    if (password.length > minimumPasswordLength && isValid) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <h2>Trybe</h2>
        <input
          type="text"
          data-testid="email-input"
          placeholder="email"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          data-testid="password-input"
          placeholder="password"
          name="password"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            disabled={ this.validateInput() }
            type="button"
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}
