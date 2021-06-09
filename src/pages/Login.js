import React from 'react';
import { Form, Button } from 'react-bootstrap';

class Login extends React.Component {
  render() {
    return (
      <section className="login-page">
        <Form className="login-form-container">
          <Form.Label className="login-title">Login</Form.Label>
          <Form.Group className="login-input-container">
            <Form.Control
              type="email"
              placeholder="E-mail"
              data-testid="email-input"
            />
            <Form.Control
              type="password"
              placeholder="Password"
              data-testid="password-input"
            />
          </Form.Group>
          <Button type="submit" className="login-button">
            Entrar
          </Button>
        </Form>
      </section>
    );
  }
}

export default Login;
