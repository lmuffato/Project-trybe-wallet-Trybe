import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, delExpense, fetchCurrencies, editExpense } from '../actions';

function ExpensesTable(props) {
  const { expenses, removeExpense, loaldToEdition } = props;
  const tableHeader = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
    'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
  return (
    <table>
      <tr>
        {tableHeader.map((collunTitle, index) => (
          <th key={ index }>{ collunTitle }</th>
        ))}
      </tr>
      {expenses.map((expense) => {
        const { value, description, currency,
          method, tag, exchangeRates, id } = expense;
        const exchangeRate = Number(exchangeRates[currency].ask);
        const convertedValue = (exchangeRate * Number(value)).toFixed(2);
        const currencyName = exchangeRates[currency].name.split('/')[0];
        return (
          <tr key={ id }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{value}</td>
            <td>{currencyName}</td>
            <td>{exchangeRate.toFixed(2)}</td>
            <td>{convertedValue}</td>
            <td>Real</td>
            <td>
              <button
                type="button"
                onClick={ () => loaldToEdition(id) }
                data-testid="edit-btn"
              >
                Editar
              </button>
              <button
                type="button"
                onClick={ () => removeExpense(id) }
                data-testid="delete-btn"
              >
                Excluir
              </button>
            </td>
          </tr>
        );
      })}

    </table>
  );
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
  loaldToEdition: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  isLoalding: state.wallet.isLoalding,
  currentId: state.wallet.currentId,
});

const mapDispachToProps = (dispach) => ({
  updateCurrencies: () => dispach(fetchCurrencies()),
  addNewExpense: (newExpense) => dispach(addExpense(newExpense)),
  removeExpense: (id) => dispach(delExpense(id)),
  updateExpense: (expenseToUpdate) => dispach(editExpense(expenseToUpdate)),
});

export default connect(mapStateToProps, mapDispachToProps)(ExpensesTable);
