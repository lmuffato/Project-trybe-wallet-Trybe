import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.passwordIsValid = this.passwordIsValid.bind(this);
    this.emailIsValid = this.emailIsValid.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
      enabledButton: true,
    };
  }

  emailIsValid() {
    const { email } = this.state;

    return email.match(/\S+@\S+\.\S+/);
  }

  passwordIsValid() {
    const { password } = this.state;
    const SIX = 6;
    return password.length >= SIX;
  }

  handleChange({ target: { type, value } }) {
    this.setState({
      [type]: value }, () => {
      if (this.emailIsValid() && this.passwordIsValid()) {
        this.setState({ enabledButton: false });
      } else {
        this.setState({ enabledButton: true });
      }
    });
  }

  render() {
    const { email, password, enabledButton } = this.state;

    return (
      <section className="loginContainer">
        <header className="loginHeader">
          <h1>Trybe Wallet</h1>
        </header>
        <section className="login">
          <input
            type="email"
            placeholder="Email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            type="password"
            placeholder="Password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <input
              className="button"
              type="button"
              value="Entrar"
              disabled={ enabledButton }
            />
          </Link>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Login);
