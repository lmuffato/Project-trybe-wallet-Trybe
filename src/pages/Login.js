// import Proptypes from 'prop-types';
// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { loginAction } from '../actions';

// class Login extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       disabledButton: true,
//       validEmail: false,
//       validPass: false,
//       fieldEmail: '',
//     };
//   }

//   handleChange({ target }) {
//     const numberPass = 5;
//     const regexEmail = /^\w+@\w+.com$/;
//     const resultRegex = regexEmail.test(target.value);
//     const { validEmail, validPass } = this.state;

//     if (target.type === 'email') {
//       this.setState({ fieldEmail: target.value });

//       if (resultRegex === true) {
//         this.setState((state) => ({ validEmail: !state.validEmail }));
//       } else this.setState({ validEmail: false });
//     }

//     if (target.type === 'password') {
//       if (target.value.length >= numberPass) {
//         this.setState({ validPass: true });
//       } else this.setState({ validPass: false });
//     }

//     if ((validEmail && validPass) === true) {
//       this.setState({ disabledButton: false });
//     } else this.setState({ disabledButton: true });
//   }

//   render() {
//     const { disabledButton, fieldEmail } = this.state;
//     const { fazerLogin } = this.props;
//     return (
//       <main>
//         <section>
//           <input
//             id="email"
//             type="email"
//             placeholder="username"
//             data-testid="email-input"
//             value={ fieldEmail }
//             onChange={ (e) => this.handleChange(e) }
//           />
//           <input
//             type="password"
//             placeholder="password"
//             data-testid="password-input"
//             onChange={ (e) => this.handleChange(e) }
//           />
//           <Link to="/carteira">
//             <input
//               type="button"
//               value="Entrar"
//               disabled={ disabledButton }
//               onClick={ () => fazerLogin(fieldEmail) }
//             />
//           </Link>
//         </section>
//       </main>
//     );
//   }
// }

// Login.propTypes = {
//   fazerLogin: Proptypes.objectOf(),
// }.isRequired;

// const mapDispatchToProps = (dispatch) => ({
//   fazerLogin: (state) => dispatch(loginAction(state)),
// });

// export default connect(null, mapDispatchToProps)(Login);
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isBtnDisabled: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isInputValid = this.isInputValid.bind(this);
  }

  isInputValid() {
    const { email, password } = this.state;
    const pwdMinChar = 5;
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(String(email).toLowerCase()) && password.length > pwdMinChar) {
      this.setState({ isBtnDisabled: false });
    } else this.setState({ isBtnDisabled: true });
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    }, () => this.isInputValid());
  }

  handleClick() {
    const { saveStateEmail } = this.props;
    const { email } = this.state;
    saveStateEmail(email);
  }

  render() {
    const { email, password, isBtnDisabled } = this.state;
    return (
      <div>
        Login
        <section>
          <input
            data-testid="email-input"
            id="email"
            value={ email }
            onChange={ (e) => this.handleChange(e) }
          />
          <input
            data-testid="password-input"
            id="password"
            value={ password }
            onChange={ (e) => this.handleChange(e) }
          />
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ isBtnDisabled }
              onClick={ () => this.handleClick() }
            >
              Entrar
            </button>
          </Link>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveStateEmail: (state) => dispatch(saveEmail(state)) });

Login.propTypes = {
  saveStateEmail: PropTypes.string,
  saveEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
