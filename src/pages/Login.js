import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: {
        typed: '',
        isValid: false,
      },
      password: {
        typed: '',
        isValid: false,
      },
      signInIsDisabled: true,
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateData = this.validateData.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { email, password } = this.state;
    const emailDidUpdate = prevState.email.isValid !== email.isValid;
    const passwordDidUpdate = prevState.password.isValid !== password.isValid;
    if (emailDidUpdate || passwordDidUpdate) {
      this.validateData();
    }
  }

  validateEmail({ target: { value } }) {
    const typed = value;
    const mailPattern = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
    const mailIsValid = typed.match(mailPattern);

    if (mailIsValid) {
      this.setState({
        email: { typed, isValid: true },
      });
    } else {
      this.setState({
        email: { typed, isValid: false },
      });
    }
  }

  validatePassword({ target: { value } }) {
    const typed = value;
    const passwordMinimumLength = 6;
    const passwordIsValid = typed.length >= passwordMinimumLength;

    if (passwordIsValid) {
      this.setState({
        password: { typed, isValid: true },
      });
    } else {
      this.setState({
        password: { typed, isValid: false },
      });
    }
  }

  validateData() {
    const { email, password } = this.state;

    this.setState({
      signInIsDisabled: !(email.isValid && password.isValid),
    });
  }

  render() {
    const { email, password, signInIsDisabled } = this.state;
    return (
      <form>
        <input
          type="text"
          id="email"
          data-testid="email-input"
          value={ email.typed }
          onChange={ this.validateEmail }
        />
        <input
          type="password"
          id="password"
          data-testid="password-input"
          value={ password.typed }
          onChange={ this.validatePassword }
        />
        <button type="submit" disabled={ signInIsDisabled }>Entrar</button>
      </form>
    );
  }
}

export default Login;
