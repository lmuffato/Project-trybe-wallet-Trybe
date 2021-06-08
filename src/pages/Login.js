import React from 'react';
import { connect } from 'react-redux';
import { userLoginSucess } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      isValidEmail: false,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.IsEmail = this.IsEmail.bind(this);
  }

  IsEmail(email) { // consultado validação de e-mail via expressão regular em: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleEmail(event) {
    const { value } = event.target;
    const { userEmail } = this.props;
    const { email, isValidEmail } = this.state;
    if (this.IsEmail(value)) {
      this.setState({ email: value, isValidEmail: true });
    } if (isValidEmail) {
      event.target.removeAtribute('disabled');
      userEmail(email);
    }
  }

  render() {
    return (
      <div>
        Login
        <input type="email" onChange={ this.handleEmail } data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button type="button" disabled>Entrar</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
