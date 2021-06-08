import React from 'react';

function Currency() {
  return (
    <label htmlFor="currency">
      Moeda
      <select name="currency" id="currency">
        {/* <option value="1">BRL</option> */}
      </select>
    </label>
  );
}

export default Currency;

// Referência:
// sintaxe correta da tag select: https://www.w3schools.com/tags/tag_select.asp
