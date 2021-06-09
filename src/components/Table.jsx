import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions/index';

class Table extends React.Component {
  render() {
    const { expenses, removeDispatch } = this.props;
    return (
      <table>
        <tbody>
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
          {expenses.map((expense, index) => {
            const { currency } = expense;
            const cur = expense.exchangeRates[currency].name;
            const rate = expense.exchangeRates[currency].ask;
            return (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ expense.value }</td>
                <td>{ cur }</td>
                <td>{ parseFloat(rate).toFixed(2) }</td>
                <td>{ (expense.value * rate).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button
                    onClick={ () => removeDispatch(index) }
                    data-testid="delete-btn"
                    type="button"
                  >
                    Excluir
                  </button>
                </td>
              </tr>);
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeDispatch: (index) => dispatch(removeExpense(index)) });

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
