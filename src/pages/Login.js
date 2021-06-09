import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  myButton() {
    const { email } = this.state;
    const { emailDispatch } = this.props;
    return (
      <button type="button" onClick={ () => emailDispatch(email) }>
        <Link to="/carteira">Entrar</Link>
      </button>
    );
  }

  render() {
    const { email, password } = this.state;
    const maxPassLength = 6;
    const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return (
      <fieldset>
        <legend>Login</legend>
        <form>
          <label htmlFor="email">
            E-mail
            <input
              name="email"
              id="email"
              type="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              value={ email }
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              name="password"
              id="password"
              type="password"
              data-testid="password-input"
              onChange={ this.handleChange }
              value={ password }
            />
          </label>
          {
            password.length >= maxPassLength && email.match(emailValidation)
              ? this.myButton()
              : <button type="button" disabled><Link to="/carteira">Entrar</Link></button>
          }
        </form>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(newEmail(email)) });

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
