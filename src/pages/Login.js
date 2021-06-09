import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.validPassword = this.validPassword.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    if (this.validEmail() && this.validPassword() === true) {
      this.setState({
        isDisabled: false,
      });
    }
  }

  validEmail() {
    const { email } = this.state;
    const emailRegex = /^\w+@\w+\.com$/;
    return emailRegex.test(email);
    // utilizando o regex com test() podemos fazer a validação da string passada, que retorna true se for compatível ou false se não. Src = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
  }

  validPassword() {
    const { password } = this.state;
    const passwordLength = 5;
    if (password.length >= passwordLength) {
      return true;
    } return false;
  }

  render() {
    const { isDisabled, email } = this.state;
    const { saveEmail } = this.props;
    return (
      <>
        <div>Login</div>
        <label htmlFor="emailInput">
          <input
            id="emailInput"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            type="email"
            placeholder="Digite seu e-mail..."
          />
        </label>
        <label htmlFor="passwordInput">
          <input
            id="passwordInput"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            type="password"
            placeholder="Digite sua senha"
          />
        </label>
        <Link to="/carteira">
          <button
            id="enterBtn"
            type="button"
            disabled={ isDisabled }
            onClick={ () => saveEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (payload) => dispatch(userAction(payload)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
