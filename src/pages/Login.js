import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    const { email, password } = this.state;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const passMaxLength = 5;
    const emailValidation = emailRegex.test(email);
    if (password.length >= passMaxLength && emailValidation) {
      this.setState({ disabled: false });
    }
  }

  handleClick() {
    const { addUserToState, history } = this.props;
    const { email } = this.state;
    addUserToState(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <h1>Trybe Wallet</h1>
        <h2>Login</h2>
        <form>
          <input
            name="email"
            type="text"
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            name="password"
            type="password"
            data-testid="password-input"
            placeholder="Password"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ disabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUserToState: (payload) => dispatch(addUser(payload)),
});

Login.propTypes = {
  addUserToState: PropTypes.func,
  history: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);

/* consultei: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
The test() method executes a search for a match between a regular expression
and a specified string. Returns true or false.
 */
