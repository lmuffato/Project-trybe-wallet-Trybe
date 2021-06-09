import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleEmailAndPassword = this.handleEmailAndPassword.bind(this);
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };
  }

  // Ref: validação de e-mail: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

  handleEmailAndPassword() {
    const { email, password } = this.state;
    const re = /\S+@\S+\.\S+/;
    const verifyEmail = re.test(email);
    const passLength = 5;
    if (password.length >= passLength && verifyEmail) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    this.handleEmailAndPassword();
  }

  render() {
    const { email, password, isButtonDisabled } = this.state;
    return (
      <>
        <h1>Trybe Wallet</h1>
        <form>
          <input
            type="email"
            placeholder="digite seu e-mail neste campo"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="digte sua senha neste campo"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="button"
              // Ref: desabiitando botão: https://qastack.com.br/programming/3014649/how-to-disable-html-button-using-javascript
              disabled={ isButtonDisabled }
              onClick={ this.handleLogin }
            >
              Entrar
            </button>
          </Link>
        </form>
      </>
    );
  }
}

export default Login;
