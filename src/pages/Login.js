import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './walletlogo.png';
import { userLoginSucess } from '../actions';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleInput(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  loginUser() {
    const { email, password } = this.state;
    console.log(email, password);
    const { history, userEmail } = this.props;
    userEmail(email, password);
    history.push('/carteira');
  }

  render() {
    const { password, email } = this.state;
    const regex = /\S+@\S+\.\S\S/;
    const passwordLength = 6;
    return (
      <div className="login">
        <h1 className="title">My Wallet</h1>
        <img className="logo" src={ logo } alt="wallet" />
        <p className="login-word">Login</p>
        <p className="loginEmail">Email:</p>
        <input
          className="input"
          type="email"
          onChange={ this.handleInput }
          data-testid="email-input"
          name="email"
          value={ email }
        />
        <p>Password:</p>
        <input
          className="input"
          type="password"
          onChange={ this.handleInput }
          data-testid="password-input"
          name="password"
          value={ password }
        />
        <button
          type="button"
          className="button"
          onClick={ this.loginUser }
          disabled={ !email.match(regex) || password.length < passwordLength }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email, password) => dispatch(userLoginSucess(email, password)),
});

const mapStateToProps = ({ user: { email, isLogged } }) => ({
  email,
  isLogged,
});

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
