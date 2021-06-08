import React from 'react';
import { string, shape } from 'prop-types';

const LabelSelect = (props) => {
  const { select, options } = props;
  const { text, id } = select;

  return (
    <label htmlFor={ id }>
      {text}

      <select id={ id }>
        {options.map((value) => (
          <option key={ value } data-testid={ value }>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LabelSelect;

LabelSelect.propTypes = {
  select: shape({
    text: string,
    testid: string,
    id: string,
  }),
}.isRequired;
