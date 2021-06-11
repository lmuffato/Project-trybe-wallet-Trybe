import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';
import '../styles/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.changeClassName = this.changeClassName.bind(this);
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.validateInputs());
  }

  validateInputs() {
    const { email, password } = this.state;
    const minPasswordLength = 6;
    const verifyEmail = (/\S+@\S+\.\S+/i).test(email);
    const verifyPassword = password.length >= minPasswordLength;
    if (verifyEmail && verifyPassword) this.setState({ disabled: false });
  }

  changeClassName() {
    const btn = document.getElementById('login-btn');
    btn.classList.remove('disabled');
    btn.classList.add('on');
  }

  render() {
    const { email, password, disabled } = this.state;
    const { sendEmail } = this.props;
    if (!disabled) this.changeClassName();
    return (
      <form>
        <div className="form-container">
          <div className="input-container">
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                required
                data-testid="email-input"
                onChange={ this.handleOnChange }
                value={ email }
              />
            </label>
          </div>
          <div className="input-container">
            <label htmlFor="email">
              Senha:
              <input
                type="password"
                name="password"
                required
                data-testid="password-input"
                onChange={ this.handleOnChange }
                value={ password }
              />
            </label>
          </div>
          <div className="button-container">
            <Link to="/carteira">
              <button
                id="login-btn"
                className="disabled"
                type="button"
                disabled={ disabled }
                onClick={ () => sendEmail({ email, password }) }
              >
                Entrar
              </button>
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (value) => dispatch(login(value)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  sendEmail: PropTypes.func,
}.isRequired;
