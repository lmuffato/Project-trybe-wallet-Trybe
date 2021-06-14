import React from 'react';
import { Link } from 'react-router-dom';
// 1. Crie uma página inicial de login com os seguintes campos e características:
// 2. Realize as seguintes verificações nos campos de email, senha e botão

class Login extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    /* Salve o email no estado da aplicação, com a chave email, assim que a pessoa usuária logar. */
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {

  }

  render() {
    const { email, password } = this.state;
    const passLength = 6;
    /* https://www.w3resource.com/javascript/form/email-validation.php */
    /* O email está no formato válido, como 'alguem@alguem.com'. */
    const vEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return (
      <div>
        <h1>Login</h1>
        <form>
          {/* Você deve criar um local para que a pessoa usuária insira seu email e senha.
          */}
          <label htmlFor="email-input">
            Email:
            <input
              data-testid="email-input"
              type="email"
              value={ email }
              id="email-input"
              onChange={ this.handleInput }
              name="email"
            />
          </label>
          <label htmlFor="password-input">
            Password:
            <input
              data-testid="password-input"
              type="password"
              value={ password }
              id="password-input"
              onChange={ this.handleInput }
              name="password"
            />
          </label>
          {/* A rota deve ser mudada para '/carteira' após o clique no botão 'Entrar'. */}
          <Link to="/carteira">
            {/* Crie um botão com o texto ‘Entrar’. */}
            <button
              type="button"
              onClick={ this.handleSubmit }
              /* A senha possui 6 ou mais caracteres. */
              disabled={ (vEmail.test(email) === false) || password.length < passLength }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
