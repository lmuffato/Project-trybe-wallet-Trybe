import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSenha = this.handleSenha.bind(this);
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleSenha(event) {
    this.setState({ senha: event.target.value });
  }

  render() {
    const { email, senha } = this.state;
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
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
