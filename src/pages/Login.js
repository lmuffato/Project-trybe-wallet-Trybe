import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    const { email, senha } = this.state;
    // regex model encontrado no link da thread https://trybecourse.slack.com/archives/C01L16B9XC7/p1623175696043700
    const emailRegex = /^\w+@\w+.com$/;
    const minSenha = 5;
    if (emailRegex.test(email) === true && senha.length >= minSenha) {
      this.setState({ disabled: false });
    }
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              id="email"
              name="email"
              type="email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              id="senha"
              name="senha"
              type="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button disabled={ disabled } type="button">
            <Link to="/carteira">
              Entrar
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
