import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import wallet from '../images/wallet.png';
import { sendEmail as sendEmailAction } from '../actions';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginButton: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value }, () => this.validateFields());
  }

  validateFields() {
    const { email, password } = this.state;
    const sixDigits = 6;
    const regex = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
    const loginButton = password.length >= sixDigits && regex.test(email);
    this.setState({ loginButton });
  }

  renderLoginInput() {
    const { email } = this.state;
    return (
      <label htmlFor="email" className="labels">
        Email
        <input
          type="email"
          className="inputs"
          data-testid="email-input"
          id="email"
          value={ email }
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderPasswordInput() {
    const { password } = this.state;
    return (
      <label htmlFor="password" className="labels">
        Password
        <input
          type="password"
          className="inputs"
          data-testid="password-input"
          id="password"
          value={ password }
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderLoginButton() {
    const { sendEmail } = this.props;
    const { email, loginButton } = this.state;
    return (
      <Link to="/carteira">
        <button
          type="button"
          className="buttons"
          disabled={ !loginButton }
          onClick={ () => sendEmail(email) }
        >
          Entrar
        </button>
      </Link>
    );
  }

  render() {
    return (
      <main className="login-container">
        <form className="input-container">
          <img src={ wallet } className="wallet-picture" alt="wallet" />
          {this.renderLoginInput()}
          {this.renderPasswordInput()}
          {this.renderLoginButton()}
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(sendEmailAction(email)),
});

Login.propTypes = {
  sendEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
