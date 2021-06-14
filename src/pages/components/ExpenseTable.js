import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './expenseTable.css';

class ExpenseTable extends React.Component {
  render() {
    const { expenses } = this.props;
    // console.log(expenses);
    return (
      <table id="table">
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
          {expenses.map((expense) => {
            const convertValue = parseFloat(expense.exchangeRates[expense.currency].ask);
            const value = parseFloat(expense.value);
            return (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{ value }</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>
                  { convertValue.toFixed(2) }
                </td>
                <td>
                  { (value * convertValue).toFixed(2) }
                </td>
                <td>Real</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(ExpenseTable);
