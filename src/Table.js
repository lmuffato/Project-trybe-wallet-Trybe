import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deletButton } from './actions';

class Table extends Component {
  deletExpenses(expId) {
    const { deletItem, expenses } = this.props;
    const expenseList = expenses.filter((expense) => expense.id !== expId);
    deletItem(expenseList);
  }

  renderTable() {
    const { expenses } = this.props;

    return expenses.map((expense) => {
      const { id, description, tag,
        method, value, currency, exchangeRates } = expense;
      return (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{exchangeRates[currency].name.split('/')[0]}</td>
          <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
          <td>
            {Number(value * exchangeRates[currency].ask)
              .toFixed(2)}
          </td>
          <td>Real</td>
          <td>
            <button
              type="button"
              data-testid="edit-btn"
            >
              Edit
            </button>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => this.deletExpenses(id) }
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table border="1" rules="ROWS">
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
          { this.renderTable() }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  deletItem: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet: { expenses } }) => ({ expenses });

const mapDispatchToProps = (dispatch) => ({
  deletItem: (expense) => dispatch(deletButton(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
