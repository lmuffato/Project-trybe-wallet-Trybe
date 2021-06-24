import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delExpense } from '../actions/index';

function Table() {
  const ths = [
    'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
    'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

  const reduxStates = useSelector((state) => state.wallet.expenses);
  const dispatch = useDispatch();
  return (
    <table>
      <thead>
        <tr>
          {ths.map((th) => <th key={ th }>{th}</th>)}
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
            <td>
              {Math.round(
                reduxState.exchangeRates[reduxState.currency].ask * 100,
              ) / 100}
            </td>
            <td>
              {(reduxState.value
            * reduxState.exchangeRates[reduxState.currency].ask).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => dispatch(delExpense(reduxState.id)) }
              >
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
