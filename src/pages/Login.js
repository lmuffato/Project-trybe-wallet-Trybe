import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { userLogin } from '../actions';

import { checkEmail, checkPass } from '../func/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const setUser = () => {
    const user = {
      email,
      password,
    };
    dispatch(userLogin(user));
    setLogin(true);
  };
  const checkLogin = () => checkEmail(email) && checkPass(password);
  return (
    <div>
      <input
        type="email"
        data-testid="email-input"
        onChange={ ({ target: { value } }) => setEmail(value) }
      />
      <input
        type="password"
        data-testid="password-input"
        onChange={ ({ target: { value } }) => setPassword(value) }
      />
      <button type="button" disabled={ !checkLogin() } onClick={ setUser }>
        Entrar
      </button>
      {login && <Redirect to="/carteira" />}
    </div>
  );
};
export default Login;
