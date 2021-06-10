import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getEmailAction from '../../actions/getEmail.action';

function Login({ emailDispatch }) {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const numberMagic = 6;

  function handleUserEmail(evt) {
    setUserEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault(); emailDispatch(userEmail); setRedirect(true);
      } }
    >
      <input
        data-testid="email-input"
        type="email"
        placeholder="name@example.com"
        value={ userEmail }
        onChange={ handleUserEmail }
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="atleast 6 characters"
        value={ password }
        onChange={ handlePassword }
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

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(getEmailAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
