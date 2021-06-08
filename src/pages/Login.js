import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: '',
  //   };
  // }

  render() {
    // const { email, password } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="E-mail"
            data-testid="email-input"
            // onChange={ (e) => this.setState({ email: e.target.value }) }
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            // onChange={ (e) => this.setState({ password: e.target.value }) }
          />
        </div>
        <div>
          <Link to="/carteira">Entrar</Link>
        </div>
      </div>
    );
  }
}

export default Login;
