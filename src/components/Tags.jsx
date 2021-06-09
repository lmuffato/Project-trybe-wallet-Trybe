import React from 'react';

function Tags() {
  return (
    <label htmlFor="tags">
      Tag
      <select name="tags" id="tags">
        <option value="food">Alimentação</option>
        <option value="leisure">Lazer</option>
        <option value="work">Trabalho</option>
        <option value="transportation">Transporte</option>
        <option value="health">Saúde</option>
      </select>
    </label>
  );
}

export default Tags;
