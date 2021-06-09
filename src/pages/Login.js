import React from 'react';
import { connect } from 'react-redux';
import { makeLogin } from '../actions';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      loginValid: false,
    };
  };

  loginIsValid = () => {
    const { email, password } = this.state;
    const validateRegex =  /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    console.log(validateRegex.test(email), 'teste do email');
    console.log(password.length >= 6, 'teste do password');

    if (validateRegex.test(email) && password.length >= 6) {
      this.setState({ loginValid: true });
      console.log('login foi validado')
    }
  };

  handleLogin = ({ target: { value, id } }) => {
    this.setState({ [id]: value })
    this.loginIsValid();
  };

  submitLogin = (event) => {
    event.preventDefault();
    const{ email, password } = this.state;
    const { registerLogin } = this.props;
    registerLogin( { email, password });
  };

  render() {
    const { email, password, loginValid } = this.state;
    return (
      <section>
        <h1>Faça seu login</h1>
        <form>
          <label htmlFor="email">
            E-mail:
            <input 
              type="email" 
              id="email" 
              testid="email-input" 
              value={ email } 
              placeholder="digite o email"
              onChange={ this.handleLogin }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input 
              type="password" 
              id="password" 
              data-testid="password-input" 
              value={ password }
              placeholder="digite a senha"
              onChange={ this.handleLogin }
            />
          </label>
          <button type="submit" 
            disabled={ !loginValid } 
            onClick={this.submitLogin}
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerLogin: (userInfo) => dispatch(makeLogin(userInfo)),
});

export default connect(mapDispatchToProps)(Login);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

Login.propTypes = {

};

export default Login;