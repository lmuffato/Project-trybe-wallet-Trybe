import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleSubmmit = this.handleSubmmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  validateEmail() {
    const { email } = this.state;
    return (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email));
  }

  validatePassword() {
    const { password } = this.state;
    return (/[a-z0-9._%+-]{6}/.test(password));
  }

  handleSubmmit() {
    const { email } = this.state;
    const { loginToStore } = this.props;
    loginToStore(email);
    this.setState({
      submitted: true,
    });
  }

  render() {
    const { email, password, submitted } = this.state;
    if (submitted) return <Redirect to="/carteira" />;
    return (
      <div>
        <label htmlFor="email-input">
          E-mail:
          <input
            type="text"
            id="email-input"
            name="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            id="password-input"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <div>
          <button
            type="button"
            disabled={ !(this.validatePassword() && this.validateEmail()) }
            onClick={ this.handleSubmmit }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginToStore: (email) => dispatch((loginAction(email))),
});

Login.propTypes = {
  loginToStore: PropTypes.func,
}.isRequired;
export default connect(null, mapDispatchToProps)(Login);
