import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    // this.onChange = this.onChange.bind(this);
  }

  // onChange(event) {
  //   this.setState(event.target.value);
  // }

  render() {
    const { email, password } = this.state;
    // const { onChange } = this.setState;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="text">
            email:
            <input
              type="text"
              data-testid="email-input"
              value={ email }
              // onchange={ onchange }
            />
          </label>
          <label htmlFor="password">
            senha:
            <input
              type="password"
              data-testid="password-input"
              value={ password }
              // onchange={ onchange }
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
