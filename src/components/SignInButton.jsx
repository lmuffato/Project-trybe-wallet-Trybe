import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignInButton extends Component {
  constructor() {
    super();
    this.state = {
      button: {
        isEnabled: () => (
          <button
            type="button"
            className="button is-success"
          >
            Entrar
          </button>),
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
};

export default SignInButton;
