import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { userLogin } from '../actions';

import { checkEmail, checkPassword } from '../utils/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const addUser = () => {
    const user = {
      email,
      password,
    };

    dispatch(userLogin(user));
  };

  const checkLogin = () => checkEmail(email) && checkPassword(password);

  return (
    <div>
      <input
        type="email"
        data-testid="email-input"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        type="password"
        data-testid="password-input"
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button type="button" disabled={ !checkLogin() } onClick={ addUser }>
        <Link to="/carteira">Entrar</Link>
      </button>
    </div>
  );
};

export default Login;
