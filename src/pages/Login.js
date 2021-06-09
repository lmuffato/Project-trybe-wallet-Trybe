import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    const { email, senha } = this.state;
    const result = /\w+@\w+\.\w+/gi.test(email);
    const resultSenha = /(.{5,})/gi.test(senha);
    if (result && resultSenha) {
      this.setState({ disabled: false });
    }
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <form>
          <input
            name="email"
            type="email"
            placeholder="Login"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            name="senha"
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <button type="button" disabled={ disabled }>
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
