import React from 'react';
import { connect, useSelector } from 'react-redux';

const TBody = () => {
  const { expenses } = useSelector((state) => state.wallet);
  console.log('expenses:');
  console.log(expenses);
  const tBody = expenses.map((expense) => {
    const {
      currency, description, exchangeRates, id, method, tag, value,
    } = expense;
    console.log(currency);
    const { ask, name } = exchangeRates[currency];
    const coin = name.split('/')[0];
    const convertedValue = (value * ask).toFixed(2);

    return (
      <tr key={ id }>
        <td name="Descrição">{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{coin}</td>
        <td>{Number(ask).toFixed(2)}</td>
        <td>{convertedValue}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            onClick={ () => console.log('me clicaram aqui ó') }
            data-testid="delete-btn"
          >
            Deletar
          </button>
        </td>
      </tr>
    );
  });
  return (tBody);
};

const mapStateToProps = ({ wallet: { expenses, itensPrices } }) => ({
  expenses,
  itensPrices,
});
export default connect(mapStateToProps)(TBody);
