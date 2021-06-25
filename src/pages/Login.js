import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      buttonDisable: true,
      password: '',
      statusLogin: false,
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
  // testEmail(email) {
  //   const re = /\S+@\S+\.\S+/;
  //   return re.test(email);
  // }

  validateLogin() {
    const { email, password } = this.state;
    const passwordLength = 5;
    const validPassword = password.length >= passwordLength; // false => true

    const emailCondcion = /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm; // => https://regexr.com
    const validEmail = email.match(emailCondcion);

    if (validEmail && validPassword) {
      this.setState({ buttonDisable: false });
    }
  }

  render() {
    const { buttonDisable, email, statusLogin } = this.state;
    const { getEmail } = this.props;
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
            onClick={ () => getEmail(email) && this.setState({ statusLogin: true }) }
          >
            Entrar
            { statusLogin && <Redirect to="/carteira" /> }
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (state) => dispatch(addUser(state)),
});

Login.propTypes = {
  getEmail: Proptypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
