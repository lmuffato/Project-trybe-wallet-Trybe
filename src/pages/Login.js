import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { login, password } = this.state;
    return (
      <div>
        Login
        <section>
          <input
            data-testid="email-input"
            id="login"
            value={ login }
            onChange={ (e) => this.handleChange(e) }
          />
          <input
            data-testid="password-input"
            id="password"
            value={ password }
            onChange={ (e) => this.handleChange(e) }
          />
          <button
            type="submit"
            // onClick={ () => this.handleClick() }
          >
            Entrar
          </button>
        </section>
      </div>
    );
  }
}

export default Login;
