import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { setEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disable: true,
    };

    this.handleInput = this.handleInput.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  handleInput({ target: { value, name } }) {
    this.setState({ [name]: value }, () => this.validateLogin());
  }

  validateLogin() {
    const { email, password } = this.state;
    let validate = false;
    const validateEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
    const validatePass = /[\S]{6,}/;
    if (!validateEmail.test(email)) validate = true;
    if (!validatePass.test(password)) validate = true;
    this.setState({ disable: validate });
  }

  render() {
    const { email, password, disable } = this.state;
    const { dispatchSetEmail } = this.props;
    return (
      <fieldset>
        <input
          type="text"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ this.handleInput }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ this.handleInput }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disable }
            onClick={ () => dispatchSetEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispath) => ({
  dispatchSetEmail: (email) => dispath(setEmail(email)),
});

Login.propTypes = {
  dispatchSetEmail: func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
