import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    const button = document.querySelector('#loginButton');
    const lengthNumber = 6;
    if (!value.includes('.com') && value.length >= lengthNumber) {
      button.disabled = true;
    }
    if (value.includes('.com') && value.length >= lengthNumber) {
      button.disabled = false;
    }
    if (value.includes('.com') && value.length < lengthNumber) {
      button.disabled = true;
    }
  }

  render() {
    return (
      <section>
        <form>
          <label htmlFor="Email">
            {' '}
            Email
            <input
              data-testid="email-input"
              id="Email"
              placeholder="Insert e-mail"
              type="email"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="Password">
            {' '}
            Password
            <input
              data-testid="password-input"
              id="Password"
              placeholder="Insert password"
              type="text"
              min="6"
              onChange={ this.handleChange }
              required
            />
          </label>
          <button type="submit" id="loginButton" disabled>
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
