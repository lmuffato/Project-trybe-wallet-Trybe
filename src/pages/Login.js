import React from 'react';

import '../styles/pages/login.css';
import trybeLogo from '../assets/trybe-logo.png';

const passwordMinlength = 6;

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
    if (password.length >= passwordMinlength) {
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
    if (validEmail && validPassword) {
      return (
        <button
          type="button"
          className="button-active"
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

export default Login;
