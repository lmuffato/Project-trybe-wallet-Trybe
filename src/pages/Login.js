import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { emailAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      isButtonDisabled: true,
      email: '',
      password: '',
      shouldRedirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.storeEmail = this.storeEmail.bind(this);
  }

  emailValidator() {
    const { email } = this.state;
    const formatPattern = /\S+@\S+\.\S+/;

    return formatPattern.test(email); // retorno booleano
  }

  passwordValidator() {
    const { password } = this.state;
    const minPassword = 5;

    if (password.length >= minPassword) {
      return true;
    }
  }

  inputValidator() {
    if (this.emailValidator() && this.passwordValidator()) {
      this.setState({
        isButtonDisabled: false,
      });
    } else {
      this.setState({
        isButtonDisabled: true,
      });
    }
  }

  handleChange(event) {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    });
    this.passwordValidator();
    this.inputValidator();
  }

  storeEmail(event) {
    event.preventDefault();
    const { email } = this.state;
    const { setEmail } = this.props;
    setEmail(email);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { isButtonDisabled, email, password, shouldRedirect } = this.state;

    if (shouldRedirect) return (<Redirect to="/carteira" />);

    return (
      <form>
        <label htmlFor="user-email">
          Email:
          <input
            value={ email }
            name="email"
            type="email"
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="user-password">
          Senha:
          <input
            value={ password }
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          onClick={ (event) => this.storeEmail(event) }
          disabled={ isButtonDisabled }
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(emailAction(email)),
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// https://www.kindacode.com/article/live-email-validation-in-react-with-regex/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
