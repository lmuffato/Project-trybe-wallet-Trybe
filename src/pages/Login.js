import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Login.css';
import { saveEmail } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.redirect = this.redirect.bind(this);
    this.isEnebledTheButton = this.isEnebledTheButton.bind(this);
    this.createEmailAndPasswordState = this.createEmailAndPasswordState.bind(this);
    this.state = {
      email: '',
      password: '',
      redirectNow: false,
    };
  }

  redirect() {
    const { state: { email }, props: { dispatchSaveEmail } } = this;
    this.setState((prevValue) => ({ ...prevValue, redirectNow: true }));
    const userEmail = { email };
    return dispatchSaveEmail(userEmail);
  }

  isEnebledTheButton() {
    const { email, password } = this.state;
    const Valid = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/; // https://cursos.alura.com.br/forum/topico-como-validar-email-e-senha-em-javascript-80469
    const isValidEmail = Valid.test(email);
    const minLength = 6;
    const passwordLength = password.length >= minLength;
    console.log('valid email: ', isValidEmail, 'password length: ', passwordLength);
    return !(isValidEmail && passwordLength);
  }

  async createEmailAndPasswordState({ target: { value, type } }) {
    console.log('value: ', value, 'type: ', type);
    await this.setState({ [type]: value });
    return this.isEnebledTheButton();
  }

  render() {
    const { state: { redirectNow }, redirect } = this;
    console.log('redirect: ', redirectNow);
    return (
      <div className="login">
        <label htmlFor="emailInput">
          Login:
          <input
            onChange={ this.createEmailAndPasswordState }
            className="inputBox"
            id="emailInput"
            type="email"
            data-testid="email-input"
            required
          />
        </label>
        <label htmlFor="passwordInput">
          Password:
          <input
            onChange={ this.createEmailAndPasswordState }
            className="inputBox"
            id="passwordInput"
            type="password"
            data-testid="password-input"
            required
          />
        </label>
        <button
          disabled={ this.isEnebledTheButton() }
          type="button"
          onClick={ redirect }
        >
          Entrar
        </button>
        { redirectNow ? <Redirect to="/carteira" /> : null}
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSaveEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveEmail: (userEmail) => dispatch(saveEmail(userEmail)),
});

export default connect(null, mapDispatchToProps)(Login);
