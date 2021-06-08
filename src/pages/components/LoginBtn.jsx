import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginBtn extends Component {
  render() {
    const { btnDisable } = this.props;
    return (
      <button
        type="submit"
        disabled={ btnDisable }
      >
        ENTRAR
      </button>
    );
  }
}

export default LoginBtn;

LoginBtn.propTypes = {
  btnDisable: PropTypes.bool.isRequired,
};
