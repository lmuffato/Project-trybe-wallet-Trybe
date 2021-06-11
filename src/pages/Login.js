import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: {
        text: '',
        isValid: false,
      },
      password: {
        text: '',
        isValid: false,
      },
      buttonIsDisable: true,
      isRedirect: false,
    };

    this.isValidEmail = this.isValidEmail.bind(this);
    this.isValidPassword = this.isValidPassword.bind(this);
    this.isValid = this.isValid.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { email, password } = this.state;
    const emailDidUpdate = prevState.email.isValid !== email.isValid;
    const passwordDidUpdate = prevState.password.isValid !== password.isValid;
    if (emailDidUpdate || passwordDidUpdate) {
      this.isValid();
    }
  }

  // Source: https://github.com/tryber/sd-010-a-project-trybewallet/tree/nascjoao-project-trybewallet
  isValidEmail(event) {
    const text = event.target.value;
    const emailRegex = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
    const isValid = text.match(emailRegex);

    if (isValid) {
      this.setState({
        email: { text, isValid: true },
      });
    } else {
      this.setState({
        email: { text, isValid: false },
      });
    }
  }

  isValidPassword(event) {
    const text = event.target.value;
    const passwordMinimumLength = 6;
    const passwordIsValid = text.length >= passwordMinimumLength;

    if (passwordIsValid) {
      this.setState({
        password: { text, isValid: true },
      });
    } else {
      this.setState({
        password: { text, isValid: false },
      });
    }
  }

  // Source: https://github.com/tryber/sd-010-a-project-trybewallet/tree/nascjoao-project-trybewallet
  isValid() {
    const { email, password } = this.state;

    this.setState({
      buttonIsDisable: !(email.isValid && password.isValid),
    });
  }

  // Source: https://github.com/tryber/sd-010-a-project-trybewallet/tree/nascjoao-project-trybewallet
  logIn(event) {
    event.preventDefault();
    const { email } = this.state;
    const { userLogin: submit } = this.props;
    submit({ email: email.text });
    this.setState({
      isRedirect: true,
    });
  }

  render() {
    const { email, password, buttonIsDisable, isRedirect } = this.state;
    if (isRedirect) return <Redirect to="/carteira" />;

    return (
      <form onSubmit={ this.logIn } className="login">
        <input
          className="input"
          type="text"
          id="email"
          data-testid="email-input"
          value={ email.text }
          onChange={ this.isValidEmail }
        />
        <input
          className="input"
          type="password"
          id="password"
          data-testid="password-input"
          value={ password.text }
          onChange={ this.isValidPassword }
        />
        <button type="submit" disabled={ buttonIsDisable }>Entrar</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (payload) => dispatch(userLogin(payload)),
});

Login.propTypes = {
  userLogin: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
