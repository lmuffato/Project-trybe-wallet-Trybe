import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

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

  render() {
    const { email, password, disabled } = this.state;
    const { sendEmail } = this.props;
    return (
      <form>
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
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => sendEmail({ email, password }) }
          >
            Entrar
          </button>
        </Link>
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
