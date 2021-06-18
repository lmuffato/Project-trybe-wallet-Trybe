import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { attExpense as attExpenseAction } from '../actions';

class TableWallet extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.returnButton = this.returnButton.bind(this);
  }

  handleClick(id) {
    // console.log(id);
    const { expenses } = this.props;
    const expensesFilter = expenses.filter((expense) => expense.id !== id);
    console.log(expensesFilter);
    const total = expensesFilter.reduce((acc, curr) => acc + Number(curr.value)
     * (curr.exchangeRates[curr.currency].ask), 0);
    // console.log(total);
    const payload = {
      id,
      newTotalAmount: total,
    };
    const { attExpense } = this.props;
    attExpense(payload);
    // a lógica acima vai percorrer o arr de obj, e só retornará objs cujo id for dif. do recebodido por argumento.
    // simplesmente substituo o expenses do estado global pelo expensesFilter;
  }

  returnButton(idm) {
    return (
      <button
        id={ idm }
        type="button"
        data-testid="delete-btn"
        onClick={ () => this.handleClick(idm) }
      >
        X
      </button>
    );
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
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>
                { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>
                {
                  (parseFloat(expense.value
                    * (expense.exchangeRates[expense.currency].ask)))
                    .toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                { this.returnButton(expense.id) }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  attExpense: (payload) => dispatch(attExpenseAction(payload)),
});

TableWallet.propTypes = {
  currencies: PropTypes.object,
}.isRequerid;

export default connect(mapStateToProps, mapDispatchToProps)(TableWallet);

// Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir
