import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import signIn from '../actions/index';
import SignInButton from '../components/SignInButton';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      credentialsOk: false,
      email: '',
      password: '',
    };
    this.verifyCredentials = this.verifyCredentials.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  verifyCredentials() {
    const { email, password } = this.state;
    const emailCheck = /\S+@\S+\.\S+/;
    const passwordSize = 6;
    // referência ao Jonathan Fernandes, que me ajudou com esta condição
    if (emailCheck.test(email) === true && password.length >= passwordSize) {
      this.setState({ credentialsOk: true });
    }
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
    this.verifyCredentials();
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
    this.verifyCredentials();
  }

  handleSubmit() {
    const { email } = this.state;
    const { signInDispatch } = this.props;
    signInDispatch({ email });
  }

  render() {
    const { credentialsOk } = this.state;
    return (
      <main className="login-main">
        <form method="POST" className="form-login box">
          <label htmlFor="login">
            <h3 className="title is-3 is-spaced login-text"> Login </h3>
            <div className="field">
              <h4 subtitle is-3 is-spaced> Email </h4>
              <input
                className="input is-sucess"
                type="text"
                name="login"
                placeholder="adalovelace@trybe.com"
                data-testid="email-input"
                onChange={ this.handleEmail }
              />
            </div>
            <div className="field">
              <h4 subtitle is-3 is-spaced> senha </h4>
              <input
                className="input is-sucess"
                type="password"
                name="login"
                placeholder="#lesgoTrybe"
                onChange={ this.handlePassword }
                data-testid="password-input"
              />
            </div>
          </label>
          <SignInButton
            emailCorrect={ credentialsOk }
            action={ this.handleSubmit }
          />
        </form>
      </main>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInDispatch: (state) => dispatch(signIn(state)),
});

Login.propTypes = {
  signInDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
