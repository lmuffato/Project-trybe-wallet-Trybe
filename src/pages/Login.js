import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import loginAction from '../actions';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isValid: false,
      userExisist: false,
      isDisabled: true,
      emailVerified: false,
      passVerified: false,
    };
    this.emailRef = React.createRef();
    this.emailController = React.createRef();
    this.emailError = React.createRef();
    this.passwordRef = React.createRef();
    this.passwordController = React.createRef();
    this.passwordError = React.createRef();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { emailVerified, passVerified } = this.state;
      this.setState({
        isDisabled: !(emailVerified && passVerified),
      });
    });
    const { email, password } = this.state;
    if (name === 'email') this.checkEmail(email);
    if (name === 'password') this.checkPassword(this.passwordRef.current.value);
  };

  handleClick = (e) => {
    const { email, password } = this.state;
    const { login } = this.props;
    e.preventDefault();
    this.checkInputs((isValid) => {
      if (isValid && !!email && !!password) {
        this.checkRegister(email, password);
        login({ email, password });
      }
    });
  };

  checkEmail = (email) => {
    if (this.emailRef === '') {
      this.setErrorFor(
        this.emailController,
        this.emailError,
        'Preencha o e-mail.',
      );
      this.setState({ emailVerified: false, isDisabled: true });
    }
    if (!this.validateEmail(email)) {
      this.setErrorFor(
        this.emailController,
        this.emailError,
        'Formato de e-mail inválido.',
      );
      this.setState({ emailVerified: false, isDisabled: true });
    } else {
      this.emailController.current.className = 'controller';
      this.setState({ emailVerified: true });
    }
  };

  checkPassword = (password) => {
    const passMinLength = 6;
    if (this.passwordRef === '') {
      this.setErrorFor(
        this.passwordController,
        this.passwordError,
        'Preencha a senha.',
      );
      this.setState({ passVerified: false, isDisabled: true });
    }
    if (password.length < passMinLength) {
      this.setErrorFor(
        this.passwordController,
        this.passwordError,
        'Tamanho de senha inválido. Min 6 caracteres.',
      );
      this.setState({ passVerified: false, isDisabled: true });
    } else {
      this.passwordController.current.className = 'controller';
      this.setState({ passVerified: true });
    }
  };

  checkInputs = (callback) => {
    const { passVerified, emailVerified } = this.state;
    if (emailVerified && passVerified) {
      this.setState({ isValid: true }, () => {
        const { isValid } = this.state;
        callback(isValid);
      });
    }
  };

  setErrorFor = (controller, small, message) => {
    small.current.innerHTML = message;
    controller.current.className = 'controller error';
  };

  validateEmail = (email) => {
    const re = /\w+@\w+\.\w+/gi;
    return re.test(email.toLowerCase());
  };

  checkRegister = (email, password) => {
    const { user } = this.props;
    if (email === user.email && password === user.password) {
      this.setState({ userExisist: true });
    }
  };

  render() {
    const { userExisist, isDisabled, passVerified, emailVerified } = this.state;
    console.log(emailVerified, passVerified);
    return (
      <section className="login-page">
        <form className="login-form-container">
          <span className="login-title">Login</span>
          <div className="login-input-container">
            <div className="controller" ref={ this.emailController }>
              <Input
                type="email"
                name="email"
                handleChange={ this.handleChange }
                checkEmail={ this.checkEmail }
                refValue={ this.emailRef }
              />
              <span>E-mail</span>
              <small className="error-message" ref={ this.emailError }>
                Error message
              </small>
            </div>
            <div className="controller" ref={ this.passwordController }>
              <Input
                type="password"
                name="password"
                handleChange={ this.handleChange }
                checkPassword={ this.checkPassword }
                refValue={ this.passwordRef }
              />
              <span>Password</span>
              <small className="error-message" ref={ this.passwordError }>
                Error message
              </small>
            </div>
          </div>
          {userExisist ? <Redirect to="/carteira" /> : ''}
          <button
            type="submit"
            className="btn login-button"
            onClick={ this.handleClick }
            disabled={ isDisabled }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginAction(user)),
});

Login.propTypes = {
  login: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
