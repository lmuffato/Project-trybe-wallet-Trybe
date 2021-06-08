import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <form htmlFor="email">
          <input
            data-testid="email-input"
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu E-mail"
          />
        </form>
        <form htmlFor="senha">
          <input
            data-testid="password-input"
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite seu senha"
          />
        </form>
        <button type="button">Entrar</button>
      </>
    );
  }
}

export default Login;
