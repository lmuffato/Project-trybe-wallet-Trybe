import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ (e) => console.log(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ (e) => console.log(e.target.value) }
          />
        </label>
        <button
          type="submit"
          disabled
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
