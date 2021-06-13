import React, { Component } from 'react';

class ValueInput extends Component {
  render() {
    return (
      <label htmlFor="valor">
        Valor
        <input type="text" name="valor" id="valor" />
      </label>
    );
  }
}

export default ValueInput;
