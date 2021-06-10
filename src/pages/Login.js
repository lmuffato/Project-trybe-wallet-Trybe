import React from 'react';
import login from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      hasValidLogin: false,
      buttonClicked: false
    }
  }

  handleChange = ({target: { name, value }}) => {
    this.setState({[name]: value }, () => {
      if (this.hasValidEmail() && this.hasValidPassword()) {
        this.setState({hasValidLogin: true})
      } else {
        this.setState({hasValidLogin: false})
      }
    })
  }

  hasValidEmail = () => {
    const { email } = this.state;
    const emailRegex = /[a-z0-9]+@[a-z0-9]+(\.com)$/gi
    return emailRegex.test(email)
  }

  hasValidPassword = () => {
    const { password } = this.state;
    return password.length >= 6;
  }

  render() {
    const { email, password, hasValidLogin, buttonClicked } = this.state;
    const { login } = this.props;

    return (
      buttonClicked ? <Redirect to="/carteira" /> :
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={!hasValidLogin}
            onClick={
              () => {
                login(email, password);
                this.setState({buttonClicked: true});
              }
            }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password))
})

export default connect(null, mapDispatchToProps)(Login);
