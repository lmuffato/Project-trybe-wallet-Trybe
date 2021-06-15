import React from 'react';

const passwordMinlength = 6;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  verifyEmail(email) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    return regex.test(email);
  }

  verifyPassword(password) {
    if (password.length >= passwordMinlength) {
      return true;
    }

    return false;
  }

  handleClick() {
    this.handleChange();
    this.handleSubmit();
    console.log('alguma coisa');
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="id_login_email">
          Email
          <input
            type="email"
            name="email"
            id="id_login_email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="id_login_password">
          Senha
          <input
            type="password"
            name="password"
            id="id_login_password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="my-action"
          onClick={ this.handleClick }
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
