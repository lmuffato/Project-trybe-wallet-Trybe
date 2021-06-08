import React from 'react';
import { string, shape } from 'prop-types';

const LabelInput = (props) => {
  const { input } = props;
  const { text, type, testid, id } = input;

  return (
    <label htmlFor={ id }>
      {text}
      <input type={ type } data-testid={ testid } id={ id } />
    </label>
  );
};

export default LabelInput;

LabelInput.propTypes = {
  input: shape({
    text: string,
    testid: string,
    id: string,
    type: string,
  }),
}.isRequired;
