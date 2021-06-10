import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SignInButton extends Component {
  constructor(props) {
    super(props);
    const { action } = this.props;
    this.state = {
      button: {
        isEnabled: () => (
          <Link to="/carteira" className="form-login">
            <button
              type="button"
              className="button is-success"
              onClick={ action }
            >
              Entrar
            </button>
          </Link>),
        isDisabled: () => (
          <button
            type="button"
            className="button is-success"
            disabled
          >
            Entrar
          </button>),
      },
    };
  }

  render() {
    const { emailCorrect } = this.props;
    const { button } = this.state;
    return (
      <div className="form-login">
        { emailCorrect ? button.isEnabled() : button.isDisabled() }
      </div>
    );
  }
}

SignInButton.propTypes = {
  emailCorrect: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default SignInButton;
