import React from 'react';

export default function LoginForm() {
  return (
    <form>
      <input
        type="text"
        placeholder="Email:"
        data-testid="email-input"
      />
      <input
        type="password"
        placeholder="Senha:"
        data-testid="password-input"
      />

      <button type="submit">Entrar</button>
    </form>
  );
}
