import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.validateButton = this.validateButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    const { valueButton } = this.state;
    if (prevState.valueButton !== valueButton) return this.validateButton;
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  validateButton() {
    const { email, password } = this.state;
    const regexEmail = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const boolEmail = regexEmail.test(email);
    const boolPassword = regexPassword.test(password);
    if (boolEmail && boolPassword) return false;
    return true;
  }

  render() {
    const { email, password } = this.state;
    const bool = this.validateButton();
    return (
      <div>
        <label htmlFor="email">
          <input
            value={ email }
            data-testid="email-input"
            type="text"
            placeholder="Email"
            onChange={ (event) => this.handleChange('email', event.target.value) }
          />
        </label>
        <label htmlFor="password">
          <input
            value={ password }
            data-testid="password-input"
            type="password"
            placeholder="Senha"
            onChange={ (event) => this.handleChange('password', event.target.value) }
          />
        </label>
        <input
          type="button"
          value="Entrar"
          disabled={ bool }
        />
      </div>
    );
  }
}

export default Login;

// referencias: https://www.ti-enxame.com/pt/javascript/validacao-de-senha-de-expressao-regular-javascript-com-caracteres-especiais/1067788241/
