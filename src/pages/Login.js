import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.checkEntries = this.checkEntries.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  checkEntries() {
    const { email, password } = this.state;
    const emailPattern = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi; // reference: https://regexr.com/2ri2c
    const passwordMinLength = 6;
    const checkPassword = password.length >= passwordMinLength;
    const checkEmail = email.match(emailPattern);
    return !(checkEmail && checkPassword);
  }

  render() {
    return (
      <div>
        <h2>Trybe Wallet</h2>
        <p>Login</p>

        <form action="/carteira">
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={ this.handleChange }
            data-testid="email-input"
          />
          <input
            placeholder="Senha"
            name="password"
            type="password"
            onChange={ this.handleChange }
            data-testid="password-input"
          />
          <button disabled={ this.checkEntries() } type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
