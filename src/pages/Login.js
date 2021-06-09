import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveValueEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      on: true,
      validEmail: false,
      validPassword: false,
      valueEmail: '',
    };

    this.emailCheck = this.emailCheck.bind(this);
    this.passwordCheck = this.passwordCheck.bind(this);
    this.onButton = this.onButton.bind(this);
  }

  onButton() {
    const { validPassword, validEmail, valueEmail } = this.state;
    if (validEmail && validPassword) {
      this.setState({
        on: false,
      });
    }
    this.saveValueEmail(valueEmail);
  }

  passwordCheck({ target }) {
    const numMin = 5;
    if (target.value.length >= numMin) {
      this.setState({
        validPassword: true,
      });
      this.onButton();
    }
  }

  emailCheck({ target }) {
    const validation = /^[\S.]+@[a-z]+.\w{2,3}$/g;
    validation.test(target.value);
    this.setState({
      validEmail: true,
    });
    this.onButton();
  }

  render() {
    const { email } = this.props;
    const { on, valueEmail } = this.state;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          onChange={ this.emailCheck }
        />
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.passwordCheck }
        />
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ on }
            onClick={ () => email(valueEmail) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  email: (eMail) => dispatch(saveValueEmail(eMail)),
});

Login.propTypes = {
  email: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
