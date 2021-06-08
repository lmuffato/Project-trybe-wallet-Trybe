import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginAction from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
      shouldRedirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordVerification = this.handlePasswordVerification.bind(this);
    this.handleEmailVerification = this.handleEmailVerification.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handlePasswordVerification() {
    const { password } = this.state;
    const passwordMinLength = 6;
    return password.length >= passwordMinLength;
  }

  handleEmailVerification() {
    const { email } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.com$/;
    return emailRegex.test(email);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value }, () => {
      if (this.handlePasswordVerification() && this.handleEmailVerification()) {
        this.setState({ isButtonDisabled: false });
      } else {
        this.setState({ isButtonDisabled: true });
      }
    });
  }

  handleLogin() {
    const { email } = this.state;
    const { authLogin } = this.props;
    authLogin(email);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { email, password, isButtonDisabled, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={ email }
            name="email"
            id="email"
            data-testid="email-input"
            placeholder="email@example.com"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            value={ password }
            type="password"
            data-testid="password-input"
            name="password"
            id="password"
            minLength="6"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <button
          type="button"
          disabled={ isButtonDisabled }
          onClick={ this.handleLogin }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  authLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  authLogin: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

// Referências consultadas:
// Esta thread do slack: https://trybecourse.slack.com/archives/C01L16B9XC7/p1623175696043700
// PR do colega Rafael Medeiros: https://github.com/tryber/sd-010-a-project-trybewallet/pull/45/files
// Método search do JavaScript: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/search
// Método test do JavaScript: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
// Sobre o regex usado: http://www.regexplained.co.uk/
// PR de Micaela Alves (uso do Redirect): https://github.com/tryber/sd-09-project-trybewallet/blob/malves0-project-trybe-wallet/src/pages/Login.js
