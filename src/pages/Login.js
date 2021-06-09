import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.validPassword = this.validPassword.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    if (this.validEmail() && this.validPassword() === true) {
      this.setState({
        isDisabled: false,
      });
    }
  }

  validEmail() {
    const { email } = this.state;
    const emailRegex = /^\w+@\w+\.com$/;
    return emailRegex.test(email);
    // utilizando o regex com test() podemos fazer a validação da string passada, que retorna true se for compatível ou false se não. Src = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
  }

  validPassword() {
    const { password } = this.state;
    const passwordLength = 5;
    if (password.length >= passwordLength) {
      return true;
    } return false;
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <>
        <div>Login</div>
        <label htmlFor="emailInput">
          <input
            id="emailInput"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            type="email"
            placeholder="Digite seu e-mail..."
          />
        </label>
        <label htmlFor="passwordInput">
          <input
            id="passwordInput"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            type="password"
            placeholder="Digite sua senha"
          />
        </label>
        <button
          id="enterBtn"
          type="button"
          disabled={ isDisabled }
        >
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
