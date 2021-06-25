import React from 'react';

// https://codinginflow.com/tutorials/android/validate-email-password-regular-expressions
// https://regex101.com/ - dica do Lugh Wally

const checkRegexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const checkRegexPassword = /[\w]{6}/;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailIsValid: false,
      passwordIsValid: false,
      isDisabled: true,
    };
    this.updateStateAndValidateInput = this.updateStateAndValidateInput.bind(this);
  }

  componentDidUpdate(_, prevState) {
    const { email, password } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      this.isDisabledButton();
    }
  }

  isDisabledButton() {
    const { emailIsValid, passwordIsValid } = this.state;
    if (emailIsValid && passwordIsValid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  updateStateAndValidateInput({ target: { name, value } }) {
    if (name === 'email') {
      const isValid = checkRegexEmail.test(value);
      this.setState({ emailIsValid: isValid });
    }

    if (name === 'password') {
      const isValid = checkRegexPassword.test(value);
      this.setState({ passwordIsValid: isValid });
    }

    this.setState({ [name]: value });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div className="form-login">
        <form>
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.updateStateAndValidateInput }
            placeholder="E-mail"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.updateStateAndValidateInput }
            placeholder="Senha"
            data-testid="password-input"
          />
          <button type="button" disabled={ isDisabled }>Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
