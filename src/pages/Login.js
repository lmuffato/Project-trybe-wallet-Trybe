import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginUser from '../actions/index';

const MIN_LENGTH = 5;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
      buttonDisabled: true,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { email, password } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      this.handleButton();
    }
  }

  handleEmail(ev) {
    const email = ev.target.value;
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isValid = re.test(email);
    if (isValid) {
      this.setState({ emailValid: true, email });
    } else {
      this.setState({ emailValid: false, email: '' });
    }
  }

  handlePassword(ev) {
    const size = ev.target.value.length;
    if (size > MIN_LENGTH) {
      this.setState({ passwordValid: true, password: ev.target.value });
    } else {
      this.setState({ passwordValid: false });
    }
  }

  handleButton() {
    const { emailValid, passwordValid } = this.state;
    this.setState({
      buttonDisabled: !(emailValid && passwordValid),
    });
  }

  handleClick() {
    console.log('clicou!');
    const { sendEmail, history } = this.props;
    const { email } = this.state;
    sendEmail(email); // dispara action
    history.push('/carteira'); // https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
  }

  render() {
    const { buttonDisabled } = this.state;
    return (
      <section>
        Email
        <input type="email" data-testid="email-input" onChange={ this.handleEmail } />
        <br />
        Password
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.handlePassword }
        />
        <br />
        <button
          type="button"
          id="btnLogin"
          onClick={ this.handleClick }
          disabled={ buttonDisabled }
        >
          Entrar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (payload) => dispatch(loginUser(payload)), // essa chave vai virar uma props do própio login. essa props é uma função. dentro do dispatch eu coloco minha action-user(action creator). a acation 'loginUser' leia-se 'addUser'.
});

Login.propTypes = {
  sendEmail: PropTypes.func,
  history: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
