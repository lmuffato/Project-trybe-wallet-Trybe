import React from 'react';
import { Form, Button, Input } from './style';

export default function LoginForm() {
  return (
    <Form>
      <Input
        type="text"
        placeholder="Email:"
        data-testid="email-input"
      />
      <Input
        type="password"
        placeholder="Senha:"
        data-testid="password-input"
      />

      <Button type="submit">Entrar</Button>

    </Form>
  );
}
