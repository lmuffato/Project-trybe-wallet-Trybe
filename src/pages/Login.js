import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loginUser from '../actions/user';

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
      // redirect: false,
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
    // this.handleButton();
  }

  handlePassword(ev) {
    const size = ev.target.value.length;
    if (size > MIN_LENGTH) {
      this.setState({ passwordValid: true, password: ev.target.value });
    } else {
      this.setState({ passwordValid: false });
    }
    // this.handleButton();
  }

  handleButton() {
    const { emailValid, passwordValid } = this.state;
    // console.log(emailValid && passwordValid);
    this.setState({
      buttonDisabled: !(emailValid && passwordValid),
    });
  }

  handleClick() {
    // console.log(path);
    console.log('clicou!');
    const { sendEmail, history } = this.props;
    const { email } = this.state;
    sendEmail(email);
    history.push('/carteira'); // https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
  }

  render() {
    const { buttonDisabled } = this.state;
    // if (emailValid && passwordValid) {
    //   console.log(`Email:${email}\nSenha:${password}`);
    // }
    // if (redirect) return <Redirect to="/carteira" />;
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
  sendEmail: (payload) => dispatch(loginUser(payload)),
});

Login.propTypes = {
  sendEmail: PropTypes.func,
  history: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
