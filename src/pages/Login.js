import React, { Component } from 'react'

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
        email: '',
        password: '',
      };
    }


  updateState = (field, event) => {
    const { value } = event.target;
    this.setState({ [field]: value });
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
    return(
      <button
        type="button"
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
