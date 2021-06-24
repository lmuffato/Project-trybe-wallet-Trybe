import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteExpenses } from '../actions/index';

class TableExpenses extends React.Component {
  toDelete(id) {
    const { toDeleteExpenses, expenses } = this.props;
    const filterExpense = expenses.filter((expense) => expense.id !== id);
    const conditionToDelete = filterExpense || [];
    toDeleteExpenses(conditionToDelete);
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
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
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name.split('/', 1)}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(expense.exchangeRates[expense.currency].ask)
                  * Number(expense.value)).toFixed(2)}
              </td>
              <td>Real</td>
              <td data-label="Editar/Excluir">
                <button
                  type="button"
                  className="del-btn"
                  data-testid="delete-btn"
                  onClick={ () => this.toDelete(expense.id) }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.shape().isRequired,
  toDeleteExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  toDeleteExpenses: (expenses) => dispatch(deleteExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
