import React from 'react';

export const formSelector = (name, arrayOptions, expense, func) => {
  const select = (
    <div>
      <label
        htmlFor={ name }
      >
        { `${name}: ` }
        <select
          aria-label={ name }
          name={ expense }
          onChange={ (e) => func(e) }
        >
          { arrayOptions.map((options) => <option key={ options }>{options}</option>)}
        </select>
      </label>
    </div>
  );
  return select;
};

export const formInput = (title, expense, func) => {
  const input = (
    <div>
      <label htmlFor={ title }>
        { `${title}: ` }
        <input
          aria-label={ title }
          type="text"
          name={ expense }
          onChange={ (e) => func(e) }
        />
      </label>
    </div>
  );
  return input;
};
