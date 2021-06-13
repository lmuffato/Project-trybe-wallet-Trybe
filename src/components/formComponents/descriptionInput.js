import React, { Component } from 'react';

class DescriptionInput extends Component {
  render() {
    return (
      <label htmlFor="descricao">
        Descrição
        <input type="text" id="descricao" name="descricao" />
      </label>
    );
  }
}

export default DescriptionInput;
