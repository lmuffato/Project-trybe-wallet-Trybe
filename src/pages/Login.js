import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  validation() {
    const { email, senha } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const minValue = 6;
    if (emailRegex.test(email) && senha.length >= minValue) {
      return false;
    }

    return true;
  }

  render() {
    const { email, senha } = this.state;
    return (
      <>
        <div>Login</div>
        <label htmlFor="input-email">
          <input
            data-testid="email-input"
            type="text"
            id="input-email"
            onChange={ this.onChange }
            value={ email }
            name="email"
          />
        </label>
        <label htmlFor="input-password">
          <input
            data-testid="password-input"
            type="password"
            id="input-password"
            onChange={ this.onChange }
            value={ senha }
            name="senha"
          />
        </label>
        <button
          disabled={ this.validation() }
          type="button"
        >
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
