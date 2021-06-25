import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';
import { removeExpenseAction } from '../../actions';

class Board extends Component {
  constructor() {
    super();
    this.handleDeletion = this.handleDeletion.bind(this);
  }

  handleDeletion({ target: { id } }) {
    const { removeExpense } = this.props;
    removeExpense(id);
  }

  parseMoney(number) {
    return Math.round(number * 100) / 100;
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
              <td>{this.parseMoney(expense.value)}</td>
              <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
              <td>{this.parseMoney(expense.exchangeRates[expense.currency].ask)}</td>
              <td>
                {this.parseMoney(
                  expense.value * expense.exchangeRates[expense.currency].ask,
                )}
              </td>
              <td>Real</td>
              <td>
                <button
                  onClick={ this.handleDeletion }
                  type="button"
                  data-testid="delete-btn"
                  id={ expense.id }
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    );
  }
}
const mapStateToProps = (
  { wallet: { expenses } },
) => (
  { expenses }
);
const mapDispatchToProps = (dispatch) => (
  { removeExpense: (id) => dispatch(removeExpenseAction(id)) }
);

Board.propTypes = {
  expenses: arrayOf(object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Board);
