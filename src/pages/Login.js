import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
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
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
