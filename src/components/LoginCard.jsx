import React, { Component } from 'react';

class LoginCard extends Component {
  render() {
    return (
      <div>
        <input type="email" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default LoginCard;
