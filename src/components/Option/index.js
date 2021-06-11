import React from 'react';
import { string } from 'prop-types';

function Option({ option }) {
  return (
    <option value={ option }>
      {option}
    </option>
  );
}

Option.propTypes = {
  option: string,
}.isRequired;

export default Option;
