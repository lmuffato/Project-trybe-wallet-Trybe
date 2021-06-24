import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const tHeads = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              { tHeads.map((thead, index) => <th key={ index }>{ thead }</th>) }
            </tr>
          </thead>
          <tbody>
            { expenses.map((expense, index) => (
              <tr key={ index }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ expense.value }</td>
                <td>
                  { expense.exchangeRates[
                    Object.keys(expense.exchangeRates)
                      .filter((key) => key === expense.currency)
                  ].name.split('/')[0] }
                </td>
                <td>
                  { parseFloat(expense.exchangeRates[
                    Object.keys(expense.exchangeRates)
                      .find((key) => key === expense.currency)
                  ].ask).toFixed(2) }
                </td>
                <td>
                  { (expense.value * expense.exchangeRates[
                    Object.keys(expense.exchangeRates)
                      .filter((key) => key === expense.currency)
                  ].ask).toFixed(2) }
                </td>
                <td>Real</td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
