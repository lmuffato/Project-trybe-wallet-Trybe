import React from 'react';
import LoginForm from '../components/LoginForm';
import './style/Login.css';

class Login extends React.Component {
  render() {
    return (
      <main className="login-page">
        <LoginForm />
      </main>
    );
  }
}

export default Login;
