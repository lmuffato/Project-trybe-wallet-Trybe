import React, { useState } from 'react';

function Login() {
  const [userLogin, setUserLogin] = useState({ email: '', password: '' });

  const handleChangeUserLogin = ({ target: { name, value } }) => {
    setUserLogin((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <ul>
        <li>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="E-mail"
            onChange={ handleChangeUserLogin }
            value={ userLogin.email }
          />
        </li>
        <li>
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ handleChangeUserLogin }
            value={ userLogin.password }
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

// class Login extends React.Component {
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }
