import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions';

class TableExpenses extends Component {
  constructor() {
    super();
    this.resultTable = this.resultTable.bind(this);
  }

  resultTable(expense) {
    const { currency, description, method, tag, value, exchangeRates, id } = expense;
    const actualValue = exchangeRates[currency];
    const coinName = Number(value) * Number(actualValue.ask);
    const { removeExpenseItem } = this.props;
    return (
      <tr key={ id }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ actualValue.name }</td>
        <td>{ (Math.round(actualValue.ask * 100) / 100).toFixed(2) }</td>
        <td>{ (Math.round(coinName * 100) / 100).toFixed(2) }</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            onClick={ () => removeExpenseItem(id) }
            data-testid="delete-btn"
            className="btn btn-light btn-sm"
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <section className="table-container px3">
        <table className="table table-success table-striped">
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
            { expenses.map((expense) => this.resultTable(expense)) }
          </tbody>
        </table>
      </section>
    );
  }
}

// Referência tabelas: https://stackoverflow.com/questions/43958700/react-error-th-cannot-appear-as-a-child-of-thead-see-unknown-thead-th/43958748

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseItem: (id) => dispatch(removeExpense(id)),
});

TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
