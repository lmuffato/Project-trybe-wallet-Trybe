// 8 - ElementaryOS
// Muitas das coisas que aprendi para esse projeto foi através do meu grupo no
// Projeto Trivia: Grupo 33 => Willian Mendes, Jorge Junior e Patrick Southier
// Sobre inputs do tipo password:
// https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/password
// Explicação que deu certo sobre usar imagens no react no lnk abaixo:
// https://qastack.com.br/programming/37644265/correct-path-for-img-on-react-js
// Como remover o sublinhado do componente Link do Roteador React?
// Link quebrado em duas partes para não haver erros do Lint
// https://qastack.com.br/programming/37669391/
// how-to-get-rid-of-underline-for-link-component-of-react-router

import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import money from '../images/money.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
    this.habilitarBotao = this.habilitarBotao.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSenha = this.handleSenha.bind(this);
  }

  habilitarBotao() {
    // Desconstrução do estado
    const { email, senha } = this.state;
    // Essa validação é similar ao que utilizei no Projeto Trivia
    // que fiz junto com o Grupo 33
    // Link do código do regex: https://regexr.com/2ri2c
    const padraoRegex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;
    const minimoCaracteres = 6;
    return !(senha.length >= minimoCaracteres && email.match(padraoRegex));
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleSenha(event) {
    this.setState({
      senha: event.target.value,
    });
  }

  render() {
    return (
      <fieldset>
        <img
          className="logo"
          alt="Bolsa de dinheiro"
          src={ money }
        />
        <form>
          <label htmlFor="input-email">
            <em>Digite seu e-mail:</em>
            <input
              onChange={ this.handleEmail }
              data-testid="email-input"
              type="email"
              placeholder="Exemplo: usuario@email.com"
              name="input-email"
              className="alinhamento placeholder-center"
              required
            />
          </label>
          <label htmlFor="input-senha">
            <em>Digite sua senha:</em>
            <input
              onChange={ this.handleSenha }
              data-testid="password-input"
              type="password"
              placeholder="Mínimo de 6 dígitos"
              name="input-email"
              className="alinhamento placeholder-center"
              required
            />
          </label>
          <Link to="/carteira" style={ { textDecoration: 'none' } }>
            <button
              disabled={ this.habilitarBotao() }
              type="button"
              className="alinhamento"
            >
              ENTRAR
            </button>
          </Link>
        </form>
      </fieldset>
    );
  }
}

export default Login;
