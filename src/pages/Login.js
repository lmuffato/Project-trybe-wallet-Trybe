import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginData } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redireciona: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.habClick = this.habClick.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  habClick() {
    let disable = true;
    const smallerSize = 6;
    const { email, password } = this.state;
    const lengthPassword = password.length;
    const rightEmail = /\w+@\w+.com$/.test(email);
    if (rightEmail && lengthPassword >= smallerSize) disable = false;
    else disable = true;
    return disable;
  }

  redirect() {
    const { sendLogin } = this.props;
    const { email } = this.state;
    sendLogin(email);
    this.setState({
      redireciona: true,
    });
  }

  render() {
    let renderPage;
    const { redireciona } = this.state;
    this.habClick();

    const wallet = <Redirect to={ { pathname: '/carteira' } } />;

    const form = (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            name="email"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            name="password"
          />
        </label>

        <button
          type="button"
          onClick={ this.redirect }
          disabled={ this.habClick() }
        >
          Entrar
        </button>
      </form>
    );

    if (redireciona) renderPage = wallet;
    else renderPage = form;

    return renderPage;
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendLogin: (email) => dispatch(loginData(email)),
});

Login.propTypes = {
  sendLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
