import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { sendLogin } from '../actions/index';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateSenha = this.validateSenha.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.saveState = this.saveState.bind(this);
  }

  saveState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  validateEmail(email) {
    const regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email);
  }

  validateSenha(senha) {
    const validateSenha = 6;

    if (senha.length >= validateSenha) return true;
    return false;
  }

  validateLogin() {
    const { validateEmail, validateSenha } = this;
    const { email, senha } = this.state;

    if (validateEmail(email) && validateSenha(senha)) return false;
    return true;
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;

    const { saveState } = this;

    saveState(name, value);
  }

  render() {
    const { state, validateLogin } = this;
    const { loginDispatch } = this.props;

    return (
      <main>
        <section id="login-container">
          <label htmlFor="Email">
            <input
              data-testid="email-input"
              id="Email"
              type="text"
              name="email"
              placeholder="email"
              value={ state.email }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="Senha">
            <input
              data-testid="password-input"
              id="Senha"
              type="password"
              name="senha"
              placeholder="password"
              value={ state.senha }
              onChange={ this.handleChange }
            />
          </label>
          <div>
            <Link to="/carteira">
              <button
                type="button"
                disabled={ validateLogin() }
                onClick={ () => loginDispatch(state.email) }
              >
                Entrar
              </button>
            </Link>
          </div>
        </section>
      </main>
    );
  }
}

// const mapStateToProps = (state) => ({
//   emailStore: state.user.email,
// });

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (state) => dispatch(sendLogin(state)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
