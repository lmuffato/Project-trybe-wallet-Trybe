import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import loginActionCreator from '../actions';

class Login extends React.Component {
  constructor(_props) {
    super(_props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateLogin = this.validateLogin.bind(this);

    this.state = {
      email: '',
      password: '',
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    document.querySelector('button').disabled = true;
  }

  componentDidUpdate() {
    this.validateLogin();
  }

  handleChange(event) {
    const { type: name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { props: { loginDispatch }, state } = this;
    loginDispatch(state);
    this.setState({
      shouldRedirect: true,
    });
  }

  validateLogin() {
    const { email, password } = this.state;
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const minLength = 6;
    const btnEnviar = document.querySelector('button');

    if (btnEnviar) {
      if (emailRegex.test(email) && password.length >= minLength) {
        btnEnviar.disabled = false;
      } else {
        btnEnviar.disabled = true;
      }
    }
  }

  render() {
    const { email, password, shouldRedirect } = this.state;

    return (
      shouldRedirect ? <Redirect to="/carteira" />
        : (
          <form>
            <input
              type="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
            <input
              type="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
            <button
              type="button"
              value="Entrar"
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </form>

        )
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (data) => dispatch(loginActionCreator(data)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
