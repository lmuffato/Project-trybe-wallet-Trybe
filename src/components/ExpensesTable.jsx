import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { totalValue } from '../actions';

class ExpensesTable extends React.Component {
  getCurrencyName(currency) {
    const { currencies } = this.props;
    const currName = Object.values(currencies).filter((curr) => curr.code === currency);
    const name = currName[0].name.split('/');
    return name[0];
  }

  getExchangeRate(currency) {
    const { currencies } = this.props;
    const value = Object.values(currencies).filter((curr) => curr.code === currency);
    return Number(value[0].ask).toFixed(2);
  }

  convertValues(value, currency) {
    const { currencies } = this.props;
    const currInfo = Object.values(currencies).filter((curr) => curr.code === currency);
    // sendvalue(currInfo[0].ask * value);
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
          <td>{Number(element.value).toFixed(2)}</td>
          <td>{this.getCurrencyName(element.currency)}</td>
          <td>{this.getExchangeRate(element.currency)}</td>
          <td>{this.convertValues(element.value, element.currency)}</td>
          <td>Real Brasileiro</td>
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

const mapDispatchToProps = (dispatch) => ({
  sendvalue: (value) => dispatch(totalValue(value)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
