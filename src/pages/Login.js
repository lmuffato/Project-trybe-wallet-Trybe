import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import emailReg from '../helpers/emailRegex';
import { loginAction } from '../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabledButton: true,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.validateInputs());
  }

  validateInputs() {
    const { email, password } = this.state;
    const minPasswordLength = 6;
    const emailValidate = emailReg.test(email);
    if (emailValidate
    && password.length >= minPasswordLength) {
      this.setState({
        disabledButton: false,
      });
    } else {
      this.setState({
        disabledButton: true,
      });
    }
  }

  render() {
    const { disabledButton, email, password } = this.state;
    const { loginActionProps } = this.props;
    return (
      <form
        style={ {
          margin: 'auto',
          marginTop: '100px',
          display: 'flex',
          flexDirection: 'column',
          width: '20%' } }
      >
        <h1 style={ { margin: 'auto' } }>Login</h1>
        <input
          name="email"
          data-testid="email-input"
          defaultValue={ email }
          onChange={ this.handleChange }
          type="email"
          placeholder="Digite seu email"
          required
        />
        <input
          name="password"
          data-testid="password-input"
          defaultValue={ password }
          onChange={ this.handleChange }
          type="password"
          placeholder="Senha"
          required
        />
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => loginActionProps(email) }
            disabled={ disabledButton }
          >
            Entrar

          </button>
        </Link>
      </form>
    );
  }
}
// I appreciate my friend's help:
// https://github.com/RenzoSev
const mapDispatchToProps = (dispatch) => ({
  loginActionProps: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  loginActionProps: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
