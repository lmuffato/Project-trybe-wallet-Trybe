import React from 'react';
import { func, objectOf, array, oneOfType, object, node } from 'prop-types';
import { connect } from 'react-redux';
import { submitUser } from '../actions';
import '../css/Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event, email, password) {
    event.preventDefault();
    const { submit, history } = this.props;
    submit(email, password);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const regex = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
    const passwordLength = 6;
    return (
      <div className="login-container">
        <form
          onSubmit={ (event) => this.handleSubmit(event, email, password) }
          className="login-form"
        >
          <label className="login-label" htmlFor="email-input">
            Email:
            <input
              className="login-input"
              placeholder="Digite seu email"
              data-testid="email-input"
              type="email"
              value={ email }
              id="email-input"
              onChange={ this.handleInput }
              name="email"
              autoComplete="off"
            />
          </label>
          <label className="login-label" htmlFor="password-input">
            Password:
            <input
              className="login-input"
              placeholder="Digite sua senha"
              data-testid="password-input"
              type="password"
              value={ password }
              id="password-input"
              onChange={ this.handleInput }
              name="password"
            />
          </label>
          <input
            id="submit-login"
            className="login-input submit-btn"
            type="submit"
            disabled={ !email.match(regex) || password.length < passwordLength }
            value="Entrar"
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  submit: func.isRequired,
  history: objectOf(oneOfType([node, object, array, func])).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submit: (email, password) => dispatch(submitUser(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
