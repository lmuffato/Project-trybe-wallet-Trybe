import React from 'react';

function Currencies() {
  return (
    <div className="container">
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency">
          <option value="vazio">Vazio</option>
        </select>
      </label>
    </div>
  );
}

export default Currencies;
