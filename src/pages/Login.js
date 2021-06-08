import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <forms>
          <input data-testid="email-input" type="email" />
          <input data-testid="password-input" type="password" />
          <button type="submit">Entrar</button>
        </forms>
      </div>
    );
  }
}

export default Login;
