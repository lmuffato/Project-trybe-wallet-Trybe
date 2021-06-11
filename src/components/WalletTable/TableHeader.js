import React from 'react';

function TableHeader() {
  return (
    <tr className="table-header">
      <th>Descrição</th>
      <th>Tag</th>
      <th>Método de pagamento</th>
      <th>Valor</th>
      <th>Moeda</th>
      <th>Câmbio utilizado</th>
      <th>Valor convertido</th>
      <th>Moeda de conversão</th>
      <th>Editar/Excluir</th>
    </tr>
  );
}

export default TableHeader;
