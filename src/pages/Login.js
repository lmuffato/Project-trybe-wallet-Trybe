import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logInUser as logInUserAction } from '../actions';

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
    return regexEmail.test(email) && password.length >= minCharPassword - 1;
  }

  handleChange({ target: { name, value } }) {
    const { email, password } = this.state;

    this.setState({
      [name]: value,
      validInputs: this.checkInputs(email, password),
    });
  }

  handleClick(e) {
    e.preventDefault();
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
          <label htmlFor="email">
            Login:
            <input
              type="email"
              data-testid="email-input"
              name="email"
              onChange={ (e) => this.handleChange(e) }
              value={ email }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              onChange={ (e) => this.handleChange(e) }
              value={ password }
            />
          </label>
          <button
            type="submit"
            disabled={ !validInputs }
            onClick={ (e) => this.handleClick(e) }
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

Login.propTypes = {
  history: PropTypes.func.isRequired,
  logInUser: PropTypes.func.isRequired,
  // logInUser: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
