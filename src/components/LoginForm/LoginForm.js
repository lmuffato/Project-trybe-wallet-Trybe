import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';

import getEmailAction from '../../actions/getEmail.action';

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const numberMagic = 6;

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault(); dispatch(getEmailAction(userEmail)); setRedirect(true);
      } }
    >
      <input
        data-testid="email-input"
        type="email"
        placeholder="name@example.com"
        value={ userEmail }
        onChange={ (e) => setUserEmail(e.target.value) }
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="atleast 6 characters"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <input
        type="submit"
        value="Entrar"
        disabled={
          !/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(userEmail)
          || password.length < numberMagic
        }
      />
      { redirect ? <Redirect to="/carteira" /> : '' }
    </form>
  );
}
