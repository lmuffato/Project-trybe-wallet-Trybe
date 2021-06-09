import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const quanty = 6;
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ (e) => this.setState({ email: e.target.value }) }
          />
          <br />
          <br />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ (e) => this.setState({ password: e.target.value }) }
          />
        </label>
        <br />
        <br />
        <button
          type="submit"
          disabled={ !(password.length >= quanty
            && email.includes('.com') && email.includes('@')) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default connect()(Login);
// pesquisas feitas em https://www.devmedia.com.br/validando-e-mail-em-inputs-html-com-javascript/26427;
// https://pt.stackoverflow.com/questions/22439/como-habilitar-e-desabilitar-bot%C3%A3o-a-partir-do-onclick-ou-onchange-do-select;
// https://github.com/Gui-lira;
