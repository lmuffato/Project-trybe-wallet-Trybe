import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.hundleChange = this.hundleChange.bind(this);
  }

  hundleChange({ target }) {
    if (target.type === 'email') {
      this.setState({ email: target.value });
    } else if (target.type === 'password') {
      this.setState({ password: target.value });
    }
  }

  renderButtonDesabled() {
    return (
      <button
        type="button"
        disabled
      >
        Entrar
      </button>
    );
  }

  renderButtonEnabled() {
    return (
      <Link to="/carteira">
        <button
          type="button"
        >
          Entrar
        </button>
      </Link>
    );
  }

  render() {
    const { email, password } = this.state;
    const emailModel = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordMinLength = 6;

    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.hundleChange }
          />
          <input
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.hundleChange }
          />
        </form>
        {
          password.length >= passwordMinLength && email.match(emailModel)
            ? this.renderButtonEnabled()
            : this.renderButtonDesabled()
        }
      </div>
    );
  }
}

export default Login;
