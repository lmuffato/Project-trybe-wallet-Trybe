import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.btnClick = this.btnClick.bind(this);
    this.state = {
      disabled: true,
      email: '',
      password: '',
      emailValidation: false,
      passwordValidation: false,
    };
  }

  validateButton() {
    const { emailValidation, passwordValidation } = this.state;
    if (emailValidation && passwordValidation) {
      this.setState({ disabled: false });
    } else { this.setState({ disabled: true }); }
  }

  validateEmail(event) {
    const { value } = event.target;
    this.setState({ email: value });
    const { email } = this.state;
    const eForm = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/;
    if (email.match(eForm)) {
      this.setState({ emailValidation: true }, () => {
        this.validateButton();
      });
    } else this.setState({ emailValidation: false });
  }

  validatePassword(event) {
    const { value } = event.target;
    const { password } = this.state;
    this.setState({ password: value });
    const PASSWORD_LENGTH = 5;
    if (password.length >= PASSWORD_LENGTH) {
      this.setState({ passwordValidation: true }, () => {
        this.validateButton();
      });
    } else { this.setState({ passwordValidation: false }); }
  }

  btnClick() {
    const { userDispatch } = this.props;
    const { email } = this.state;
    userDispatch(email);
  }

  render() {
    const { disabled, password, email } = this.state;
    return (
      <>
        <input
          type="text"
          name="email"
          onChange={ this.validateEmail }
          value={ email }
          placeholder="User"
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          onChange={ this.validatePassword }
          value={ password }
          placeholder="Password"
          data-testid="password-input"
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ this.btnClick }
          >
            Entrar
          </button>
        </Link>
      </>
    );
  }
}

Login.propTypes = {
  userDispatch: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  userDispatch: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
