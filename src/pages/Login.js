import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section className="login-page">
        <form className="login-form-container">
          <span className="login-title">Login</span>
          <div className="login-input-container">
            <input
              type="email"
              placeholder="E-mail"
              data-testid="email-input"
              className="form-control"
            />
            <input
              type="password"
              placeholder="Password"
              data-testid="password-input"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn login-button">
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
