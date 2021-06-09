import React from 'react';
import { func } from 'prop-types';

export default function Category(props) {
  const { handleInput, category } = props;
  return (
    <label htmlFor="expense-category">
      Tag:
      <select
        id="expense-category"
        name="category"
        value={ category }
        onChange={ handleInput }
      >
        <option value="food">Alimentação</option>
        <option value="lounge">Lazer</option>
        <option value="work">Trabalho</option>
        <option value="transport">Transporte</option>
        <option value="health">Saúde</option>
      </select>
    </label>
  );
}

Category.propTypes = {
  selectCategory: func,
}.isRequired;
