import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <section>
          <input
            type="text"
            placeholder="email"
            data-testid="email-input"
          />
          <input
            type="password"
            placeholder="senha"
            data-testid="password-input"
          />
          <button type="button">Entrar</button>
        </section>
      </div>
    );
  }
}
