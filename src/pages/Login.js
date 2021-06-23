import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import userLogin from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;
    const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi; // Regex ==> https://regexr.comm/2ri2c
    const six = 6;
    return (
      <div>
        <h2>Login</h2>

        <input
          type="email"
          data-testid="email-input"
          onChange={
            (event) => this.setState({ email: event.target.value })
          }
        />

        <input
          type="password"
          data-testid="password-input"
          onChange={
            (event) => this.setState({ password: event.target.value })
          }
        />

        <Link to="/carteira">
          <button
            type="submit"
            disabled={
              !(email.match(emailRegex))
              || password.length < six
            }
            onClick={
              () => login(email)
            }
          >
            Entrar
          </button>
        </Link>

      </div>
    );
  }
}

// export default Login;

// codigo escrito com ajuda do Marcelo Mauricio t10 //

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
