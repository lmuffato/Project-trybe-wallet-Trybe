import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disableButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.validPassword = this.validPassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    if (this.validEmail() && this.validPassword() === true) {
      this.setState({
        disableButton: false,
      });
    }
  }

  validEmail() {
    const { email } = this.state;
    // Além dos links abaixo utilizei a expressão do Rafael Medeiros da Turma A, disponibilizada na thread;
    // http://www.regexplained.co.uk/
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    // https://regexr.com/
    const regex = /^\w+@\w+\.com$/;
    return regex.test(email);
  }

  validPassword() {
    const { password } = this.state;
    const rightLength = 5;
    if (password.length >= rightLength) {
      return true;
    }
    return false;
  }

  handleClick() {
    const { addUserToState, history } = this.props;
    const { email } = this.state;
    addUserToState(email);
    history.push('/carteira');
  }

  render() {
    const { disableButton } = this.state;
    return (
      <div>
        <input
          name="email"
          type="text"
          data-testid="email-input"
          placeholder="name@email.com"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          data-testid="password-input"
          placeholder="senha"
          type="password"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ disableButton }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
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
