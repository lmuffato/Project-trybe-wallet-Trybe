import React from 'react';

export const formSelector = (name, arrayOptions, expense, func) => {
  const selector = (
    <div>
      <label
        htmlFor={ name }
        name={ expense }
        onChange={ func }
      >
        { `${name}: ` }
        <select aria-label={ name }>
          { arrayOptions.map((options) => <option key={ options }>{options}</option>)}
        </select>
      </label>
    </div>
  );
  return selector;
};

export const formInput = (title, expense, func) => {
  const imput = (
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
  return imput;
};
