import React from 'react';

class Login extends React.Component {
  render() {
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
          <button type="button" className="button is-success"> Entrar </button>
        </form>
      </main>);
  }
}

export default Login;
