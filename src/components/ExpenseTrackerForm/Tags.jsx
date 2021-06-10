import React from 'react';
import PropTypes from 'prop-types';

function Tags({ name, value, handleChange }) {
  return (
    <label htmlFor="tags">
      Tag
      <select
        name={ name }
        id="tags"
        value={ value }
        onChange={ handleChange }
      >
        <option value=" ">Selecione</option>
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    </label>
  );
}

Tags.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Tags;

// Source:
// https://pt.stackoverflow.com/questions/404856/como-pegar-o-valor-do-select
