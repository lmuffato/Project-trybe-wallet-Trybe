import React from 'react';

class TypeSelect extends React.Component {
  render() {
    return (
      <label htmlFor="type">
        Tag
        <select id="type">
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transportation">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }
}

export default TypeSelect;
