import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      isDisabled: false,
    };

    this.hadleChange = this.hadleChange.bind(this);
  }

  hadleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
    const { email, pass } = this.state;
    const emailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const minCaractere = 5;
    if (emailValid.test(email) && pass.length >= minCaractere) {
      this.setState({
        isDisabled: true,
      });
    } else {
      this.setState({ isDisabled: false });
    }
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <>
        <div>Login</div>
        <form>
          <label htmlFor="email-input">
            <input
              data-testid="email-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={ this.hadleChange }
            />
          </label>
          <label htmlFor="password-input">
            <input
              data-testid="password-input"
              type="password"
              name="pass"
              placeholder="Senha"
              onChange={ this.hadleChange }
            />
          </label>
          <button
            type="submit"
            disabled={ !isDisabled }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

export default Login;
