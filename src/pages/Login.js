import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import login from '../actions';

const template = (setEmail, setPassword, validate, handleSubmit) => (
  <form
    onSubmit={ handleSubmit }
    className="loginForm container"
  >
    <div className="mb-3">
      <input
        name="email"
        className="form-control"
        type="email"
        placeholder="E-mail"
        onChange={ (event) => setEmail(event.target.value) }
        aria-label="email"
        data-testid="email-input"
      />
    </div>
    <div className="mb-3">
      <input
        name="password"
        className="form-control"
        type="password"
        placeholder="Senha"
        onChange={ (event) => setPassword(event.target.value) }
        aria-label="senha"
        data-testid="password-input"
      />
    </div>
    <button
      className="btn btn-primary"
      type="submit"
      disabled={ !validate() }
    >
      Entrar
    </button>
  </form>
);

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
    history.push('/carteira');
  };

  const validateEmail = (emailToVal) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(emailToVal);
  };

  const validatePassword = (passwordToVal) => /^.{6,}$/.test(passwordToVal);

  const validate = () => {
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    return emailIsValid && passwordIsValid;
  };

  return template(setEmail, setPassword, validate, handleSubmit);
};

Login.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default Login;
