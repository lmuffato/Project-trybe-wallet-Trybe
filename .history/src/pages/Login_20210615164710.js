import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="email-input" />
        <input type="password" data-testid="password-input" />

      </div>);
  }
}

export default Login;
