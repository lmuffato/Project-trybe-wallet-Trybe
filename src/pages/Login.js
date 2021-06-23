import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      buttonDisable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.formValidation();
  }

  formValidation() {
    const minLength = 5;
    const regex = /\S+@\S+\.\S+/;
    const { email, password } = this.state;
    const validEmail = regex.test(email);
    const validPassword = password.length >= minLength;
    const validForm = validEmail && validPassword;
    if (validForm) {
      this.setState({
        buttonDisable: false,
      });
    } else {
      this.setState({
        buttonDisable: true,
      });
    }
  }

  render() {
    const { email, password, buttonDisable } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ buttonDisable }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

// https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
