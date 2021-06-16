import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
      buttonOk: false,
    };
  }

  validateFields() {
    const CARACTER_MIN = 6;
    const { password, email } = this.state;
    const regex = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
    const buttonOk = password.length >= CARACTER_MIN && regex.test(email);
    this.setState({ buttonOk });
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    }, () => this.validateFields());
  }

  render() {
    const { email, password, buttonOk } = this.state;

    return (
      <div>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            id="email"
            value={ email }
            placeholder="Digite seu e-mail"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            placeholder="Digite sua senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ !buttonOk }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
