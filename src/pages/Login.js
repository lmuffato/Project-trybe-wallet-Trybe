import React from 'react';
// import { Redirect } from 'react-router';

const MIN_LENGTH = 6;
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
      // redirect: false,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    this.handleButton();
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
    if (size >= MIN_LENGTH) {
      this.setState({ passwordValid: true, password: ev.target.value });
    } else {
      this.setState({ passwordValid: false, password: '' });
    }
  }

  handleButton() {
    const { emailValid, passwordValid } = this.state;
    const btn = document.getElementById('btnLogin');
    if (emailValid && passwordValid) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  }

  handleClick(ev) {
    console.log(ev);
    ev.preventDefault();
    console.log('clicou!');
  }

  render() {
    const { email, password, emailValid, passwordValid } = this.state;
    if (emailValid && passwordValid) {
      console.log(`Email:${email}\nSenha:${password}`);
    }
    return (
      <section>
        <label htmlFor="email-input">
          Email
          <input type="email" data-testid="email-input" onChange={ this.handleEmail } />
        </label>
        <br />
        <label htmlFor="password-input">
          Password
          <input
            type="password"
            data-testid="password-input"
            onChange={ this.handlePassword }
          />
        </label>
        <br />
        <button
          type="button"
          id="btnLogin"
          onClick={ this.handleClick }
          disabled
        >
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
