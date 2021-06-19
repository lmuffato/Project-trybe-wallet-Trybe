import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delExpense } from '../actions';

class Table extends Component {
  constructor() {
    super();
    this.deleteExpenseInRedux = this.deleteExpenseInRedux.bind(this);
  }

  async deleteExpenseInRedux({ target: { id: buttonID } }) {
    // console.log('buttonID:', buttonID);
    const { props: { expenses, deleteExpense } } = this;
    const newArrayOfExpenses = expenses
      .filter(({ id: expenseID }) => expenseID !== Number(buttonID));
    await deleteExpense(newArrayOfExpenses);
  }

  render() {
    // console.log(this.props.expenses);
    const arr1 = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda'];
    const arr2 = ['Câmbio utilizado', 'Valor convertido'];
    const tableHeader = [...arr1, ...arr2, 'Moeda de conversão', 'Editar/Excluir'];
    const { props: { expenses }, deleteExpenseInRedux } = this;
    return (
      <table>
        <tr>
          {tableHeader.map((head) => (
            <th key={ head }>
              {head}
            </th>))}
        </tr>
        { expenses.map((v, index) => (
          <tr key={ index * 100 }>
            <td key={ index }>{ v.description }</td>
            <td key={ index }>{ v.tag }</td>
            <td key={ index }>{ v.method }</td>
            <td key={ index }>{ v.value }</td>
            <td key={ index }>{ v.exchangeRates[v.currency].name.split('/')[0] }</td>
            <td key={ index }>
              { (Math
                .round(v.exchangeRates[v.currency].ask * 100) / 100) }
            </td>
            <td key={ index }>
              {(Math
                .round((Number(v.value) * v.exchangeRates[v.currency].ask) * 100) / 100) }
            </td>
            <td key={ index }>Real</td>
            <button
              id={ v.id }
              type="button"
              key={ index }
              data-testid="delete-btn"
              onClick={ deleteExpenseInRedux }
            >
              Deletar
            </button>
          </tr>
        )) }
      </table>
    );
  }
}

Table.propTypes = {
  exchangeRates: PropTypes.shape({}),
  expenses: PropTypes.arrayOf(PropTypes.shape({})),
  deleteExpense: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (newArrayOfExpenses) => dispatch(delExpense(newArrayOfExpenses)),
});

export default connect(null, mapDispatchToProps)(Table);
