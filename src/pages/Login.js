import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { submitUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const regex = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
    const passwordLength = 6;
    const { submit } = this.props;
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            type="text"
            value={ email }
            id="email-input"
            onChange={ this.handleInput }
            name="email"
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            data-testid="password-input"
            type="password"
            value={ password }
            id="password-input"
            onChange={ this.handleInput }
            name="password"
          />
        </label>
        <button
          type="button"
          onClick={ () => submit(email, password) }
          disabled={ !email.match(regex) || password.length < passwordLength }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  submit: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submit: (email, password) => dispatch(submitUser(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
