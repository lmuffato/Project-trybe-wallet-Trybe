import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  tableHeader() {
    return (
      <tr className="table-header">
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
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tbody>
          {this.tableHeader()}
          {expenses.map((expense) => {
            const currency = expense.exchangeRates[expense.currency].ask;
            const newCurrency = parseFloat(currency).toFixed(2);
            const convertedValue = (parseFloat(expense.value) * parseFloat(currency));
            const newConvertedValue = convertedValue.toFixed(2);
            function name() {
              const currencyName = expense.exchangeRates[expense.currency].name;
              const number = -16;
              if ((currencyName).includes('Dólar Americano')) {
                return 'Dólar Comercial';
              } if ((currencyName).includes('/Real Brasileiro')) {
                return currencyName.slice(0, number);
              } return currencyName;
            }
            return (
              <tr key={ expense.id } className="table-row">
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{name()}</td>
                <td>{newCurrency}</td>
                <td>{newConvertedValue}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    className="delete-button"
                    data-testid="delete-btn"
                  >
                    Deletar
                  </button>
                </td>
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
