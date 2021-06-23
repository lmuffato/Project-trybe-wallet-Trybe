import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginAction from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.isValidateEmail = this.isValidateEmail.bind(this);
    this.isValidatePass = this.isValidatePass.bind(this);
    this.sendError = this.sendError.bind(this);
    this.redirectTo = this.redirectTo.bind(this);

    this.state = {
      email: '',
      password: '',
      disableButton: true,
      redirect: false,
    };
  }

  isValidatePass() {
    const { password } = this.state;
    const passwordMinLength = 6;
    return password.length >= passwordMinLength;
  }

  isValidateEmail() {
    const { email } = this.state;
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    return emailRegex.test(email);
  }

  sendError(message) {
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  }

  handleChangeInput(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value }, () => {
      if (this.isValidatePass() && this.isValidateEmail()) {
        this.setState({ disableButton: false });
      } else {
        this.setState({ disableButton: true });
      }
    });
  }

  redirectTo() {
    const { email } = this.state;
    const { login } = this.props;
    login(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, password, disableButton, redirect } = this.state;

    if (redirect) return <Redirect to="/carteira" />;

    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={ email }
            name="email"
            data-testid="email-input"
            onChange={ (e) => this.handleChangeInput(e) }
          />
        </label>
        {this.isValidateEmail() === false ? this.sendError('Errou ou ou!')
          : null}
        <label htmlFor="password">
          Senha:
          <input
            value={ password }
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ (e) => this.handleChangeInput(e) }
          />
        </label>
        {this.isValidatePass() === false ? this.sendError('caracteres insuficiente!')
          : null}
        <button
          type="button"
          disabled={ disableButton }
          onClick={ this.redirectTo }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

// Auxílio: Ana Ventura
// pull request: https://github.com/tryber/sd-010-a-project-trybewallet/tree/anaventura1811-trybewallet-project
