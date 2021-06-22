import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      buttonDisable: true,
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    // this.compareLogin = this.compareLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validateLogin();
  }

  // trecho do código realizado com solução encontrada por Gabriel Pereira no link https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
  testEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  validateLogin() {
    const { email, password } = this.state;
    if (this.testEmail(email) && this.testPassword(password)) {
      return this.setState({ buttonDisable: false });
    }
    return this.setState({ buttonDisable: true });
  }

  testPassword() {
    const { password } = this.state;
    const passwordLength = 5;
    console.log(password);
    if (password > passwordLength) return true;
    return false;
  }

  // compareLogin() {
  //   if (this.testPassword() && this.validateLogin()) {
  //     return this.setState({ buttonDisable: false });
  //   }
  //   return this.setState({ buttonDisable: true });
  // }

  render() {
    const { buttonDisable } = this.state;
    return (
      <div>
        login
        <form>
          <label htmlFor="e-mail">
            E-mail:
            <input
              type="text"
              data-testid="email-input"
              name="email"
              onChange={ this.handleChange }
              placeholder="e-mail"
            />
            <input
              type="text"
              data-testid="password-input"
              placeholder="password"
              name="password"
              onChange={ this.handleChange }
            />
          </label>
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

const mapDispatchToProps = (dispatch) => ({
  getEmail: (state) => dispatch(addUser(state)),
});

export default connect(null, mapDispatchToProps)(Login);
