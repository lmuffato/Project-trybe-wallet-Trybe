import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  validaEmail() {
    const { email, senha } = this.state;
    const passwordMinlength = 6;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (senha.length >= passwordMinlength && regex.test(email)) {
      return false;
    }

    return true;
  }

  handleClick() {
    const { addEmailAtual } = this.props;
    const { email } = this.state;
    const emailAtual = {
      email,
    };
    addEmailAtual(emailAtual);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  // }

  render() {
    const { email, senha } = this.state;
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="id_login_email">
          Email
          <input
            type="text"
            name="email"
            id="id_login_email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="id_login_password">
          Senha
          <input
            type="password"
            name="senha"
            id="id_login_password"
            data-testid="password-input"
            value={ senha }
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="my-action"
          onClick={ this.handleClick }
          type="button"
          disabled={ this.validaEmail() }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmailAtual: (payload) => dispatch(addEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  email: PropTypes.string,
}.isRiquered;
