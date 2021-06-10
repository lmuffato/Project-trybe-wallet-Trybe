import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {

  };

  const validateEmail = (emailToVal) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(emailToVal);
  };

  const validatePassword = (passwordToVal) => passwordToVal.length >= 6;

  const validate = () => {
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    return emailIsValid && passwordIsValid;
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={ (event) => setEmail(event.target.value) }
          aria-label="email"
          data-testid="email-input"
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={ (event) => setPassword(event.target.value) }
          aria-label="senha"
          data-testid="password-input"
        />
      </div>
      <button type="submit" disabled={ !validate() }>Entrar</button>
    </form>
  );
};

export default Login;
