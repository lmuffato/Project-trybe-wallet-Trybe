import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.inputsValidation = this.inputsValidation.bind(this);
    this.changeValidEmail = this.changeValidEmail.bind(this);
    this.changeValidPassword = this.changeValidPassword.bind(this);
  }

  inputsValidation() {
    const { email, password } = this.state;
    const emailValidTest = /\w+@\w+\.\w+/gi.test(email);
    const passwordIsValid = /(.{5,})/gi.test(password);
    if (emailValidTest && passwordIsValid) {
      this.setState({
        disabled: false,
      });
    }
  }

  // função para pegar o value no input e-mail e alterar estado se valido
  changeValidEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  // função para pegar o value do input password altera estado se valido
  changeValidPassword(event) {
    this.inputsValidation();
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="email"
            onChange={ this.changeValidEmail }
          />
          <input
            data-testid="password-input"
            type="password"
            onChange={ this.changeValidPassword }
          />
          <button
            disabled={ disabled }
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
