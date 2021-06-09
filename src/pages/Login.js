import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { newEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disable: true,
      email: '',
      password: '',
      shouldRedirect: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.newEmail = this.newEmail.bind(this);
    this.newPassword = this.newPassword.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { email, password } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      this.validateFields();
    }
  }

  validateFields() {
    const { email, password } = this.state;
    const passwordLength = 6;
    const validate = /\S+@\S+\.\S+/;
    const emailValidate = validate.test(email);
    const passwordValidate = password.length >= passwordLength;
    this.setState({ disable: !(emailValidate && passwordValidate) }); // Logica dessa linha desenvolvida com a ajuda de: João Nascimento
  }

  newEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  newPassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleClick() {
    const { email } = this.state;
    const { addEmail } = this.props;
    addEmail(email);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { disable, shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/carteira" />;
    return (
      <>
        <label htmlFor="email-input">
          <input
            type="email"
            placeholder="Email"
            id="email-input"
            data-testid="email-input"
            onChange={ this.newEmail }
          />
        </label>
        <br />
        <label htmlFor="password-input">
          <input
            type="password"
            placeholder="Password"
            id="password-input"
            data-testid="password-input"
            onChange={ this.newPassword }
          />
        </label>
        <button
          type="button"
          disabled={ disable }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </>
    );
  }
}

Login.propTypes = {
  addEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addEmail: (payload) => dispatch(newEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
