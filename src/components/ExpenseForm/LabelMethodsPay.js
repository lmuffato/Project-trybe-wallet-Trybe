import React, { useState } from 'react';

const listMethodsPay = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

export default function LabelMethodsPay() {
  const [pay, setPay] = useState('Dinheiro');

  localStorage.setItem('method', pay);

  return (
    <label htmlFor="pagamento">
      Método de pagamento
      <select
        id="pagamento"
        value={ pay }
        onChange={ (e) => setPay(e.target.value) }
      >
        { listMethodsPay.map((item) => (
          <option key={ item } value={ item }>{ item }</option>
        ))}
      </select>
    </label>
  );
}
