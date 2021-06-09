import React, { Component } from 'react';
import emailReg from '../helpers/emailRegex';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      disabledButton: true,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    console.log(name);
    this.setState({
      [name]: value,
    }, () => this.validateInputs());
  }

  validateInputs() {
    const { email, password } = this.state;
    const minPasswordLength = 6;
    const emailValidate = emailReg.test(email);
    console.log(emailValidate);
    if (emailValidate
    && password.length >= minPasswordLength) {
      this.setState({
        disabledButton: false,
      });
    } else {
      this.setState({
        disabledButton: true,
      });
    }
  }

  render() {
    const { disabledButton, email, password } = this.state;

    return (
      <form
        style={ {
          margin: 'auto',
          marginTop: '100px',
          display: 'flex',
          flexDirection: 'column',
          width: '20%' } }
      >
        <h1 style={ { margin: 'auto' } }>Login</h1>
        <input
          name="email"
          data-testid="input-email"
          defaultValue={ email }
          onChange={ this.handleChange }
          type="email"
          placeholder="Digite seu email"
          required
        />
        <input
          name="password"
          data-testid="input-password"
          defaultValue={ password }
          onChange={ this.handleChange }
          type="password"
          placeholder="Senha"
          required
        />
        <button type="button" disabled={ disabledButton }>Entrar</button>
      </form>
    );
  }
}

export default Login;
