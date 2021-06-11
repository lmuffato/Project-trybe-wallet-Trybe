import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import user from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => { this.handleErrors(); });
  }

  handleErrors() {
    const passwordLength = 6;
    const { email, password } = this.state;
    const errorCases = [
      !email.match(/^\w+@\w+.com$/),
      password.length < passwordLength,
    ];
    const formComplete = errorCases.every((error) => error !== true);
    this.setState({
      formErrors: !formComplete,
    });
  }

  render() {
    const { formErrors, email } = this.state;
    const { userEmail } = this.props;
    return (
      <div>
        <h1>Bem Vindo a Trybe Wallet</h1>
        <form>
          <div>
            <input
              data-testid="email-input"
              type="text"
              onChange={ this.handleChange }
              placeholder="Insert a valid email"
              name="email"
            />
            <input
              data-testid="password-input"
              type="password"
              onChange={ this.handleChange }
              placeholder="Insert your password"
              name="password"
            />
          </div>
          <div>
            <Link to="/carteira">
              <button
                type="button"
                disabled={ formErrors }
                onClick={ () => userEmail({ email }) }
              >
                Entrar
              </button>
            </Link>

          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (e) => dispatch(user(e)),
});

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
