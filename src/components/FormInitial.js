import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewUser } from '../actions';

class FormInitial extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isRedirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
    this.redirectTo = this.redirectTo.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  validation() {
    const { email, password } = this.state;
    const PATTERN_EMAIL = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;
    const PASSWORD_LENGTH = 6;
    const passwordValidation = password.length >= PASSWORD_LENGTH;
    const emailValidation = email.match(PATTERN_EMAIL);
    return !(passwordValidation && emailValidation);
  }

  redirectTo(event) {
    event.preventDefault();
    const { email } = this.state;
    const { isEmail } = this.props;
    isEmail(email);
    this.setState({ isRedirect: true });
  }

  render() {
    const { isRedirect } = this.state;
    if (isRedirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <form onSubmit={ this.redirectTo }>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          placeholder="Insert your e-mail here"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          placeholder="Insert password here"
          onChange={ this.handleChange }
          maxLength="6"
        />
        <button
          type="submit"
          disabled={ this.validation() }
        >
          ENTRAR
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  isEmail: (payload) => dispatch(addNewUser(payload)),
});

FormInitial.propTypes = {
  isEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormInitial);
