import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      validLogin: true,
    };
    this.handlechenge = this.handlechenge.bind(this);
  }

  handlechenge(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    const { email, password } = this.state;
    const regexEmail = /\w+@\w+\.\w+/gi.test(email);
    const regexSenha = /(.{5,})/gi.test(password);
    if (regexEmail && regexSenha) {
      this.setState({
        validLogin: false,
      });
    }
  }

  render() {
    const { validLogin, email } = this.state;
    const { emailLogin } = this.props;
    return (
      <div>
        <form>
          <input
            name="email"
            type="email"
            data-testid="email-input"
            placeholder="email"
            onChange={ this.handlechenge }
          />
          <input
            name="password"
            type="password"
            data-testid="password-input"
            placeholder="senha"
            onChange={ this.handlechenge }
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ validLogin }
              onClick={ () => emailLogin(email) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailLogin: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  emailLogin: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
