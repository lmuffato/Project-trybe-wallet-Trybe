import React from 'react';
import { connect } from 'react-redux';
import { addEmail } from '../actions';

const passwordMinlength = 6;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',

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
    const { email, name } = this.state;
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="id_login_email">
          Email
          <input
            type="text"
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
            type="text"
            name="name"
            id="id_login_password"
            data-testid="password-input"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="my-action"
          onClick={ this.handleClick }
          type="button"
          disabled
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (payload) => dispatch(addEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
