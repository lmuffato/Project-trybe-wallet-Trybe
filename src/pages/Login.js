import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.validateInputs());
  }

  validateInputs() {
    const { email, password } = this.state;
    const minPasswordLength = 6;
    const verifyEmail = (/\S+@\S+\.\S+/i).test(email);
    const verifyPassword = password.length >= minPasswordLength;
    if (verifyEmail && verifyPassword) this.setState({ disabled: false });
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            required
            data-testid="email-input"
            onChange={ this.handleOnChange }
            value={ email }
          />
        </label>
        <label htmlFor="email">
          Senha:
          <input
            type="password"
            name="password"
            required
            data-testid="password-input"
            onChange={ this.handleOnChange }
            value={ password }
          />
        </label>
        <button type="button" disabled={ disabled }>Entrar</button>
      </form>
    );
  }
}

export default Login;
