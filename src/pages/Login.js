import React from 'react';
import InputLogin from '../components/InputLogin';

class Login extends React.Component {
  render() {
    return (
      <section className="container">
        <main className="card">
          <h1 className="card-header">TrybeWallet</h1>
          <InputLogin />
          <button
            className="enter-bttn"
            type="submit"
          >
            <h3>Entrar</h3>
          </button>
        </main>
      </section>
    );
  }
}

export default Login;
