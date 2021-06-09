import React, { Component } from 'react';

class ValueForm extends Component {
  render() {
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
      </div>
    );
  }
}

export default ValueForm;
