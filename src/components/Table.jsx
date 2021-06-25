import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteAction } from '../actions';

class Table extends React.Component {
  clickDeleter(id) {
    const { buttonDelete, expenses } = this.props;
    const filteredExpenses = expenses.filter((expense) => expense.id !== id);
    const payloader = filteredExpenses || [];
    buttonDelete(payloader);
  }

  render() {
    const { expenses } = this.props;

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
                  data-testid="delete-btn"
                  onClick={ () => this.clickDeleter(expense.id) }
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

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispachToProps = (dispatch) => ({
  buttonDelete: (payload) => dispatch(deleteAction(payload)),
});

Table.propTypes = {
  expenses: PropTypes.shape().isRequired,
  buttonDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispachToProps)(Table);
