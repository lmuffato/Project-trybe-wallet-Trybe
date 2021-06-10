/* eslint-disable max-lines-per-function */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [emailInput, setEmailInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [login, setLogin] = React.useState(false);

  const dispatch = useDispatch();

  const checkEmail = () => {
    dispatch({
      type: 'SET_EMAIL',
      payload: { email: emailInput },
    });
    return (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(emailInput));
  };
  const minLength = 6;
  const checkPass = () => passwordInput.length >= minLength;

  const handleClick = () => {
    setLogin(true);
  };

  return (
    <div>
      <input
        name="email"
        type="email"
        data-testid="email-input"
        value={ emailInput }
        onChange={ (e) => setEmailInput(e.target.value) }
      />
      <input
        name="password"
        type="password"
        data-testid="password-input"
        minLength="6"
        onChange={ (e) => setPasswordInput(e.target.value) }
      />
      <button
        type="button"
        onClick={ handleClick }
        disabled={ !(checkEmail() && checkPass()) }
      >
        Entrar
      </button>
      {login && <Redirect to="/carteira" />}
    </div>
  );
};

export default Login;
