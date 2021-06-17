import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from '../actions/index';
import './components/CSS/login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  // https://sentry.io/answers/forget-set-state-is-async
  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.validateInput();
    });
  }

  validateInput() {
    const { email, password } = this.state;
    const referenceEmail = /\S+@\S+\.\S+/;
    const validEmail = referenceEmail.test(email);
    const numberMax = 6;
    const validPassword = () => {
      if (password.length >= numberMax) {
        return true;
      }
      return false;
    };
    if (validEmail && validPassword() === true) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  render() {
    const { email, password, isDisabled } = this.state;
    const { login } = this.props;
    const validateEmail = /\S+@\S+\.\S+/;
    return (
      <div className="login">
        <h2>Ttrybe Wallet</h2>
        <h3>Login</h3>
        <form className="form-login">
          <input
            className="inputs"
            data-testid="email-input"
            name="email"
            placeholder="Email"
            onChange={ this.handleChange }
            pattern={ validateEmail }
            title="Formato de e-mail não aceito"
            type="email"
            required
            value={ email }
          />
          <input
            className="inputs"
            data-testid="password-input"
            minLength="6"
            name="password"
            onChange={ this.handleChange }
            placeholder="Senha"
            type="password"
            required
            value={ password }
          />
          <Link to="/carteira">
            <button
              className="button-login"
              onClick={ () => login(email, password) }
              type="button"
              disabled={ isDisabled }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispath) => ({
  login: (event) => dispath(loginAction(event)),
});

Login.propTypes = {
  login: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
