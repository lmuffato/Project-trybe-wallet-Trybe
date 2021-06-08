import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <div>Login</div>
        <label htmlFor="user-email">
          <input
            data-testid="email-input"
            placeholder="nome@email.com"
            id="user-email"
            type="email"
            /* value=
            onChance= */
          />
        </label>

        <label htmlFor="user-passw">
          <input
            data-testid="password-input"
            placeholder="nome@email.com"
            id="user-passw"
            type="text"
            /* value=
            onChance= */
          />
        </label>
        <button type="button"/* onCLick= */>Entrar</button>
      </section>
    );
  }
}

export default Login;
