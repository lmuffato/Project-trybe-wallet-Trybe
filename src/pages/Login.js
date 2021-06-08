import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { email } = this.state;
    const { userLogin } = this.props;
    event.preventDefault();
    userLogin(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, password, redirect } = this.state;
    const passwordMinimun = 6;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email-input">
            Email:
            <input
              type="email"
              data-testid="email-input"
              name="email"
              value={ email }
              onChange={ this.handleInput }
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              value={ password }
              onChange={ this.handleInput }
            />
          </label>
          <button
            type="submit"
            disabled={ !(password.length >= passwordMinimun
              && email.endsWith('.com') && email.includes('@')) }
          >
            Entrar
          </button>
        </form>
        {redirect ? <Redirect to="/carteira" /> : null }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (str) => dispatch(userAction(str)),
});

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
