import React, { useState } from 'react';

export default function LabelValue() {
  const [value, setValue] = useState('');

  const handleChange = (evt) => (
    setValue(evt.target.value)
  );

  localStorage.setItem('value', value);

  return (
    <label htmlFor="valor">
      Valor:
      <input
        type="text"
        id="valor"
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}
