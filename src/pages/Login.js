import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: true,
    };
    this.isValidData = this.isValidData.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  isValidData() {
    return (
      console.log(this.state)
    );
  }

  handleErrors() {
    const passwordLength = 6;
    const { email, password } = this.state;
    const errorCases = [
      !email.match(/^\w+@\w+.com$/),
      !password.length > passwordLength,
    ];
    const formComplete = errorCases.every((error) => error !== true);
    this.setState({
      formErrors: !formComplete,
    });
  }

  render() {
    return (
      <div>
        <h1>Bem Vindo a Trybe Wallet</h1>
        <form>
          <div>
            <input
              data-testid="email-input"
              type="text"
              onChange={ (e) => this.setState({ email: e.target.value }) }
              placeholder="Insert a valid email"
            />
            <input
              data-testid="password-input"
              type="text"
              onChange={ (e) => this.setState({ password: e.target.value }) }
              placeholder="Insert your password"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={ this.handleErrors }
            >
              Entrar

            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
