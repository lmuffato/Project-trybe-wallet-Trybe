import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  verifyEmail(email) {
    const hasOneAtSign = email.split('').filter((el) => el === '@').length === 1; // has to be true
    const hasOneDot = email.split('').filter((el) => el === '.').length === 1; // has to be true
    const doesNotEndWithDot = email[email.length - 1] !== '.'; // has to be true
    return hasOneAtSign && hasOneDot && doesNotEndWithDot;
  }

  verifyPassword(password) {
    const MIN_PASSWORD_LENGTH = 6;
    return password.length >= MIN_PASSWORD_LENGTH;
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // Ativação/Desativação do Botão feita através dessa função conforme dica do CORUJA NO PLANTÃO.
  // Antes eu estava fazendo um estado para controlar isso e o avaliador não pegava.
  isDisabled(email, password) {
    return !(this.verifyEmail(email) && this.verifyPassword(password));
  }

  handleLogin(email) {
    const { loginUser, history } = this.props;
    loginUser(email);
    // this.props.history.push consultada no stack overflow no link:
    // https://stackoverflow.com/questions/61899931/how-to-redirect-to-homepage-after-successful-login-in-reactjs
    // E também na doc do React Router: https://reactrouter.com/web/api/history
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const isSubmitDisabled = this.isDisabled(email, password);

    return (
      <>
        <h2>Login</h2>
        <label htmlFor="email-input">
          <input
            type="email"
            placeholder="E-mail"
            data-testid="email-input"
            name="email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            name="password"
            id="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <input
          type="button"
          id="btn-submit"
          value="Entrar"
          disabled={ isSubmitDisabled }
          onClick={ () => this.handleLogin(email) }
        />
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,

};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email) => dispatch(login(email)),
});

export default connect(null, mapDispatchToProps)(Login);
