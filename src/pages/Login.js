import React from 'react';
// 1. Crie uma página inicial de login com os seguintes campos e características:
// 2. Realize as seguintes verificações nos campos de email, senha e botão
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

  /* Salve o email no estado da aplicação, com a chave email, assim que a pessoa usuária logar. */
  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {

  }

  render() {
    const { email, password } = this.state;
    const passLength = 6;
    return (
      <div>
        <h1>Login</h1>
        <form>
          {/* Você deve criar um local para que a pessoa usuária insira seu email e senha.
          */}
          <label htmlFor="email-input" data-testid="email-input">
            Email:
            <input
              /* O email está no formato válido, como 'alguem@alguem.com'. */
              type="email"
              value={ email }
              id="email-input"
              onChange={ this.handleInput }
              name="email"
            />
          </label>
          <label htmlFor="password-input" data-testid="password-input">
            Password:
            <input
              type="password"
              value={ password }
              id="password-input"
              onChange={ this.handleInput }
              name="password"
            />
          </label>
          {/* Crie um botão com o texto ‘Entrar’. */}
          <button
            type="button"
            onClick={ this.handleSubmit }
            /* A senha possui 6 ou mais caracteres. */
            disabled={ password.length < passLength }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
