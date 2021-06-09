import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disableButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.validPassword = this.validPassword.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    if (this.validEmail() && this.validPassword() === true) {
      this.setState({
        disableButton: false,
      });
    }
    console.log(this.validEmail());
  }

  validEmail() {
    const { email } = this.state;
    // http://www.regexplained.co.uk/
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    // https://regexr.com/
    const regex = /^\w+@\w+\.com$/;
    return regex.test(email);
  }

  validPassword() {
    const { password } = this.state;
    const rightLength = 5;
    if (password.length >= rightLength) {
      return true;
    }
    return false;
  }

  render() {
    const { disableButton } = this.state;
    return (
      <div>
        <input
          name="email"
          type="text"
          data-testid="email-input"
          placeholder="name@email.com"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          data-testid="password-input"
          placeholder="senha"
          type="password"
          onChange={ this.handleChange }
        />
        <button type="submit" disabled={ disableButton }>Entrar</button>
      </div>
    );
  }
}

export default Login;
