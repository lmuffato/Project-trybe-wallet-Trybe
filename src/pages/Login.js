import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      passWord: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });// faz desestruturação do das linhas abaixo { email, passWord }
  }

  buttonDisabled() {
    const { email, passWord } = this.state;
    const emailRegex = /\S+@\S+\.\S+/; // regex  em https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const passMaxLength = 6;
    if (emailRegex.test(email) === true && passWord.length >= passMaxLength) {
      return false;
    }
    return true;
  } // auxilio e explicação do Lucas Lara no plantão

  render() {
    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Email
            <input
              type="text"
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              placeholder="E-mail"
            />
          </label>

          <label htmlFor="password-input">
            Senha
            <input
              type="text"
              name="passWord"
              data-testid="password-input"
              onChange={ this.handleChange }
              placeholder="Password"
            />
          </label>

          <button type="button" disabled={ this.buttonDisabled() }>
            <Link to="/carteira">
              Entrar
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
