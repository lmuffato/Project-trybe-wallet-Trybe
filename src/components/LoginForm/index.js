import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { saveUserEmail } from '../../actions';
import { Form, Button, Input } from './style';

const verifyInputs = (email, password) => {
  const minimumOfCharacters = 6;
  const emailVerifier = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.com)/; // https://www.w3resource.com/javascript/form/email-validation.php
  const isEmailValid = emailVerifier.test(email);
  const isPasswordValid = password.length >= minimumOfCharacters;

  const button = document.querySelector('button');
  if (isEmailValid && isPasswordValid) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

const LoginForm = ({ saveEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    verifyInputs(email, password);
  });

  return (
    <Form
      onSubmit={ (e) => {
        e.preventDefault();
        saveEmail(email);
        setShouldRedirect(true);
      } }
    >
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

      <Button
        type="submit"
        disabled
      >
        Entrar
      </Button>

      {shouldRedirect && <Redirect to="/carteira" />}
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(saveUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
