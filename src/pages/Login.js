import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const NUMBERSIX = 6;

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  checkEmailAndPassword(email, password) {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const result = re.test(String(email).toLowerCase());
    if (password.length >= NUMBERSIX && result) {
      return false;
    }
    return true;
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState(({
      [name]: value,
    }));
  }

  render() {
    const { email, password } = this.state;
    const error = <Link to="/carteira" className="Error_link">Entrar</Link>;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            data-testid="email-input"
            id="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="Senha">
          Senha:
          <input
            name="password"
            id="Senha"
            type="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        {this.checkEmailAndPassword(email, password)
          ? <button disabled type="button">{error}</button>
          : <button type="button"><Link to="/carteira">Entrar</Link></button>}
      </form>
    );
  }
}

export default Login;
