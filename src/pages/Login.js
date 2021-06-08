import React from 'react';
// import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.handleInputsAndVerify = this.handleInputsAndVerify.bind(this);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  // handleInputs({ target }) {
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  handleInputsAndVerify({ target }) {
    const { name, value } = target;
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const passCounter = 6;
    this.setState({ [name]: value });
    if (regex.test(email) === true && password.length >= passCounter - 1) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  // validateForm() {
  //   const { email, password } = this.state;
  //   const regex = /\S+@\S+\.\S+/;
  //   const passCounter = 6;
  //   if (regex.test(email) === true && password >= passCounter) {
  //     this.setState({ disabled: false });
  //   }
  // }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            data-testid="email-input"
            onChange={ this.handleInputsAndVerify }
            name="email"
          />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.handleInputsAndVerify }
          />
          <button
            type="button"
            disabled={ disabled }
            onClick={ this.loginSucess }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
