import React, { Component } from 'react';

class Tag extends Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag:
        <select value="" name="tag" id="tag">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

export default Tag;
