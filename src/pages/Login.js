import React from 'react';
import SignInButton from '../components/SignInButton';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailOk: false,
    };
    this.verifyEmail = this.verifyEmail.bind(this);
  }

  verifyEmail(e) {
    const regex = /\S+@\S+\.\S+/;
    const email = e.target.value;
    if (regex.test(email) === true) {
      this.setState({ emailOk: true });
    }
  }

  render() {
    const { emailOk } = this.state;
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
                onChange={ this.verifyEmail }
              />
            </div>
            <div className="field">
              <h4 subtitle is-3 is-spaced> senha </h4>
              <input
                className="input is-sucess"
                type="password"
                name="login"
                placeholder="#lesgoTrybe"
                data-testid="password-input"
              />
            </div>
          </label>
          <SignInButton emailCorrect={ emailOk } />
        </form>
      </main>);
  }
}

export default Login;
