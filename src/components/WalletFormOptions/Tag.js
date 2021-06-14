import React from 'react';
import { func, string } from 'prop-types';

export default function Tag(props) {
  const { handleInput, tag } = props;
  return (
    <label className="form-label" htmlFor="expense-tag">
      Tag:
      <select
        id="expense-tag"
        data-testid="tag-input"
        name="tag"
        value={ tag }
        onChange={ handleInput }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    </label>
  );
}

Tag.propTypes = {
  handleInput: func,
  tag: string,
}.isRequired;
