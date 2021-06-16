import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletTable extends Component {
  constructor() {
    super();
    this.renderExpenseRow = this.renderExpenseRow.bind(this);
  }

  renderExpenseRow() {
    const { allExpenses } = this.props;

    return allExpenses.map((expense, index) => {
      const currentCurrency = expense.exchangeRates[expense.currency];
      const currentAsk = currentCurrency.ask;
      const currentName = currentCurrency.name;
      const convertedValue = Number(expense.value) * Number(currentAsk);
      return (
        <tr key={ index }>
          <td>{ expense.description }</td>
          <td>{ expense.tag }</td>
          <td>{ expense.method }</td>
          <td>{ expense.value }</td>
          <td>{ currentName.split('/')[0] }</td>
          <td>{ Number(currentAsk).toFixed(2) }</td>
          <td>{ Number(convertedValue).toFixed(2) }</td>
          <td>Real</td>
          <td>Editar/Excluir</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { this.renderExpenseRow() }
        </tbody>
      </table>
    );
  }
}

WalletTable.propTypes = {
  allExpenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  allExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(WalletTable);
