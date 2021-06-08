import React from 'react';
import { string, shape, func } from 'prop-types';

const LabelSelect = (props) => {
  const { select, options, getExpense } = props;
  const { text, control } = select;

  return (
    <label htmlFor={ control }>
      {text}

      <select
        id={ control }
        name={ control }
        onChange={ getExpense }
      >
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
    control: string,
  }),
  getExpense: func,
}.isRequired;
