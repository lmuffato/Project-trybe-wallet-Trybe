import React from 'react';
import { connect } from 'react-redux';
import { setUserEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loginIsValid: false,
    };
  }

  emailValidation() {
    const email = document.querySelector('.email');
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email.value);
    return emailRegex;
  }

  passwordValidation() {
    const password = document.querySelector('.password');
    const minPasswordLenght = 6;
    return password.value >= minPasswordLenght;
  }

  render() {
    const { setEmail } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name">
            E-mail:
            <input
              className="email"
              type="email"
              name="name"
              data-testid="email-input"
              onChange={ (ev) => { setEmail(ev.target.value); } }
            />

          </label>
          <label htmlFor="password">
            Senha:
            <input
              className="password"
              type="password"
              name="password"
              data-testid="password-input"
            />

          </label>
          <button type="button">Entrar</button>
        </form>
        {/* {xablau} */}
      </div>
    );
  }
}
/* const mapStateToProps = (state) => ({
  xablau: state.user.email,
}); */

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(setUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
