import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userEmail } from '../actions';

class Login extends Component {
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

  dispatchButton = () => {
    const { email } = this.state;
    const { sendEmail, history: { push } } = this.props;
    sendEmail(email);
    push('/carteira');
  }

  renderEntryButton = () => {
    const { auth } = this.state;
    return(
      <button
        type="button"
        disabled={ !auth }
        onClick={ this.dispatchButton }
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

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(userEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
