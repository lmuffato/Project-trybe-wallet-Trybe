import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <h1>Trybe Wallet</h1>
        <form>
          <input
            type="email"
            placeholder="digite seu e-mail neste campo"
            data-testid="email-input"
            // value={ email }
            // onChange
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="digte sua senha neste campo"
            // value={ password }
            // onChange
          />
          <button
            type="button"
          // onClick
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

export default Login;
