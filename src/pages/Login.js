import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { storeUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: {
        typed: '',
        isValid: false,
      },
      password: {
        typed: '',
        isValid: false,
      },
      signInIsDisabled: true,
      shouldRedirect: false,
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateData = this.validateData.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { email, password } = this.state;
    const emailDidUpdate = prevState.email.isValid !== email.isValid;
    const passwordDidUpdate = prevState.password.isValid !== password.isValid;
    if (emailDidUpdate || passwordDidUpdate) {
      this.validateData();
    }
  }

  validateEmail({ target: { value } }) {
    const typed = value;
    const mailPattern = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
    const mailIsValid = typed.match(mailPattern);

    if (mailIsValid) {
      this.setState({
        email: { typed, isValid: true },
      });
    } else {
      this.setState({
        email: { typed, isValid: false },
      });
    }
  }

  validatePassword({ target: { value } }) {
    const typed = value;
    const passwordMinimumLength = 6;
    const passwordIsValid = typed.length >= passwordMinimumLength;

    if (passwordIsValid) {
      this.setState({
        password: { typed, isValid: true },
      });
    } else {
      this.setState({
        password: { typed, isValid: false },
      });
    }
  }

  validateData() {
    const { email, password } = this.state;

    this.setState({
      signInIsDisabled: !(email.isValid && password.isValid),
    });
  }

  signIn(event) {
    event.preventDefault();
    const { email } = this.state;
    const { storeUser: submit } = this.props;
    submit({ email: email.typed });
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { email, password, signInIsDisabled, shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/carteira" />;

    return (
      <form onSubmit={ this.signIn }>
        <input
          type="text"
          id="email"
          data-testid="email-input"
          value={ email.typed }
          onChange={ this.validateEmail }
        />
        <input
          type="password"
          id="password"
          data-testid="password-input"
          value={ password.typed }
          onChange={ this.validatePassword }
        />
        <button type="submit" disabled={ signInIsDisabled }>Entrar</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeUser: (payload) => dispatch(storeUser(payload)),
});

Login.propTypes = {
  storeUser: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
