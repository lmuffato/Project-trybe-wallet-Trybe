import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login as loginAction } from '../actions';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
      // emailError: '',
      // passwordError: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validateLogin();
  }

  validateLogin() {
    const { email, password } = this.state;

    // const emailError = 'invalid email';
    // const passwordError = 'invalid password';

    const passwordLength = 5;
    const validPassword = password.length >= passwordLength; // false => true

    const emailCondcion = /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm; // => https://regexr.com
    const validEmail = email.match(emailCondcion);

    // if (!validEmail) return emailError;

    // if (!validPassword) return passwordError;

    if (validEmail && validPassword) {
      this.setState({ buttonDisabled: false });
    }
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    // const { emailError, passwordError } = this.state;
    const { login } = this.props;
    // console.log(login);

    return (
      <form className="login">
        <input
          type="email"
          name="email"
          value={ email }
          placeholder="E-mail"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <div style={ { fontSize: 12, color: 'red' } }>
          {/* { emailError } */}
        </div>
        <input
          type="password"
          name="password"
          value={ password }
          placeholder="Password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <div style={ { fontSize: 12, color: 'red' } }>
          {/* { passwordError } */}
        </div>
        <Link to="/carteira" onClick={ () => login({ email, password }) }>
          <button
            type="button"
            className="logout_butto"
            disabled={ buttonDisabled }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  login: PropTypes.func,
}.isRequired;
