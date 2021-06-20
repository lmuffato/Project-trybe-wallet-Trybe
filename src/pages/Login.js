import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      xablau: true,
    };
    this.handlechenge = this.handlechenge.bind(this);
  }

  handlechenge(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    const { email, password } = this.state;
    const regexEmail = /\w+@\w+\.\w+/gi.test(email);
    const regexSenha = /(.{5,})/gi.test(password);
    if (regexEmail && regexSenha) {
      this.setState({
        xablau: false,
      });
    }
  }

  render() {
    const { xablau } = this.state;
    return (
      <div>
        <form>
          <input
            name="email"
            type="email"
            data-testid="email-input"
            placeholder="email"
            onChange={ this.handlechenge }
          />
          <input
            name="password"
            type="password"
            data-testid="password-input"
            placeholder="senha"
            onChange={ this.handlechenge }
          />
          <Link to="/carteira">
            <button type="button" disabled={ xablau }>
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
