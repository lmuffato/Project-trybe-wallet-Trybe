import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import
{
  setEmailAction,
  setPasswordAction,
  emailIsValidAction,
  passwordIsValidAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.emailHandleChange = this.emailHandleChange.bind(this);
    this.passwordHandleChange = this.passwordHandleChange.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
  }

  checkStatus() {
    const { emailValid, passwordValid } = this.props;
    const bt = document.getElementById('buttonSubmit');

    if ((emailValid) && (passwordValid)) {
      bt.disabled = false;
    }
  }

  emailHandleChange(event) {
    const { value } = event.target;
    const { setEmailValid, setEmail } = this.props;

    this.checkStatus();

    setEmail(value);

    if ((value).includes('@')
      && !(value).includes('@@')
      && (value).includes('.')
      && (value.includes('.com'))
    ) {
      setEmailValid();
    }
  }

  passwordHandleChange(event) {
    const { value } = event.target;
    const { setPassword, setPasswordValid } = this.props;
    const MIN_PASS_REQUIRED = 5;
    this.checkStatus();

    setPassword(value);

    if ((value.length) >= MIN_PASS_REQUIRED) {
      setPasswordValid();
    }
  }

  render() {
    return (
      <center>
        <form>
          <h1>Login</h1>
          <label htmlFor="email-input">
            Email:
            <input
              type="email"
              name="emailInput"
              data-testid="email-input"
              onChange={ this.emailHandleChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              minLength="6"
              name="password-input"
              data-testid="password-input"
              onChange={ this.passwordHandleChange }
            />
          </label>
          <br />
          <br />
          <Link to="/carteira">
            <button
              id="buttonSubmit"
              type="submit"
              onClick={ this.handleClick }
              disabled
            >
              Entrar
            </button>
          </Link>
        </form>
      </center>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmailValid: (state) => dispatch(emailIsValidAction(state)),
  setPasswordValid: (state) => dispatch(passwordIsValidAction(state)),
  setEmail: (state) => dispatch(setEmailAction(state)),
  setPassword: (state) => dispatch(setPasswordAction(state)),
});

const mapStateToProps = (state) => ({
  emailValid: state.user.emailIsValid,
  passwordValid: state.user.passwordIsValid,
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setEmailValid: PropTypes.func.isRequired,
  setPasswordValid: PropTypes.func.isRequired,
  emailValid: PropTypes.bool.isRequired,
  passwordValid: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
