import React, { useEffect, useState } from 'react';
import { Form, Button, Input } from './style';

const verifyInputs = (email, password) => {
  const minimumOfCharacters = 6;
  const emailVerifier = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.com)/; // https://www.w3resource.com/javascript/form/email-validation.php
  const isEmailValid = emailVerifier.test(email);
  const isPasswordValid = password.length >= minimumOfCharacters;

  if (isEmailValid && isPasswordValid) {
    const button = document.querySelector('button');
    button.disabled = false;
  }
};

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    verifyInputs(email, password);
  });

  return (
    <Form>
      <Input
        type="email"
        placeholder="Email:"
        data-testid="email-input"
        onChange={ ({ target }) => setEmail(target.value) }
        value={ email }
      />
      <Input
        type="password"
        placeholder="Senha:"
        data-testid="password-input"
        onChange={ ({ target }) => setPassword(target.value) }
        value={ password }
      />

      <Button type="submit" disabled>Entrar</Button>
    </Form>
  );
}
