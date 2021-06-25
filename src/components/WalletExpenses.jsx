import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';
import { updateExpenses, setTotalPrice, setEditExpense } from '../actions';

class WalletExpenses extends React.Component {
  constructor(props) {
    super(props);

    this.deleteExpense = this.deleteExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
    this.renderExpensesTable = this.renderExpensesTable.bind(this);
  }

  deleteExpense(deleteId) {
    const { expenses, dispatchUpdateExpenses, dispatchSetTotalPrice } = this.props;
    const filteredExpenses = expenses.filter(
      (expense) => expense.id !== deleteId,
    );
    dispatchUpdateExpenses(filteredExpenses);
    const totalPrice = filteredExpenses.reduce((total, expense) => {
      const rates = expense.exchangeRates[expense.currency].ask;
      return total + (rates * expense.value);
    }, 0);
    dispatchSetTotalPrice(totalPrice.toFixed(2));
  }

  editExpense(id) {
    const { dispatchSetEditExpense } = this.props;
    dispatchSetEditExpense({ editable: true, id });
  }

  renderExpensesTable() {
    const { expenses } = this.props;
    return expenses.map((expense) => {
      const rates = expense.exchangeRates[expense.currency];
      return (
        <tr key={ expense.id }>
          <td>{expense.description}</td>
          <td>{expense.tag}</td>
          <td>{expense.method}</td>
          <td>{expense.value}</td>
          <td>{rates.name}</td>
          <td>{parseFloat(rates.ask).toFixed(2)}</td>
          <td>{(rates.ask * expense.value).toFixed(2)}</td>
          <td>Real</td>
          <td>
            <button
              data-testid="edit-btn"
              type="button"
              onClick={ () => this.editExpense(expense.id) }
            >
              Editar
            </button>
            <button
              data-testid="delete-btn"
              type="button"
              onClick={ () => this.deleteExpense(expense.id) }
            >
              Deletar
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
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
          {this.renderExpensesTable()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateExpenses: (expenses) => dispatch(updateExpenses(expenses)),
  dispatchSetTotalPrice: (totalPrice) => dispatch(setTotalPrice(totalPrice)),
  dispatchSetEditExpense: (edit) => dispatch(setEditExpense(edit)),
});

WalletExpenses.propTypes = {
  expenses: arrayOf(object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletExpenses);
