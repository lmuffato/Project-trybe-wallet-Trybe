import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLoginAction } from '../actions';
import '../css/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabledButton: true,
      redirect: false,
    };
    this.login = this.login.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { email, password } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      this.validateInputs();
    }
  }

  validateInputs() {
    const minPasswordLength = 5;
    const { email, password } = this.state;
    const emailRegex = /\S+@\S+\.\S+/; // *https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/ *//
    const validPassword = password.length > minPasswordLength;
    const validEmail = email.match(emailRegex);
    this.setState({ disabledButton: !(validEmail && validPassword) });
  }

  login(event) {
    event.preventDefault();
    this.setState({ redirect: true });
    const { email } = this.state;
    const { userLogin } = this.props;
    userLogin(email);
  }

  render() {
    const { email, password, disabledButton, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <form onSubmit={ this.login }>
        <div className="login">
          <h1>TrybeWallet - Login</h1>
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ (event) => this.setState({ email: event.target.value }) }
            data-testid="email-input"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ (event) => this.setState({ password: event.target.value }) }
            data-testid="password-input"
            placeholder="Senha"
          />
          <button
            disabled={ disabledButton }
            display="none"
            className="btnLogin"
            type="submit"
          >
            Entrar
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (payload) => dispatch(userLoginAction(payload)),
});

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// Construído com ajuda do colega Lucas Lara, durante plantão, na Sala Extra 2;
