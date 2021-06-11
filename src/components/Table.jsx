import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  convertedValue() {
    const { expenses } = this.props;
    const expVal = expenses.map((expense) => {
      const spendCurrency = expense.currency;
      const currencyRate = expense.exchangeRates[spendCurrency].ask;
      const convertedValue = (parseFloat(expense.value) * parseFloat(currencyRate));
      return (convertedValue).toFixed(2);
    });
    return expVal;
  }

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
            const spendCurrency = expense.currency;
            const currencyName = expense.exchangeRates[spendCurrency].name;
            const strNumber = -16;
            const newCurName = currencyName.slice(0, strNumber);
            const newValue = parseFloat(expense.value).toFixed(2);
            const currency = expense.exchangeRates[spendCurrency].ask;
            const newCurrency = parseFloat(currency).toFixed(2);
            const convertedValue = (parseFloat(expense.value) * parseFloat(currency));
            const newConvertedValue = convertedValue.toFixed(2);
            return (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{newValue}</td>
                <td>{newCurName}</td>
                <td>{newCurrency}</td>
                <td>{newConvertedValue}</td>
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

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(Table);
