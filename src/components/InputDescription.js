import React, { Component } from 'react';

class InputDescription extends Component {
  render() {
    return (
      <label htmlFor="descricao">
        Descrição
        <input type="text" id="descricao" name="descricao" />
      </label>
    );
  }
}

export default InputDescription;
