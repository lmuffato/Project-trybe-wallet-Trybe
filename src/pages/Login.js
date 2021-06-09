import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginAction from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.handleInputsAndVerify = this.handleInputsAndVerify.bind(this);
    this.loginSucess = this.loginSucess.bind(this);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleInputsAndVerify({ target }) {
    const { name, value } = target;
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const passCounter = 6;
    this.setState({ [name]: value });
    if (regex.test(email) === true && password.length >= passCounter - 1) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  loginSucess() {
    window.location.href = 'carteira';
  }

  render() {
    const { disabled, email } = this.state;
    const { loginClick } = this.props;
    return (
      <div>
        <form>
          <input
            type="text"
            data-testid="email-input"
            onChange={ this.handleInputsAndVerify }
            name="email"
          />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.handleInputsAndVerify }
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ disabled }
              onClick={ () => loginClick(email) }
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
  loginClick: (email) => dispatch(loginAction({ email })),
});

export default connect(null, mapDispatchToProps)(Login);
