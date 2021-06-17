import React from 'react';
import { Redirect } from 'react-router-dom';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      logged: false,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.validateForm);
  }

  render() {
    const { email, password, logged } = this.state;
    return (
      <div>
        {logged ? <Redirect to="/carteira" /> : ''}
        <main>
          <header>TRYBE</header>
          <form>
            <input
              type="email"
              placeholder="email"
              value={ email }
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
            <input
              type="password"
              placeholder="password"
              minLength="6"
              value={ password }
              name="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
            <button id="btn-submit" type="submit" disabled>Entrar</button>
          </form>
        </main>
      </div>
    );
  }
}
export default Login;
