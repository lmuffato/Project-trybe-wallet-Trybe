import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: false,
      password: false,
      buttonActivated: false,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleEmail(ev) {
    let email = ev.target.value;
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    re.test(email) ? this.setState({ email: true }) : this.setState({ email: false });
  }

  handlePassword(ev) {
    const size = ev.target.value.length;
    (size >= 6) ? this.setState({ password: true }) : this.setState({ password: false });
    // console.log((size >= 6));
  }

  handleButton() {
    const { email, password } = this.state;
    const btn = document.getElementById('btnLogin');
    (email && password) ? btn.disabled = false : btn.disabled = true;
  }

  componentDidUpdate() {
    this.handleButton();
  }

  render() {
    return (
      <form>
        <label htmlFor="email-input">Email</label>
        <input type="email" data-testid="email-input" onChange={this.handleEmail} />
        <br />
        <label htmlFor="password-input">Password</label>
        <input type="password" data-testid="password-input" onChange={this.handlePassword} />
        <br />
        <button type="button" disabled id="btnLogin">Entrar</button>
      </form>
    );

  }
}

export default Login;
