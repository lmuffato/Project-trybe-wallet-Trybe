import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  validEmail(email) {
    const checkEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    return checkEmail.test(email).toLowerCase;
  }

  validPassword(password) {
    const checkPower = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    const checkPower2 = /(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){6,}$/;
    const checkPass = true;
    return password.length >= checkPower && checkPower2
      ? checkPass : false;
  }

  checkLogin() {
    const { email, password } = this.state;
    const check = this.validEmail(email) && this.validPassword(password);
    return check;
  }

  handleChangeInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      this.checkLogin();
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <section>
          <input
            type="text"
            placeholder="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChangeInput }
          />
          <input
            type="password"
            placeholder="senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChangeInput }
          />
          <Link to="/carteira">
            <button type="button">Entrar</button>
          </Link>
        </section>
      </div>
    );
  }
}

// Referências:
// Para validação de email: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
// Para validação de email: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
// Para validação de senha: https://stackoverflow.com/questions/53090699/how-to-run-an-alert-on-button-click-react-js
// Para validação de senha: https://pt.stackoverflow.com/questions/373574/regex-para-senha-forte
//
