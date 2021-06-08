import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      emailIsValid: false,
      password: '',
      passwordIsValid: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  // A regex abaixo foi obtida através do post referenciado abaixo:
  // https://pt.stackoverflow.com/a/1388
  handleChangeEmail({ target: { value } }) {
    this.setState({
      email: value,
      emailIsValid: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value),
    });
  }

  handleChangePassword({ target: { value } }) {
    this.setState({
      password: value,
      passwordIsValid: /^.{6,}$/.test(value),
    });
  }

  render() {
    const { email, password, emailIsValid, passwordIsValid } = this.state;
    const { history, toLogin } = this.props;
    return (
      <div className="container">
        <section className="logo">
          logo
        </section>
        <main>
          <form>
            <input
              name="email"
              value={ email }
              type="text"
              data-testid="email-input"
              pattern="/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i"
              placeholder="Email"
              onChange={ this.handleChangeEmail }
            />
            <input
              name="password"
              value={ password }
              type="password"
              data-testid="password-input"
              placeholder="Senha"
              onChange={ this.handleChangePassword }
            />
            <button
              disabled={ !(emailIsValid && passwordIsValid) }
              type="button"
              onClick={ (e) => {
                e.preventDefault();
                toLogin(email, password);
                history.push('/carteira');
              } }
            >
              Entrar

            </button>
          </form>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = () => (dispatch) => ({
  toLogin: (email, password) => dispatch(login(email, password)),
});

Login.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  toLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
