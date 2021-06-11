import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletTable extends Component {
  constructor() {
    super();
    this.valueConverted = this.valueConverted.bind(this);
    this.value = this.value.bind(this);
  }

  value(expense) {
    // Fonte de pesquisa: https://eslint.org/docs/rules/radix
    const value = parseInt(expense.value, 10);
    const updatedValue = value.toFixed(2);
    return parseFloat(updatedValue);
  }

  valueConverted(expense) {
    const value = expense.value * expense.exchangeRates[expense.currency].ask;
    const updatedValue = value.toFixed(2);
    return parseFloat(updatedValue);
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
            <tr key={ `${expense.id}table` }>
              <td key={ `${expense.id}description` }>{expense.description}</td>
              <td key={ `${expense.id}tag` }>{ expense.tag }</td>
              <td key={ `${expense.id}method` }>{ expense.method }</td>
              <td key={ `${expense.id}value` }>{ `R$ ${this.value(expense)}` }</td>
              <td key={ `${expense.id}currency` }>
                {
                  expense.exchangeRates[expense.currency].name
                }
              </td>
              <td key={ `${expense.id}exchange` }>
                { expense.exchangeRates[expense.currency].code }
              </td>
              <td key={ `${expense.id}updatedValue` }>
                {
                  `R$ ${this.valueConverted(expense)}`
                }
              </td>
              <td key={ `${expense.id}conversion` }>Real</td>
              <td key={ `${expense.id}button` }>
                <button type="button">Editar/Excluir</button>
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

WalletTable.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(WalletTable);
