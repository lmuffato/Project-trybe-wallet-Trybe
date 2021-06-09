import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionEmail } from '../actions/index';

class login extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.dispatchEmail = this.dispatchEmail.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validateInput() {
    const { email, password } = this.state;
    const isValid = email.match(/^\w+@\w+.com$/);
    const minimumPasswordLength = 5;
    if (password.length > minimumPasswordLength && isValid) {
      return false;
    }
    return true;
  }

  dispatchEmail() {
    const { saveEmail } = this.props;
    const { email } = this.state;
    saveEmail(email);
  }

  render() {
    return (
      <div>
        <h2>Trybe</h2>
        <input
          type="text"
          data-testid="email-input"
          placeholder="email"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          data-testid="password-input"
          placeholder="password"
          name="password"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            disabled={ this.validateInput() }
            type="button"
            onClick={ () => this.dispatchEmail() }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (value) => dispatch(actionEmail(value)),
});

login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(login);
