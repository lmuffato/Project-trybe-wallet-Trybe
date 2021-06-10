import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      shouldRedirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  validateFields(email, password) {
    const includesAtSign = email.includes('@');
    const includesDotCom = email.includes('.com');
    const passwordMaxLength = 6;
    const isPasswdValid = password.length >= passwordMaxLength;
    return (
      includesAtSign
      && includesDotCom
      && isPasswdValid
    );
  }

  submitForm() {
    const { email, password } = this.state;
    const { login } = this.props;
    if (this.validateFields(email, password)) {
      login({ email, password });
      this.setState({
        email: '',
        password: '',
        shouldRedirect: true,
      });
    }
  }

  render() {
    const { email, password, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <div className="login">
        <section className="login-container">
          <label htmlFor="email">
            E-mail:
            <input
              type="text"
              data-testid="email-input"
              name="email"
              value={ email }
              onChange={ (e) => this.handleChange(e) }
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              value={ password }
              onChange={ (e) => this.handleChange(e) }
            />
          </label>

          <button
            type="button"
            className="login-button"
            onClick={ this.submitForm }
            disabled={ !this.validateFields(email, password) }
          >
            Entrar
          </button>
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e)),
});

export default connect(null, mapDispatchToProps)(Login);
