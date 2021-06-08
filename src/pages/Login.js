import React, { useState } from 'react';

function Login() {
  const [userEmail, setUserEmail] = useState({ email: '' });

  const handleChangeEmail = ({ target: { value } }) => {
    setUserEmail({ email: value });
  };

  return (
    <div>
      <ul>
        <li>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            data-testid="email-input"
            onChange={ handleChangeEmail }
            value={ userEmail.email }
          />
        </li>
        <li>
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Senha"
          />
        </li>
      </ul>
      <button
        type="button"
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
