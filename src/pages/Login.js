import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <p>Olá, essa é a tela de login</p>
        <input
          data-testid="password-input"
          type="password"
          required
          placeholder="Digite sua senha"
        />
        <input
          data-testid="email-input"
          type="email"
          required
          placeholder="Digite seu email"
        />
        <button type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
