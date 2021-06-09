import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      logginDisabled: true,
      shouldRedirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.emailValidate = this.emailValidate.bind(this);
    this.passwordValidate = this.passwordValidate.bind(this);
    this.loginAction = this.loginAction.bind(this);
  }

  // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  emailValidate() {
    const { email } = this.state;
    const regExp = /^\w+@\w+.com$/;

    return regExp.test(email);
  }

  passwordValidate() {
    const { password } = this.state;
    const passwordMinimumLength = 6;

    return password.length >= passwordMinimumLength;
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value }, () => {
      if (this.emailValidate() && this.passwordValidate()) {
        this.setState({ logginDisabled: false });
      } else {
        this.setState({ logginDisabled: true });
      }
    });
  }

  loginAction() {
    const { email } = this.state;
    const { userStore } = this.props;
    userStore(email);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { email, password, logginDisabled, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/carteira" />;

    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          disabled={ logginDisabled }
          onClick={ this.loginAction }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  userStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userStore: (email) => dispatch(userEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
