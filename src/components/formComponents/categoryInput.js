import React, { Component } from 'react';

class CategoryInput extends Component {
  render() {
    return (
      <label htmlFor="categoria">
        Tag
        <select name="categoria" id="categoria">
          <option key="Alimentação" value="category">Alimentação</option>
          <option key="Lazer" value="category">Lazer</option>
          <option key="Trabalho" value="category">Trabalho</option>
          <option key="Transporte" value="category">Transporte</option>
          <option key="Saúde" value="category">Saúde</option>
        </select>
      </label>
    );
  }
}

export default CategoryInput;
