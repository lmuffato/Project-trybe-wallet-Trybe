import React, { useRef, useState } from 'react';

const isValid = (emailValue, passwordValue) => {
  const check = /(^\D\w+)@\w+(\.)\w+/gi.test(emailValue)
  && /(.{6,})/gi.test(passwordValue);
  return check;
};

const checkPassEmail = (email, password, btnStatus) => {
  if (isValid(email, password)) {
    btnStatus(() => ({ disabled: false }));
  } else {
    btnStatus(() => ({ disabled: true }));
  }
};

function Login() {
  const inputPassword = useRef(null);
  const inputEmail = useRef(null);
  const [userEmail, setUserEmail] = useState({ email: '' });
  const [btnDisabled, setBtnDisabled] = useState({ disabled: true });

  const handleChange = ({ target: { name, value } }, valitation) => {
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    if (name === 'email') {
      setUserEmail({ [name]: value });
    }
    valitation(email, password, setBtnDisabled);
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        data-testid="email-input"
        onChange={ (event) => handleChange(event, checkPassEmail) }
        value={ userEmail.email }
        ref={ inputEmail }
      />
      <input
        type="password"
        name="password"
        data-testid="password-input"
        placeholder="Senha"
        onChange={ (event) => handleChange(event, checkPassEmail) }
        ref={ inputPassword }
      />
      <button
        type="button"
        disabled={ btnDisabled.disabled }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
