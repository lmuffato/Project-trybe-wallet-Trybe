import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleValidate = this.handleValidate.bind(this);

    this.state = {
      email: '',
      password: '',
      disabled: false,
    };
  }

  handleChange({ target: { name, value } }) {
    const { email, password } = this.state;
    this.setState({
      [name]: value,
    });
    this.handleValidate(email, password);
  }

  handleValidate(emailValidate, passwordValidate) {
    const regX = /\S+@\S+\.\S+/;
    const pwd = 5;
    const resoutEmail = regX.test(emailValidate);
    const resoutPwd = (passwordValidate.length >= pwd);
    this.setState({ disabled: resoutEmail && resoutPwd });
  }

  handleClick(e) {
    e.preventDefault();
    const { email } = this.state;
    const { loginUser, history, fetchApi } = this.props;
    loginUser(email);
    fetchApi();
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            id="user_email"
            value={ email }
            placeholder="Digite seu e-mail"
            onChange={ (e) => this.handleChange(e) }
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            id="user_password"
            value={ password }
            placeholder="Digite sua senha"
            onChange={ (e) => this.handleChange(e) }
          />
          <button
            onClick={ (e) => this.handleClick(e) }
            disabled={ !disabled }
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email) => dispatch(userLogin(email)),
  fetchApi: () => dispatch(fetchAPI()),
});

Login.propTypes = {
  history: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  fetchApi: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
