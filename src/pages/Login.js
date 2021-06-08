import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordVerification = this.handlePasswordVerification.bind(this);
    this.handleEmailVerification = this.handleEmailVerification.bind(this);
  }

  handlePasswordVerification() {
    const { password } = this.state;
    const passwordMinLength = 6;
    return password.length >= passwordMinLength;
  }

  handleEmailVerification() {
    const { email } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.com$/;
    const regexTest = -1;
    return email.search(emailRegex) !== regexTest;
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value }, () => {
      if (this.handlePasswordVerification() && this.handleEmailVerification()) {
        this.setState({ isButtonDisabled: false });
      } else {
        this.setState({ isButtonDisabled: true });
      }
    });
  }

  render() {
    const { email, password, isButtonDisabled } = this.state;

    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={ email }
            name="email"
            id="email"
            data-testid="email-input"
            placeholder="email@example.com"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            value={ password }
            type="password"
            data-testid="password-input"
            name="password"
            id="password"
            minLength="6"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ isButtonDisabled }
            // onClick={ this.handleLogin }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;

// Referências consultadas:
// Esta thread do slack: https://trybecourse.slack.com/archives/C01L16B9XC7/p1623175696043700
// PR do colega Rafael Medeiros: https://github.com/tryber/sd-010-a-project-trybewallet/pull/45/files
// Método search do JavaScript: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/search
// Sobre o regex usado: http://www.regexplained.co.uk/
