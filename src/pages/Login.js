import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from './components/Input';
import loginAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.updateUserRedux = this.updateUserRedux.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    const { type, value } = e.target;
    const { props: { loginProps }, state: { email } } = this;
    this.setState({
      [type]: value,
    });
    loginProps(email);
  }

  updateUserRedux() {
    const { props: { loginProps }, state: { email } } = this;
    console.log(email);
  }

  render() {
    const { email, password } = this.state;
    const { handleChange, updateUserRedux } = this;
    // https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression onde peguei regex
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript onde aprendi a usar o .test
    let btnDisable = true;
    const passwordMinimumLength = 6;
    if (password.length >= passwordMinimumLength && /^\S+@\S+\.\S+$/.test(email)) {
      btnDisable = false;
    } else {
      btnDisable = true;
    }
    return (
      <form>

        <h1>Login</h1>
        <Input
          name="email"
          value={ email }
          testId="email-input"
          onChange={ (e) => { handleChange(e); updateUserRedux(); } }
        />

        <Input
          name="password"
          value={ password }
          testId="password-input"
          onChange={ handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ btnDisable }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginProps: (payload) => dispatch(loginAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  loginProps: PropTypes.func.isRequired,
};
