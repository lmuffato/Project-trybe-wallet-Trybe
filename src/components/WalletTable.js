import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, startEditingExpense } from '../actions';

class WalletTable extends Component {
  constructor() {
    super();
    this.renderExpenseRow = this.renderExpenseRow.bind(this);
    this.renderBtns = this.renderBtns.bind(this);
    this.renderEditBtn = this.renderEditBtn.bind(this);
  }

  renderBtns(index) {
    const { deleteExpense } = this.props;

    return (
      <>
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => deleteExpense(index) }
        >
          Delete
        </button>
        { this.renderEditBtn(index) }
      </>
    );
  }

  renderEditBtn(index) {
    const { startEditing } = this.props;

    return (
      <button
        type="button"
        data-testid="edit-btn"
        onClick={ () => startEditing(index) }
      >
        Edit
      </button>
    );
  }

  renderExpenseRow() {
    const { allExpenses } = this.props;

    return allExpenses.map((expense, index) => {
      const currentCurrency = expense.exchangeRates[expense.currency];
      const currentAsk = currentCurrency.ask;
      const currentName = currentCurrency.name;
      const convertedValue = Number(expense.value) * Number(currentAsk);
      return (
        <tr key={ index }>
          <td>{ expense.description }</td>
          <td>{ expense.tag }</td>
          <td>{ expense.method }</td>
          <td>{ expense.value }</td>
          <td>{ currentName.split('/')[0] }</td>
          <td>{ Number(currentAsk).toFixed(2) }</td>
          <td>{ Number(convertedValue).toFixed(2) }</td>
          <td>Real</td>
          <td>{ this.renderBtns(index) }</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { this.renderExpenseRow() }
        </tbody>
      </table>
    );
  }
}

WalletTable.propTypes = {
  allExpenses: PropTypes.arrayOf(Object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (index) => dispatch(removeExpense(index)),
  startEditing: (index) => dispatch(startEditingExpense(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
