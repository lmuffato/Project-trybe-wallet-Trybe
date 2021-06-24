import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { func } from 'prop-types';
import { setUserEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loginIsValid: false,
    };

    this.formValidation = this.formValidation.bind(this);
  }

  emailValidation() {
    const email = document.querySelector('.email');
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email.value);
    return emailRegex;
  }

  passwordValidation() {
    const password = document.querySelector('.password');
    const minPasswordLenght = 6;
    return password.value >= minPasswordLenght;
  }

  formValidation() {
    const loginValid = this.emailValidation && this.passwordValidation;
    this.buttonAlternation(loginValid);
    return loginValid;
  }

  buttonAlternation(bool) {
    const btn = document.querySelector('.btn-submit');
    if (!bool) {
      btn.setAttribute('disabled', bool);
    } else {
      btn.removeAttribute('disabled', bool);
    }
  }

  redirectToPage(bool) {
    this.setState({
      loginIsValid: bool,
    });
  }

  formToRender() {
    const { email, loginIsValid } = this.state;
    const { setEmail } = this.props;
    return (
      <div className="login-container">
        {loginIsValid ? <Redirect to="/carteira" /> : ''}
        <form
          onSubmit={ (event) => {
            event.preventDefault();
            setEmail(email);
            this.redirectToPage(this.formValidation());
          } }
        >
          <label htmlFor="name">
            E-mail:
            <input
              className="email"
              type="email"
              name="name"
              data-testid="email-input"
              onChange={ (ev) => { setEmail(ev.target.value); } }
            />

          </label>
          <label htmlFor="password">
            Senha:
            <input
              className="password"
              type="password"
              name="password"
              data-testid="password-input"
              onChange={ this.formValidation }
            />

          </label>
          <button className="btn-submit" type="submit" disabled>Entrar</button>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div>
        <header>
          <h1>Trybe Wallet</h1>
        </header>
        <body>
          {this.formToRender()}
        </body>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(setUserEmail(email)),
});

Login.propTypes = {
  setEmail: func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
