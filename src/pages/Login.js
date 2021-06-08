import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      on: true,
      validEmail: false,
      validPassword: false,
    };

    this.emailCheck = this.emailCheck.bind(this);
    this.passwordCheck = this.passwordCheck.bind(this);
    this.onButton = this.onButton.bind(this);
  }

  onButton() {
    const { validPassword, validEmail } = this.state;
    if (validEmail && validPassword) {
      this.setState({
        on: false,
      });
    }
  }

  passwordCheck({ target }) {
    const numMin = 5;
    if (target.value.length >= numMin) {
      this.setState({
        validPassword: true,
      });
      this.onButton();
    }
  }

  emailCheck({ target }) {
    const validation = /^[\S.]+@[a-z]+.\w{2,3}$/g;
    validation.test(target.value);
    this.setState({
      validEmail: true,
    });
    this.onButton();
  }

  render() {
    const { on } = this.state;
    return (
      <form>
        <input type="email" data-testid="email-input" onChange={ this.emailCheck } />
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.passwordCheck }
        />
        <button type="submit" disabled={ on }>Entrar</button>
      </form>
    );
  }
}

export default Login;
