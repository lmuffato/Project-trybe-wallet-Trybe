import React from 'react';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    const minimunPasswordLength = 6;

    return (
      <div>
        Login
        <section>
          <input
            type="email"
            data-testid="email-input"
            placeholder="alguem@email.com"
            onChange={ (event) => this.setState({ email: event.target.value }) }
          />
          <input
            type="password"
            data-testid="password-input"
            onChange={ (event) => this.setState({ password: event.target.value }) }
            minLength="6"
          />
        </section>
        <button
          type="submit"
          onClick={ () => {
            console.log(email, password);
          } }
          disabled={
            email.includes('@') !== true
            || password.length < minimunPasswordLength
            || email.includes('.com') !== true
          }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;

// Entendi como utilizar a propriedade disabled com uma condição através do:
// https://reactgo.com/react-disable-button-input-empty/
// https://www.w3schools.com/tags/att_button_disabled.asp
