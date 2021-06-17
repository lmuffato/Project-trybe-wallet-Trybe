import React, { useState } from 'react';

const listTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

export default function LabelTag() {
  const [tag, setTag] = useState('Alimentação');

  localStorage.setItem('tag', tag);

  return (
    <label htmlFor="tag">
      Tag
      <select
        id="tag"
        value={ tag }
        onChange={ (e) => setTag(e.target.value) }
      >
        { listTag.map((item) => (
          <option key={ item } value={ item }>{ item }</option>
        ))}
      </select>
    </label>
  );
}
