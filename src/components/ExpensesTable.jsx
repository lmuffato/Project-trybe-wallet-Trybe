import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, calculateTotal } from '../actions';

class ExpensesTable extends React.Component {
  constructor() {
    super();
    this.deleteExpense = this.deleteExpense.bind(this);
    this.state = {
      tableHeading: ['Descrição', 'Tag',
        'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
        'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'],
    };
  }

  deleteExpense(expense) {
    const { expenses, remove, globalTotal, newTotal } = this.props;
    const newExpenses = expenses.filter((currExpense) => currExpense.id !== expense.id);
    const currName = expense.currency;
    const transf = expense.exchangeRates[currName].ask;
    const sub = Number(expense.value * transf).toFixed(2);
    newTotal(Number(globalTotal - sub).toFixed(2));
    remove(newExpenses);
  }

  render() {
    const { tableHeading } = this.state;
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {tableHeading.map((headingText, key) => <th key={ key }>{headingText}</th>)}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, key) => {
            const currName = expense.currency;
            return (
              <tr key={ key }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.exchangeRates[currName].name.split('/')[0]}</td>
                <td>{parseFloat(expense.exchangeRates[currName].ask).toFixed(2)}</td>
                <td>
                  {parseFloat(expense.value
                    * expense.exchangeRates[currName].ask).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.deleteExpense(expense) }
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  globalTotal: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (expenses) => dispatch(removeExpense(expenses)),
  newTotal: (total) => dispatch(calculateTotal(total)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
