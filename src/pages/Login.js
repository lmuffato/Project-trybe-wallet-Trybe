import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { user } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      shoudRedirec: false,
      emailCheck: false,
      passCheck: false,
      buttonDisable: true,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.emailPattern = this.emailPattern.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
  }

  emailPattern() {
    return /\S+@\S+\.\S+/;
  }

  /* ideia para verificação de email tirada daqui:
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript?page=1&tab=votes#tab-top */

  handleChanges(a) {
    const { passCheck, emailCheck } = this.state;
    if (a.type === 'email') {
      const re = /\S+@\S+\.\S+/;
      const emailchecker = re.test(String(a.value).toLowerCase());
      if (emailchecker) {
        this.setState({
          email: a.value,
          emailCheck: true,
        });
      }
    }
    if (a.type === 'password') {
      const test = a.value;
      const minPassword = 5;
      if (test.length >= minPassword) {
        this.setState({
          passCheck: true,
        });
      }
    }
    if (passCheck && emailCheck) {
      this.setState({
        buttonDisable: false,
      });
    }
  }

  handleLogin() {
    const { userLogin } = this.props;
    const { email } = this.state;
    const loginToken = {
      email,

    };
    this.setState({
      shoudRedirec: true,
    });
    userLogin(loginToken);
  }

  render() {
    const { shoudRedirec, buttonDisable } = this.state;
    if (shoudRedirec) return <Redirect to="/carteira" />;
    return (
      <form>
        <input
          type="email"
          onChange={ (event) => this.handleChanges(event.target) }
          data-testid="email-input"
          placeholder="Enter your email"
          pattern={ this.emailPattern() }
        />
        <input
          type="password"
          onChange={ (event) => this.handleChanges(event.target) }
          data-testid="password-input"
          placeholder="Enter your Password"
          minLength="6"
        />
        <button
          type="button"
          onClick={ () => this.handleLogin() }
          disabled={ buttonDisable }
        >
          Entrar
        </button>
      </form>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (payload) => dispatch(user(payload)),
});

Login.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
