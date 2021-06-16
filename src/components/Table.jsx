import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
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
          {expenses.map((expense) => {
            const { currency } = expense;
            return (
              <tr key={ expense.index }>
                <td>{ expense.description}</td>
                <td>{ expense.tag }</td>
                <td>{ expense.value }</td>
                <td>{ expense.method }</td>
                <td>{ expense.exchangeRates[currency].name }</td>
                <td>{ parseFloat(expense.exchangeRates[currency].ask).toFixed(2)}</td>
                <td>
                  { (expense.value * (expense.exchangeRates[currency].ask)).toFixed(2) }
                </td>
                <td>Real</td>
                <td><button type="button">Excluir</button></td>
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

Table.propTypes = {
  expenses: PropTypes.objectOf.isRequired,
  map: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Table);
