import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginValid: false,
    };
    this.loginIsValid = this.loginIsValid.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  loginIsValid() {
    const { email, password } = this.state;
    const validateRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const minCharPassword = 5;
    if (validateRegex.test(email) && password.length >= minCharPassword) {
      this.setState({ loginValid: true });
    }
  }

  handleLogin({ target: { value, id } }) {
    this.setState({ [id]: value });
    this.loginIsValid();
  }

  submitLogin(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { registerLogin, history: { push } } = this.props;
    registerLogin({ email, password });
    push('/carteira');
  }

  render() {
    const { email, password, loginValid } = this.state;
    return (
      <section>
        <h1>Faça seu login</h1>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              data-testid="email-input"
              value={ email }
              placeholder="digite o email"
              onChange={ this.handleLogin }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              data-testid="password-input"
              value={ password }
              placeholder="digite a senha"
              onChange={ this.handleLogin }
            />
          </label>
          <button
            type="submit"
            disabled={ !loginValid }
            onClick={ this.submitLogin }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

const mapDispachToProps = (dispach) => ({
  registerLogin: (userInfo) => dispach(makeLogin(userInfo)),
});

Login.propTypes = {
  registerLogin: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.shape({
    push: PropTypes.func.isRequired,
  })).isRequired,
};

export default connect(null, mapDispachToProps)(Login);
