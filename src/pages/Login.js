import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.habClick = this.habClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  habClick() {
    let disable = true;
    const smallerSize = 6;
    const { email, password } = this.state;
    const lengthPassword = password.length;
    const rightEmail = /\w+@\w+.com$/.test(email);
    if (rightEmail && lengthPassword >= smallerSize) disable = false;
    else disable = true;
    return disable;
  }

  render() {
    this.habClick();

    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            name="email"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            name="password"
          />
        </label>

        <button type="button" disabled={ this.habClick() }>Entrar</button>
      </form>
    );
  }
}

export default Login;
