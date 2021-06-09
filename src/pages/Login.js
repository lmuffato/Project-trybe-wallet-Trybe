import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      logginDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.emailValidate = this.emailValidate.bind(this);
    this.passwordValidate = this.passwordValidate.bind(this);
  }

  // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  emailValidate() {
    const { email } = this.state;
    const regExp = /^\w+@\w+.com$/;

    return regExp.test(email);
  }

  passwordValidate() {
    const { password } = this.state;
    const passwordMinimumLength = 6;

    return password.length >= passwordMinimumLength;
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value }, () => {
      if (this.emailValidate() && this.passwordValidate()) {
        this.setState({ logginDisabled: false });
      } else {
        this.setState({ logginDisabled: true });
      }
    });
  }

  render() {
    const { email, password, logginDisabled } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>

        <Link to="/carteira">
          <button
            type="button"
            disabled={ logginDisabled }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;
