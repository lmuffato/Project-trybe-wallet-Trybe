import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginAction from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
      shouldRedirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordVerification = this.passwordVerification.bind(this);
    this.handleEmailVerification = this.emailVerification.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  passwordVerification() {
    const { password } = this.state;
    const passwordMinLength = 6;
    return password.length >= passwordMinLength;
  }

  emailVerification() {
    const { email } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.com$/; // para ler esse regex use: http://www.regexplained.co.uk/
    return emailRegex.test(email);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value }, () => {
      if (this.passwordVerification() && this.emailVerification()) {
        this.setState({ isButtonDisabled: false });
      } else {
        this.setState({ isButtonDisabled: true });
      }
    });
  }

  handleLogin() {
    const { email } = this.state;
    const { authLogin } = this.props;
    authLogin(email);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { email, password, isButtonDisabled, shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/carteira" />;
    return (
      <form>
        <label htmlFor="email">
          <input
            type="email"
            value={ email }
            placeholder="email@email.com"
            data-testid="email-input"
            name="email"
            id="email"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            value={ password }
            data-testid="password-input"
            name="password"
            id="password"
            minLength="6"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <button
          type="button"
          disabled={ isButtonDisabled }
          onClick={ this.handleLogin }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  authLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  authLogin: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

// Referências para o regex:
// https://trybecourse.slack.com/archives/C01L16B9XC7/p1623175696043700
// https://github.com/tryber/sd-010-a-project-trybewallet/pull/45/files
