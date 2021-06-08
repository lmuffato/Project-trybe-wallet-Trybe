import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {

  }

  render() {
    const { email, password } = this.state;
    const regex = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
    const passwordLength = 6;
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            type="text"
            value={ email }
            id="email-input"
            onChange={ this.handleInput }
            name="email"
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            data-testid="password-input"
            type="password"
            value={ password }
            id="password-input"
            onChange={ this.handleInput }
            name="password"
          />
        </label>
        <button
          type="button"
          onClick={ this.handleSubmit }
          disabled={ !email.match(regex) || password.length < passwordLength }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
