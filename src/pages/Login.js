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
      isValidLogin: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateEmail() {
    const email = document.querySelector('#email');
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email.value);
    return regexEmail;
  }

  validatePassword() {
    const password = document.querySelector('#password');
    const MIN_LENGTH = 6;
    return password.value.length >= MIN_LENGTH;
  }

  validateForm() {
    const isValidLogin = this.validateEmail() && this.validatePassword();
    this.toggleButton(isValidLogin);
    return isValidLogin;
  }

  toggleButton(bool) {
    const btn = document.querySelector('#btn-submit');
    if (!bool) {
      btn.setAttribute('disabled', bool);
    } else {
      btn.removeAttribute('disabled', bool);
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.validateForm);
  }

  redirect(bool) {
    this.setState({
      isValidLogin: bool,
    });
  }

  loginForm() {
    const { email, isValidLogin } = this.state;
    const { setEmail } = this.props;
    return (
      <div className="login-container">
        <form
          onSubmit={ (ev) => {
            ev.preventDefault();
            setEmail(email);
            this.redirect(this.validateForm());
          } }
        >
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              placeholder="Digite seu email"
              data-testid="email-input"
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              id="password"
              type="password"
              name="password"
              onChange={ this.validateForm }
              placeholder="No mínimo 6 caracteres"
              data-testid="password-input"
            />
          </label>
          <button id="btn-submit" type="submit" disabled>Entrar</button>
          {isValidLogin ? <Redirect to="/carteira" /> : ''}
        </form>
      </div>
    );
  }

  render() {
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
        </header>
        <body>
          {this.loginForm()}
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
