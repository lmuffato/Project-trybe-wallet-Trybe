import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="logo">
          logo
        </section>
        <main>
          <form>
            <input type="text" data-testid="email-input" placeholder="Email" />
            <input type="password" data-testid="password-input" placeholder="Senha" />
            <button type="button">Entrar</button>
          </form>
        </main>
      </div>
    );
  }
}

export default Login;
