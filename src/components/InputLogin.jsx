import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inputEmail, inputPassword } from '../actions/index';

class InputLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validEmail: false,
      validPassword: false,
      redirect: false,
    };
    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
    this.redirectToWalletPage = this.redirectToWalletPage.bind(this);
  }

  emailValidation(value) {
    const validEmailTest = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value);
    this.setState({ validEmail: validEmailTest });
  }

  passwordValidation(value) {
    const minimumPasswordLength = 6;
    this.setState({ validPassword: value.length >= minimumPasswordLength });
  }

  redirectToWalletPage() {
    this.setState({ redirect: true });
  }

  render() {
    const { email, password, emailReducer, passwordReducer } = this.props;
    const { validEmail, validPassword, redirect } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              data-testid="email-input"
              type="email"
              placeholder="Digite o seu email"
              onChange={ (event) => {
                this.emailValidation(event.target.value);
                emailReducer(event.target.value);
              } }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              data-testid="password-input"
              type="password"
              placeholder="Sua senha"
              onChange={ (event) => {
                this.passwordValidation(event.target.value);
                passwordReducer(event.target.value);
              } }
            />
          </label>
          <button
            id="buttonLogin"
            type="button"
            disabled={ !validEmail || !validPassword }
            onClick={ this.redirectToWalletPage }
          >
            Entrar
          </button>
        </form>
        {redirect === true ? <Redirect to="/carteira" /> : null}
        <h2>{!validEmail || !validPassword ? 'Login inválido' : 'Login Válido'}</h2>
        <h2>{email}</h2>
        <h2>{password}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  emailReducer: (email) => dispatch(inputEmail(email)),
  passwordReducer: (password) => dispatch(inputPassword(password)),
});

InputLogin.propTypes = {
  emailReducer: PropTypes.func.isRequired,
  passwordReducer: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputLogin);
