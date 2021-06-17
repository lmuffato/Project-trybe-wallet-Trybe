import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { user } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      shoudRedirec: false,
      emailCheck: false,
      passCheck: false,
      buttonDisable: true,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.emailPattern = this.emailPattern.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
  }

  emailPattern() {
    return "[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
  }


/* ideia para verificação de email tirada daqui:
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript*/

  handleChanges(a) {
    const { passCheck, emailCheck } = this.state
    if (a.type === "email") {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailchecker = re.test(String(a.value).toLowerCase());
    if (emailchecker) {
      this.setState({
        
            email: a.value,
            emailCheck: true
          })
    }  
    }
    if (a.type === "password") {
      const test = a.value;
      if (test.length >= 5 ) {
        this.setState({
            passCheck: true
          })
      }
    }
    if ( passCheck && emailCheck) {
      this.setState({
        buttonDisable: false
      })
    }
  }

  handleLogin(a) {
    const { userLogin } = this.props;
    const { email } = this.state
    const loginToken = {
      email,
    }
    this.setState({
      shoudRedirec: true,
    })
    userLogin(loginToken);
  }

  render() {
    const { shoudRedirec , buttonDisable} = this.state
    if (shoudRedirec) return <Redirect to="/carteira"/>
    return <>
    <form>
    <input
    type='email'
    onChange={(event) => this.handleChanges(event.target)}
    data-testid="email-input"
    placeholder="Enter your email"
    pattern={this.emailPattern()}>
    </input>
    <input
    type="password"
    onChange={(event) => this.handleChanges(event.target)}
    data-testid="password-input"
    placeholder="Enter your Password"
    minLength="6">
    </input>
    <button
    onClick={() => this.handleLogin()}
    disabled={buttonDisable}>
      Entrar
    </button>
    </form>
    </>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (payload) => dispatch(user(payload)),
});

Login.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
