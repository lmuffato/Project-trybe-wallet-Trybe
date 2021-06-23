import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { salvarLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      validarEmail: false,
      password: '',
      validarPassword: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.salvarLogin = this.salvarLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validateLogin(name, value);
  }

  validateLogin(name, value) {
    const email = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,3}$/g);
    const password = new RegExp(/[\w\D]{6}/g);

    if (name === 'email') {
      this.setState({
        validarEmail: email.test(value),
      });
    }
    if (name === 'password') {
      this.setState({
        validarPassword: password.test(value),
      });
    } // regex https://regexr.com/
  }

  salvarLogin() {
    const { sendLogin } = this.props;
    const { email } = this.state;
    sendLogin(email);
  }

  render() {
    const { email, password, validarEmail, validarPassword } = this.state;
    const validarLogin = (validarEmail && validarPassword);
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            type="email"
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !validarLogin }
            onClick={ this.salvarLogin }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  sendLogin: (email) => dispatch(salvarLogin(email)),
});

Login.propTypes = {
  sendLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
