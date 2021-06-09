import React from 'react';
import { useSelector } from 'react-redux';

const Table = () => {
  const expenses = useSelector((state) => state.wallet.expenses);
  const headers = [
    'Descrição',
    'Tag',
    'Método de pagamento',
    'Valor',
    'Moeda',
    'Câmbio utilizado',
    'Valor convertido',
    'Moeda de conversão',
    'Editar/Excluir',
  ];
  return (
    <table>
      <thead>
        <tr>
          {headers.map((th) => (
            <th key={ th }>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {console.log(expenses)}
      </tbody>
    </table>
  );
};

export default Table;
