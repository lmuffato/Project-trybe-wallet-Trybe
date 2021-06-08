import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      shouldRedirect: false
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  };
  
  validateEmail = (email) => {
    const includesAtSign = email.includes('@');
    const includesDotCom = email.includes('.com');
    return includesAtSign && includesDotCom;
  };
  
  submitForm = () => {
    const { email, password } = this.state;
    const { login } = this.props;
    const isPasswdValid = password.length >= 6;
    if (this.validateEmail(email) && isPasswdValid) {
      login({email, password});
      alert('Login efetuado com sucesso');
      this.setState({
        email: '',
        password: '',
        shouldRedirect: true
      })
    } else {
      alert('Dados inválidos');
    }
  };
  
  render() {
    const { email, password, shouldRedirect } = this.state;
    
    if (shouldRedirect) {
      return <Redirect to="/carteira"/>
    }

    return (
      <section>
        <label>
          E-mail:
          <input
            type="text" 
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ (e) => this.handleChange(e)}
          />
        </label>
        
        <label>
          Senha:
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ (e) => this.handleChange(e)}
          />
        </label>

        <button onClick={ this.submitForm }>
          Entrar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e))
})

export default connect(null, mapDispatchToProps)(Login);
