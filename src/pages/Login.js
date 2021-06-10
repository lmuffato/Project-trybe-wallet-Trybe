import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/pages/login.css';
import trybeLogo from '../assets/trybe-logo.png';
import { addEmail } from '../actions';

const PASSWORD_MIN_LENTGH = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
    };
  }

  // Consultei o stack overflow para ver como é feito a regex
  // link: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  verifyEmail(email) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    return regex.test(email);
  }

  verifyPassword(password) {
    if (password.length >= PASSWORD_MIN_LENTGH) {
      return true;
    }

    return false;
  }

  handleInputChange(event) {
    const { target: { type, value } } = event;

    if (type === 'email') {
      this.setState({ email: value });

      if (this.verifyEmail(value)) {
        this.setState({ validEmail: true });
      } else {
        this.setState({ validEmail: false });
      }
    } else {
      this.setState({ password: value });

      if (this.verifyPassword(value)) {
        this.setState({ validPassword: true });
      } else {
        this.setState({ validPassword: false });
      }
    }
  }

  renderButton(validEmail, validPassword) {
    const { login, history } = this.props;
    const { email } = this.state;

    if (validEmail && validPassword) {
      return (
        <button
          type="button"
          className="button-active"
          onClick={ () => { login(email); history.push('carteira'); } }
        >
          Entrar
        </button>
      );
    }

    return (
      <button
        type="button"
        disabled
        className="button-disable"
      >
        Entrar
      </button>
    );
  }

  render() {
    const { email, password, validEmail, validPassword } = this.state;

    return (
      <div className="login-page">
        <img src={ trybeLogo } alt="Logo da Trybe" />
        <input
          type="email"
          data-testid="email-input"
          placeholder="seu@email.com"
          value={ email }
          onChange={ this.handleInputChange }
        />
        <input
          type="password"
          name="password"
          id="password"
          data-testid="password-input"
          placeholder="*******"
          value={ password }
          onChange={ this.handleInputChange }
        />

        {this.renderButton(validEmail, validPassword)}

      </div>);
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(addEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
