import React, { useState } from 'react';

export default function LabelValue() {
  const [description, setDescrition] = useState('');

  localStorage.setItem('description', description);

  return (
    <label htmlFor="descricao">
      Descrição:
      <input
        type="text"
        id="descricao"
        value={ description }
        onChange={ (e) => setDescrition(e.target.value) }
      />
    </label>
  );
}
