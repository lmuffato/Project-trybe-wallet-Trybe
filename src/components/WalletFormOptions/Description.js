import React from 'react';
import { func } from 'prop-types';

export default function Description(props) {
  const { description, handleInput } = props;
  return (
    <label htmlFor="expense-description">
      Descrição:
      <input
        id="expense-description"
        data-testid="description-input"
        type="text"
        name="description"
        value={ description }
        onChange={ handleInput }
      />
    </label>
  );
}

Description.propTypes = {
  setDescription: func,
}.isRequired;
