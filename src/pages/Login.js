import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.changeValidEmail = this.changeValidEmail.bind(this);
    this.changeValidPassword = this.changeValidPassword.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  // função para pegar o value no input e-mail e alterar estado se valido
  changeValidEmail(event) {
    const { email } = this.state;
    const emailValidTest = /\w+@\w+\.\w+/gi.test(email);
    if (emailValidTest) {
      this.setState({
        email: event.target.value,
      });
    }
  }

  // função para pegar o value do input password altera estado se valido
  changeValidPassword(event) {
    const { password } = this.state;
    const passwordLength = 5;
    if (password.length > passwordLength) {
      this.setState({ password: event.target.value });
    }
  }

  // função habilita botão se email e senha validos.
  enableButton(changeValidEmail, changeValidPassword) {
    if (changeValidEmail && changeValidPassword) {
      this.setState({ disabled: false });
    }
  }
  // const { email, password } = this.state;
  // const emailIsValid = /\w+@\w+\.\w+/gi.test(email);
  // const passwordIsValid = /(.{5,})/gi.test(password);

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
