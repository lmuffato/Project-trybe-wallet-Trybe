import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      buttonDisable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
    this.validateLogin();
  }

  // trecho do código realizado com solução encontrada por Gabriel Pereira no link https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
  testEmail(email) {
    const re = /\S+@\S+\.\S+/;
    const retorno = re.test(email);
    return retorno;
  }

  validateLogin() {
    const { email } = this.state;
    if (this.testEmail(email)) return this.setState({ buttonDisable: false });
    return this.setState({ buttonDisable: true });
  }

  render() {
    const { email, buttonDisable } = this.state;
    console.log(email);
    // console.log(this.testEmail(email));
    // console.log(this.validateLogin());
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
