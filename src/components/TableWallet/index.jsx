import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filteringExpenses } from '../../utils/filterCurrencies';

function TableWallet({ expenses }) {
  const handleConversionCurrencyName = (expense) => {
    const currencyType = filteringExpenses(expense);
    return currencyType[0].name;
  };

  const handleCurrencyType = (expense) => {
    const currencyType = filteringExpenses(expense);
    return Number(currencyType[0].ask * expense.value).toFixed(2);
  };

  const handleConversion = (expense) => {
    const currType = filteringExpenses(expense);
    return Number(currType[0].ask).toFixed(2);
  };

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
        { expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{ handleConversionCurrencyName(expense) }</td>
            <td>{ handleConversion(expense) }</td>
            <td>{ handleCurrencyType(expense) }</td>
            <td>Real</td>
            <td>editar</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(TableWallet);
