import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    const regexEmail = /\S+@\S+\.\S+/;
    const validatePassword = 5;
    const { email, password } = this.state;
    if (regexEmail.test(email) === true && password.length === validatePassword) {
      return this.setState({ disabled: false });
    } return (this.setState({ disabled: true }));
  }

  render() {
    const { email, password, disabled } = this.state;
    const { emailDispatch } = this.props;
    return (
      <section className="container">
        <main className="card">
          <h1 className="card-header">TrybeWallet</h1>
          <form className="login-form">
            <label htmlFor="email">
              <input
                className="login-form-input"
                data-testid="email-input"
                type="email"
                name="email"
                value={ email }
                placeholder="rico@money.com"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password">
              <input
                className="login-form-input"
                data-testid="password-input"
                type="password"
                name="password"
                value={ password }
                placeholder="Password"
                onChange={ this.handleChange }
              />
            </label>
          </form>
          <button
            disabled={ disabled }
            className="enter-bttn"
            type="button"
            onClick={ () => emailDispatch(email) }
          >
            <Link to="/carteira">
              <h3 className="enter-bttn-text">Entrar</h3>
            </Link>
          </button>
        </main>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  loginAction: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);

// regex encontrado em https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
// Ref: https://github.com/tryber/sd-010-a-project-trybewallet/pull/75
