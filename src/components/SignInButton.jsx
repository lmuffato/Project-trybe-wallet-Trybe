import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SignInButton extends Component {
  render() {
    const { emailCorrect, action } = this.props;
    return (
      <div className="form-login">
        <Link to="/carteira" className="form-login">
          <button
            type="button"
            className="button is-success"
            onClick={ action }
            disabled={ !emailCorrect }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

SignInButton.propTypes = {
  emailCorrect: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default SignInButton;
