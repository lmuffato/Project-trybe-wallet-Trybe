import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { actionEmail } from '../actions';

const checkRegexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const checkRegexPassword = /[\w]{6}/;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailIsValid: false,
      passwordIsValid: false,
      isDisabled: true,
    };
    this.updateStateAndValidateInput = this.updateStateAndValidateInput.bind(this);
  }

  componentDidUpdate(_, prevState) {
    const { email, password } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      this.isDisabledButton();
    }
  }

  isDisabledButton() {
    const { emailIsValid, passwordIsValid } = this.state;
    if (emailIsValid && passwordIsValid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  updateStateAndValidateInput({ target: { name, value } }) {
    if (name === 'email') {
      const isValid = checkRegexEmail.test(value);
      this.setState({ emailIsValid: isValid });
    }

    if (name === 'password') {
      const isValid = checkRegexPassword.test(value);
      this.setState({ passwordIsValid: isValid });
    }

    this.setState({ [name]: value });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    const { userLogged } = this.props;

    return (
      <div className="form-login">
        <form>
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.updateStateAndValidateInput }
            placeholder="E-mail"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.updateStateAndValidateInput }
            placeholder="Senha"
            data-testid="password-input"
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ isDisabled }
              onClick={ () => userLogged(email) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  userLogged: (email) => dispatch(actionEmail(email)),
});

Login.propTypes = {
  userLogged: PropTypes.func.isRequired,
};

export default connect(null, mapStateToProps)(Login);
