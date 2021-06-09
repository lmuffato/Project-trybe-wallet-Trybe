import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLoginSucess } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      isValidEmail: false,
      isValidPassword: false,
      isValidLogin: false,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.passOk = this.passOk.bind(this);
    this.checkinputs = this.checkinputs.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  checkinputs() {
    const { isValidEmail, isValidPassword } = this.state;
    if (isValidEmail && isValidPassword) {
      this.setState(() => ({
        isValidLogin: true,
      }));
    } else {
      this.setState(() => ({
        isValidLogin: false,
      }));
    }
  }

  handleEmail(event) {
    const { value } = event.target;
    const re = /\S+@\S+\.\S+/; // consultado validação de e-mail via expressão regular em: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    if (re.test(value)) {
      this.setState(() => ({
        email: value,
        isValidEmail: true,
      }));
    } else {
      this.setState(() => ({
        isValidEmail: false,
      }));
    }
    this.checkinputs();
  }

  passOk(event) {
    const { value } = event.target;
    const length = 4;
    if (value.length > length) {
      this.setState(() => ({
        isValidPassword: true,
      }));
    } else {
      this.setState(() => ({
        isValidPassword: false,
      }));
    }
    this.checkinputs();
  }

  loginUser() {
    const { email, isValidLogin } = this.state;
    const { userEmail } = this.props;
    const { history } = this.props;
    if (isValidLogin) {
      userEmail(email);
      history.push('/carteira');
    }
  }

  render() {
    const { isValidLogin } = this.state;
    return (
      <div>
        Login
        <input type="email" onChange={ this.handleEmail } data-testid="email-input" />
        <input type="password" onChange={ this.passOk } data-testid="password-input" />
        <button
          type="button"
          onClick={ this.loginUser }
          disabled={ !isValidLogin }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(userLoginSucess(email)),
});

const mapStateToProps = ({ user: { email, isLogged } }) => ({
  email,
  isLogged,
});

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
