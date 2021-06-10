import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Metodo de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio Utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de Conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {
          expenses.map((expense, index) => (
            <tr key={ index }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ parseFloat(expense.value).toFixed(2) }</td>
              <td>{ (expense.exchangeRates.currency.name).split('/')[0] }</td>
              <td>
                {
                  `R$ ${parseFloat(expense.exchangeRates.currency.ask).toFixed(2)}`
                }
              </td>
              <td>
                {
                  `R$ ${
                    parseFloat(expense.value * expense.exchangeRates.currency.ask)
                      .toFixed(2)
                  }`
                }
              </td>
              <td>{ (expense.exchangeRates.currency.name).split('/')[1] }</td>
              <td><button type="button">Apagar</button></td>
            </tr>
          ))
        }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequeired;

export default Table;
