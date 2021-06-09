import React, { Component } from 'react'

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
        email: '',
        password: '',
        auth: false,
      };
    }

    handleAuth = () => {
      const { email, password } = this.state;
      const regex2Email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      const authValid = regex2Email.test(email) && password.length >= 5;
      return authValid ? this.setState({ auth: true }) : this.setState({ auth: false });
    }

  updateState = (field, event) => {
    const { value } = event.target;
    this.setState({ [field]: value });
    this.handleAuth();
  }


  renderEmailInput = () => {
    return(
      <label htmlFor="emailInput" >
        Email:
        <input
          type="email"
          id="emailInput"
          placeholder="User Email"
          data-testid="email-input"
          onChange={ (event) => this.updateState('email', event) }
        />
      </label>
    );
  }

  renderPasswordInput = () => {
    return(
      <label htmlFor="passWordInput" >
        PassWord:
        <input
          type="password"
          id="passWordInput"
          placeholder="User Password"
          onChange={ (event) => this.updateState('password', event) }
          data-testid="password-input"
        />
      </label>
    );
  }

  renderEntryButton = () => {
    const { auth } = this.state;
    return(
      <button
        type="button"
        disabled={ !auth }
        onClick={ this.handleAuth }
      >
        Entrar
      </button>
    );
  }

  render() {
    return (
      <div>
        { this.renderEmailInput() }
        { this.renderPasswordInput() }
        { this.renderEntryButton() }
      </div>
    );
  };
};
