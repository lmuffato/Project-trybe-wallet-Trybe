import React from 'react';

class Login extends React.Component {
  render() {
    return (

      <section className="loginContainer">
        <header className="loginHeader">
          <h1>Trybe Wallet</h1>
        </header>
        <form className="login">
          <input type="text" placeholder="Email" testid="email-input" />
          <input type="password" placeholder="Password" testid="password-input" />
          <input className="button" type="button" value="Entrar" />
        </form>
      </section>
    );
  }
}

export default Login;
