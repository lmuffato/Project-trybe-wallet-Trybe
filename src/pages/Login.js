import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.verificaSenha = this.verificaSenha.bind(this);
  }

  handleLogin({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.verificaSenha(name, value);
  }

  verificaSenha(name, value) {
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    const email = new RegExp(/^[\w.]+@[a-z]+.\w{2,3}$/g);
    const password = new RegExp(/[\w\D]{6}/g);
    if (name === 'email') {
      this.setState({
        validEmail: email.test(value),
      });
    }
    if (name === 'password') {
      this.setState({
        validPassword: password.test(value),
      });
    }
  }

  render() {
    const { email, password, validEmail, validPassword } = this.state;
    const verificaSenha = (validEmail && validPassword);
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            type="text"
            name="email"
            onChange={ this.handleLogin }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="text"
            name="password"
            data-testid="password-input"
            onChange={ this.handleLogin }
            value={ password }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !verificaSenha }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
