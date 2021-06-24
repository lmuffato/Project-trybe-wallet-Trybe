import React from 'react';
import { useSelector } from 'react-redux';

function Table() {
  const reduxStates = useSelector((state) => state.wallet.expenses);

  return (
    <table>
      <thead>
        <tr>
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
      </thead>
      <tbody>

        {reduxStates.map((reduxState) => (
          <tr key={ reduxState.id }>
            <td>{reduxState.description}</td>
            <td>{reduxState.tag}</td>
            <td>{reduxState.method}</td>
            <td>{reduxState.value}</td>
            <td>{reduxState.exchangeRates[reduxState.currency].name}</td>
            <td>{Math.round(reduxState.exchangeRates[reduxState.currency].ask * 100) / 100}</td>
            <td>
              {(reduxState.value
            * reduxState.exchangeRates[reduxState.currency].ask).toFixed(2)}
            </td>
            <td>Real</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
