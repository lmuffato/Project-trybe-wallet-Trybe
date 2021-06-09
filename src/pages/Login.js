import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isValidEmail: false,
      isValidPassword: false,
      isLogged: false,
    };

    this.toggleButtonDisabled = this.toggleButtonDisabled.bind(this);
    this.handleVerifyEmail = this.handleVerifyEmail.bind(this);
    this.handleVerifyPassword = this.handleVerifyPassword.bind(this);
    this.handleSetEmail = this.handleSetEmail.bind(this);
  }

  toggleButtonDisabled() {
    const { isValidEmail, isValidPassword } = this.state;
    if (isValidEmail && isValidPassword) {
      // console.log('habilitando o botão');
      // document.querySelector('#btn-entrar').setAttribute('disabled', 'false');
      return false;
    }
    // console.error('desabilitando o botão');
    return true;
  }

  handleSetEmail({ target: { value } }) {
    this.setState({
      email: value,
    });
  }

  handleSetPassword({ target: { value } }) {
    this.setState({
      password: value,
    });
  }

  handleVerifyEmail(ev) {
    const isValidEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i
      .test(ev.target.value);
    this.setState({
      isValidEmail,
    }, this.toggleButtonDisabled);
  }

  handleVerifyPassword(ev) {
    const MAX_VALUE = 6;
    this.setState({
      isValidPassword: ev.target.value.length >= MAX_VALUE,
    }, this.toggleButtonDisabled);
  }

  render() {
    const { email, password, isLogged } = this.state;
    const { login } = this.props;
    return (
      <>
        { isLogged && <Redirect to="/carteira" /> }
        <form
          onSubmit={ (ev) => {
            ev.preventDefault();
            login(email);
            this.setState({
              isLogged: true,
            });
          } }
        >
          <input
            type="email"
            placeholder="Login"
            data-testid="email-input"
            value={ email }
            onChange={ (ev) => {
              this.handleSetEmail(ev);
              this.handleVerifyEmail(ev);
            } }
          />
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            value={ password }
            minLength="6"
            onChange={ (ev) => {
              this.handleSetPassword(ev);
              this.handleVerifyPassword(ev);
            } }
          />
          <button id="btn-entrar" type="submit" disabled={ this.toggleButtonDisabled() }>
            Entrar
          </button>
        </form>
      </>
    );
  }
}

Login.propTypes = {
  login: func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
