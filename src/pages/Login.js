import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { user } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      // disabledButton: true,
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { email, password } = this.state;
  //   if (prevState.email !== email || prevState.password !== password) {
  //     this.checkValidate();
  //   }
  // }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  async handleClick() {
    const { email } = this.state;
    const { userEmail } = this.props;

    userEmail({ email });
  }

  // checkValidate() {
  //   const { email, password } = this.state;
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const minPassword = 6;
  //   const validateEmail = email.match(emailRegex);
  //   const validatePassword = password.length > minPassword;
  //   this.state({ disabledButton: !(validateEmail && validatePassword) });
  // }

  render() {
    const { email, password } = this.state;
    const minPassword = 6;

    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="text">
            email:
            <input
              type="text"
              value={ email }
              data-testid="email-input"
              placeholder="E-mail"
              onChange={ this.handleEmailChange }
            />
          </label>
          <label htmlFor="password">
            senha:
            <input
              type="password"
              value={ password }
              data-testid="password-input"
              placeholder="Password"
              onChange={ this.handlePasswordChange }
            />
          </label>
          <Link to="/carteira">
            <button
              onClick={ this.handleClick }
              disabled={ email.includes('@') !== true
              || password.length < minPassword
              || email.includes('.com') !== true }
              type="button"
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(user(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  userEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
