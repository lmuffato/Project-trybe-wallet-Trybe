import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      disableButton: true,
      validateEmail: false,
      validateSenha: false,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSenha = this.handleSenha.bind(this);
    this.enableBtn = this.enableBtn.bind(this);
  }

  enableBtn() {
    const { validateEmail, validateSenha } = this.state;
    if (validateEmail && validateSenha) {
      this.setState({ disableButton: false });
    } else {
      this.setState({ disableButton: true });
    }
  }

  // https://www.w3resource.com/javascript/form/email-validation.php  - para validar email

  handleEmail(event) {
    this.setState({ email: event.target.value });

    const { email } = this.state;
    const validate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/;
    if (validate.test(email)) {
      this.setState({
        validateEmail: true,
      }, () => { this.enableBtn(); });
    } else {
      this.setState({
        validateEmail: false,
      }, () => { this.enableBtn(); });
    }
  }

  handleSenha(event) {
    this.setState({ senha: event.target.value });
    const { senha } = this.state;
    const noMagicNum = 5;
    if (senha.length >= noMagicNum) {
      this.setState({
        validateSenha: true,
      }, () => { this.enableBtn(); });
    } else {
      this.setState({
        validateSenha: false,
      }, () => { this.enableBtn(); });
    }
  }

  render() {
    const { email, senha, disableButton } = this.state;
    return (
      <div>
        <div>
          <input
            data-testid="email-input"
            type="text"
            onChange={ this.handleEmail }
            value={ email }
            placeholder="email"
          />
          <input
            data-testid="password-input"
            type="password"
            onChange={ this.handleSenha }
            value={ senha }
            placeholder="senha"
          />
        </div>
        <button
          type="button"
          disabled={ disableButton }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
