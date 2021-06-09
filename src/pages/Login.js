import React from 'react';
import { connect } from 'react-redux';
import { logInUserAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.checkInputs = this.checkInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      validInputs: false,
      email: '',
      password: '',
    };
  }

  checkInputs(email, password) {
    const regexEmail = /\S+@\S+\.\S+/;
    const minCharPassword = 6;
    return regexEmail.test(email) && password >= minCharPassword;
  }

  handleChange({ name, value }) {
    const { email, password } = this.state;

    this.setState({
      [name]: value,
      validInputs: this.checkInputs(email, password),
    });
  }

  handleClick() {
    prevent.default();
    const { email } = this.state;
    const { history, logInUser } = this.props;
    logInUser(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, validInputs } = this.state;

    return (
      <div>
        <h1>Trybe Wallet</h1>
        <form>
          <label htmlFor="input-email">
            Login:
            <input
              type="email"
              data-testid="email-input"
              name="input-email"
              value={ email }
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <label htmlFor="input-password">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              name="input-password"
              value={ password }
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <button
            type="submit"
            disabled={ !validInputs }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logInUser: (email) => dispatch(logInUserAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
