import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkPasswordAndEmail = this.checkPasswordAndEmail.bind(this);
  }

  checkPasswordAndEmail(password, email) {
    const six = 6;
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const checkEmail = re.test(String(email).toLowerCase());
    if (password.length >= six && checkEmail) {
      return false;
    }
    return true;
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    const error = <Link to="/carteira" className="errorLink">Entrar</Link>;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Digite seu e-mail"
          value={ email }
          onChange={ this.handleChange }
          name="email"
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Digite sua senha"
          value={ password }
          onChange={ this.handleChange }
          name="password"
        />
        {this.checkPasswordAndEmail(password, email)
          ? <button type="button" disabled>{error}</button>
          : <button type="button"><Link to="/carteira">Entrar</Link></button>}
      </form>
    );
  }
}

export default Login;
