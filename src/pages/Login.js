import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      validarEmail: false,
      password: '',
      validarPassword: false,
    };

    this.hundleChange = this.hundleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  hundleChange({ target }) {
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

  render() {
    const { email, password, validarEmail, validarPassword } = this.state;
    const { login } = this.props;
    const validarLogin = (validarEmail && validarPassword);

    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.hundleChange }
          />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.hundleChange }
          />
        </form>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !validarLogin }
            onClick={ () => login({ email, password }) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
