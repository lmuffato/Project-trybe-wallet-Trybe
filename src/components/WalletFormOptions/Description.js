import React from 'react';
import { func } from 'prop-types';

export default function Description(props) {
  const { description, handleInput } = props;
  return (
    <label className="form-label" htmlFor="expense-description">
      Descrição:
      <input
        id="expense-description"
        className="description"
        data-testid="description-input"
        type="text"
        name="description"
        value={ description }
        onChange={ handleInput }
        autoComplete="off"
      />
    </label>
  );
}

Description.propTypes = {
  setDescription: func,
}.isRequired;
