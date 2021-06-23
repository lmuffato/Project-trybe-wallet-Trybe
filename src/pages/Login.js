import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validInput = this.validInput.bind(this);

    this.state = {
      email: '',
      password: '',
      validation: false,
    };
  }

  handleClick(event) {
    event.preventDefault();
    const { createEmail, history } = this.props;
    const { email } = this.state;
    createEmail(email);
    history.push('/carteira');
  }

  validInput() {
    const { email, password } = this.state;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const lengthSix = 6;
    // console.log(email);
    // console.log(password);
    // console.log((re.test(email) && password.length >= lengthSix));
    // if ((re.test(email) && password.length >= lengthSix)) {
    this.setState({
      validation: (!(re.test(email) && password.length >= lengthSix)),
    });
    //   console.log(this.state);
    // }
    // console.log(this.state);
    // return (re.test(email) && password.length >= lengthSix);
  }

  async handleChange({ target: { id, value } }) {
    await this.setState({
      [id]: value,
    });
    await this.validInput();
  }

  render() {
    // const { createEmail } = this.props;
    const { validation } = this.state;
    return (
      <div>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            placeholder="Insira seu email"
            id="email"
            type="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="password-input"
            placeholder="Insira uma senha"
            id="password"
            type="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          onClick={ this.handleClick }
          disabled={ validation }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  createEmail: func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  createEmail: (state) => dispatch(saveEmail(state)) });

export default connect(null, mapDispatchToProps)(Login);

// Referências:
// Como atualizar a página quando clicar no botão: https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
// Consultas e aproveitamento de código e lógica do projeto Trivia do meu grupo (turma 10 - grupo 8)
// Como validar um email: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
// Consultas aos repositórios: https://github.com/tryber/sd-010-a-project-trybewallet/pull/67/commits/f151c2b7111f4e8f0092308c9bb5ea77bdcc2a14
//                             https://github.com/tryber/sd-010-a-project-trybewallet/pull/73/commits/f3cfe9785e6717db8205a94d09fc174d3e021c00
