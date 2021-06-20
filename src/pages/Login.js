import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { withRouter } from 'react-router';
import { createUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      validation: false,
    };
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
    console.log(this.state);
  }

  handleClick() {
    const { createEmail, history } = this.props;
    console.log(this.props);
    const { email } = this.state;
    createEmail(email);
    history.push('/carteira');
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
            type="text"
          />
        </label>
        <button
          type="submit"
          onClick={ () => this.handleClick() }
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
  createEmail: (state) => dispatch(createUser(state)) });

export default withRouter(connect(null, mapDispatchToProps)(Login));

// Referências:
// Como atualizar a página quando clicar no botão: https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
// consultas no projeto Trivia do meu grupo (turma 10 - grupo 8)
