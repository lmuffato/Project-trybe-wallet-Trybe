import React, { Component } from 'react';

class InputValue extends Component {
  render() {
    return (
      <label htmlFor="valor">
        Valor
        <input type="text" name="valor" id="valor" />
      </label>
    );
  }
}

export default InputValue;
