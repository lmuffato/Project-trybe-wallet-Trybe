import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.turnOnButton = this.turnOnButton.bind(this);

    this.state = {
      email: '',
      active: true,
      validEmail: false,
      validPassword: false,
    };
  }

  validateEmail({ target }) {
    const checkEmail = /^[\S.]+@[a-z]+\.\w{2,3}$/g;
    if (checkEmail.test(target.value)) {
      this.setState({
        validEmail: true,
        email: target.value,
      });
      this.turnOnButton();
    } else {
      this.setState({
        validEmail: false,
      });
    }
  }

  validatePassword({ target }) {
    const min = 5;
    if (target.value.length >= min) {
      this.setState({
        validPassword: true,
      });
      this.turnOnButton();
    } else {
      this.setState({
        validPassword: false,
      });
    }
  }

  turnOnButton() {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      this.setState({
        active: false,
      });
    } else {
      this.setState({
        active: true,
      });
    }
  }

  render() {
    const { active, email } = this.state;
    const { saveEmailDispatch } = this.props;
    return (

      <div>
        <forms>
          <input data-testid="email-input" type="email" onChange={ this.validateEmail } />
          <input
            data-testid="password-input"
            onChange={ this.validatePassword }
            type="password"
          />
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ active }
              onClick={ saveEmailDispatch(email) }
            >
              Entrar
            </button>
          </Link>
        </forms>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  saveEmailDispatch: (email) => dispatch(saveEmail(email)) });

Login.propTypes = {
  saveEmailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
