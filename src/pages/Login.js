import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  verifyInputs() {
    const { email, password } = this.state;
    const emailRegex = /^\w+@\w+.com$/;
    const passwordLength = 5;
    if (emailRegex.test(email) && password.length > passwordLength) {
      return false;
    }
    return true;
  }

  render() {
    const { email } = this.state;
    const { login } = this.props;
    return (
      <div>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          disabled={ this.verifyInputs() }
          type="button"
          onClick={ () => login({ email }) }
        >
          <Link to="/carteira">
            Entrar
          </Link>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
