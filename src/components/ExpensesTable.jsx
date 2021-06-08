import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesTable extends React.Component {
  getCurrencyName(currency, currencies) {
    const currName = Object.values(currencies).filter((curr) => curr.code === currency);
    const name = currName[0].name.split('/');
    return name[0];
  }

  getExchangeRate(currency, currencies) {
    const value = Object.values(currencies).filter((curr) => curr.code === currency);
    return Number(value[0].ask).toFixed(2);
  }

  convertValues(value, currency, currencies) {
    const currInfo = Object.values(currencies).filter((curr) => curr.code === currency);
    return (currInfo[0].ask * value).toFixed(2);
  }

  generateTableRow() {
    const { expenses } = this.props;
    return (
      expenses.map((element) => (
        <tr key={ Math.random() + 1 }>
          <td>{element.description}</td>
          <td>{element.tag}</td>
          <td>{element.method}</td>
          <td>{element.value}</td>
          <td>{this.getCurrencyName(element.currency, element.exchangeRates)}</td>
          <td>{this.getExchangeRate(element.currency, element.exchangeRates)}</td>
          <td>
            {this.convertValues(element.value, element.currency, element.exchangeRates)}
          </td>
          <td>Real</td>
        </tr>
      ))
    );
  }

  renderTable() {
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
          {this.generateTableRow()}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        {this.renderTable()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps)(ExpensesTable);
