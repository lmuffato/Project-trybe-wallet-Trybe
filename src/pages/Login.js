import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="Email">
            <input
              data-testid="email-input"
              id="email-input"
              placeholder="Insert e-mail"
              type="text"
              required
            />
          </label>

          <label htmlFor="Password">
            <input
              data-testid="password-input"
              id="password-input"
              placeholder="Insert password"
              type="text"
              required
            />
          </label>
        </form>
        <button type="submit">
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
