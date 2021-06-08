import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <center>
        <h1>Login</h1>
        <label htmlFor="email-input">
          Email:
          <input
            type="text"
            name="emailInput"
            data-testid="email-input"
          />
        </label>

        <br />
        <br />

        <label htmlFor="password-input">
          Senha:
          <input
            type="text"
            name="password-input"
            data-testid="password-input"
          />
        </label>

        <br />
        <br />

        <button
          type="submit"
          // onClick="#"
        >
          Entrar
        </button>
      </center>
    );
  }
}

export default Login;
