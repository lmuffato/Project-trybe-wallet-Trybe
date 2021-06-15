import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      isValidEmail:false,
      isValidSenha:false,

    };
  }

  validEmail = ({ target: {value}}) => {

  }
  render() {
    console.log(this.state)
    return (
      <div>
        <input type="text" data-testid="email-input" placeholder="Email" />
        <input type="password" data-testid="password-input" placeholder="Senha" />
        <button type="button">Entrar</button>

      </div>);
  }
}

export default Login;
