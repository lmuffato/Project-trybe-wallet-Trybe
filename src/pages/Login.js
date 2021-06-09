import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendLogin } from '../actions/index';
// import { Link } from 'react-router-dom';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
      disable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.saveState = this.saveState.bind(this);
    this.messageError = this.messageError.bind(this);
    this.desableChange = this.desableChange.bind(this);
  }

  desableChange() {
    const { setState } = this;
    setState({
      disable: false,
    });
  }

  messageError(name) {
    if (name === 'email') {
      const { setState } = this;
      setState({
        disable: true,
      });
    }

    if (name === 'senha') {
      const { setState } = this;
      setState({
        disable: true,
      });
    }
  }

  saveState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  validateLogin(name, value) {
    const validateEmail = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
    const validateSenha = 6;

    const { saveState, messageError, desableChange } = this;
    // const { disable } = this.state;

    if (name === 'email') {
      if (validateEmail.test(value)) {
        saveState(name, value);
        desableChange();
      } else {
        messageError(name);
      }
    }

    if (name === 'senha') {
      if (value.length <= validateSenha) {
        saveState(name, value);
        desableChange();
      } else {
        messageError(name);
      }
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;

    this.validateLogin(name, value);
  }

  render() {
    const { state } = this;
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
            <button
              type="button"
              disabled={ state.disable }
              onClick={ () => loginDispatch(state) }
            >
              Entrar
            </button>
          </div>
        </section>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (state) => dispatch(sendLogin(state)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
