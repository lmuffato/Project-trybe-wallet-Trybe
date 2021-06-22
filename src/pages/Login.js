import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { type, value } = event.target;
    const { email, password } = this.state;
    const MIN_PASSWORD = 5;
    this.setState({ [type]: value });
    // referência do regex: Postagem do Rafael Medeiros Gomes.
    // link: https://trybecourse.slack.com/archives/C01L16B9XC7/p1623175696043700
    if (/^\w+@\w+.com$/.test(email) === true && password.length >= MIN_PASSWORD) {
      this.setState({ disabledButton: false });
      console.log('o botão é ativado');
    }
  }

  render() {
    const { disabledButton } = this.state;
    return (
      <div>
        <p>Olá, essa é a tela de login</p>
        <input
          data-testid="email-input"
          type="email"
          required
          placeholder="Digite seu email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          required
          placeholder="Digite sua senha"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button disabled={ disabledButton } type="button">
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
