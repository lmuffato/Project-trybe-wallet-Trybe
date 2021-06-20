import React from 'react';

class InputLogin extends React.Component {
  render() {
    return (
      <form className="login-form">
        <label htmlFor="email">
          <input
            className="login-form-input"
            data-testid="email-input"
            type="text"
            email="email"
            placeholder="rico@money.com"
          />
        </label>
        <label htmlFor="password">
          <input
            className="login-form-input"
            data-testid="password-input"
            type="password"
            password="password"
            placeholder="Password"
          />
        </label>
      </form>
    );
  }
}

export default InputLogin;
