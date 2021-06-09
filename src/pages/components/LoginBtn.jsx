import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginBtn extends Component {
  render() {
    const { btnDisable, onClick, email } = this.props;
    return (
      <button
        type="submit"
        disabled={ btnDisable }
        onClick={ onClick(email) }
      >
        ENTRAR
      </button>
    );
  }
}

export default LoginBtn;

LoginBtn.propTypes = {
  btnDisable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
