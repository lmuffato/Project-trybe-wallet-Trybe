import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        {/* <label htmlFor="id-email"> */}
        {/* E-mail */}
        <input type="email" data-testid="email-input" />
        {/* </label> */}
        <br />
        {/* <label htmlFor="id-senha"> */}
        {/* Senha */}
        <input type="number" data-testid="password-input" />
        {/* </label> */}
        <br />
        <button type="button">Entrar</button>
        <h1>Login</h1>
      </>
    );
  }
}

export default Login;
