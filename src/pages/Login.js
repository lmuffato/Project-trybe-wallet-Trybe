import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { actionEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.emailValidation = this.emailValidation.bind(this);
  }

  emailValidation() {
    const { email, password } = this.state;
    const isValid = email.match(/^\w+@\w+.com$/);
    const minimumPasswordLength = 5;
    if (password.length > minimumPasswordLength && isValid) {
      return false;
    }
    return true;
  }

  render() {
    const { saveEmail } = this.props;
    const { email, password } = this.state;
    return (
      <form>
        <input
          onChange={ (e) => this.setState({ email: e.target.value }) }
          value={ email }
          data-testid="email-input"
          placeholder="Email"
          type="email"
        />
        <input
          onChange={ (e) => this.setState({ password: e.target.value }) }
          value={ password }
          data-testid="password-input"
          placeholder="Senha"
          type="password"
        />
        <Link to="/carteira">
          <button
            type="button"
            value="Entrar"
            disabled={ this.emailValidation() }
            onClick={ () => saveEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (value) => dispatch(actionEmail(value)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
