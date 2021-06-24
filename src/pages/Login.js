import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.checkEntries = this.checkEntries.bind(this);
    this.redirectToWallet = this.redirectToWallet.bind(this);

    this.state = {
      email: '',
      password: '',
      shouldRedirect: false,
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  checkEntries() {
    const { email, password } = this.state;
    const emailPattern = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi; // reference: https://regexr.com/2ri2c
    const passwordMinLength = 6;
    const checkPassword = password.length >= passwordMinLength;
    const checkEmail = email.match(emailPattern);
    return !(checkEmail && checkPassword);
  }

  redirectToWallet() {
    const { email } = this.state;
    const { toLogin } = this.props;
    toLogin(email);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/carteira" />;
    return (
      <div>
        <h2>Trybe Wallet</h2>
        <p>Login</p>

        <form>
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={ this.handleChange }
            data-testid="email-input"
          />
          <input
            placeholder="Senha"
            name="password"
            type="password"
            onChange={ this.handleChange }
            data-testid="password-input"
          />
          <button
            disabled={ this.checkEntries() }
            type="button"
            onClick={ this.redirectToWallet }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toLogin: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  toLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
