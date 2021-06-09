import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disable: true,
      email: '',
      password: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.newEmail = this.newEmail.bind(this);
    this.newPassword = this.newPassword.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { email, password } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      this.validateFields();
    }
  }

  validateFields() {
    const { email, password } = this.state;
    const passwordLength = 6;
    const validate = /\S+@\S+\.\S+/;
    const emailValidate = validate.test(email);
    const passwordValidate = password.length >= passwordLength;
    this.setState({ disable: !(emailValidate && passwordValidate) }); // Logica dessa linha desenvolvida com a ajuda de: João Nascimento
  }

  newEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  newPassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleClick() {

  }

  render() {
    const { disable } = this.state;
    return (
      <>
        <label htmlFor="email-input">
          <input
            type="email"
            placeholder="Email"
            id="email-input"
            data-testid="email-input"
            onChange={ this.newEmail }
          />
        </label>
        <br />
        <label htmlFor="password-input">
          <input
            type="password"
            placeholder="Password"
            id="password-input"
            data-testid="password-input"
            onChange={ this.newPassword }
          />
        </label>
        <button
          type="button"
          disabled={ disable }
        >
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
