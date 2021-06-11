// 8 - ElementaryOS
// Sobre inputs do tipo password:
// https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/password
// Explicação que deu certo sobre usar imagens no react no lnk abaixo:
// https://qastack.com.br/programming/37644265/correct-path-for-img-on-react-js

import React from 'react';
import './login.css';
import money from '../images/money.png';

class Login extends React.Component {
  render() {
    return (
      <fieldset>
        <img
          id="money"
          alt="Bolsa de dinheiro"
          src={ money }
        />
        <form>
          <label htmlFor="input-email">
            <em>Digite seu e-mail:</em>
            <input
              data-testid="email-input"
              type="email"
              placeholder="Exemplo: usuario@email.com"
              name="input-email"
              className="alinhamento, placeholder-center"
              required
            />
          </label>
          <label htmlFor="input-senha">
            <em>Digite sua senha:</em>
            <input
              data-testid="password-input"
              type="password"
              placeholder="Mínimo de 6 dígitos"
              name="input-email"
              className="alinhamento, placeholder-center"
              required
            />
          </label>
          <button type="button" className="alinhamento">ENTRAR</button>
        </form>
      </fieldset>
    );
  }
}

export default Login;
