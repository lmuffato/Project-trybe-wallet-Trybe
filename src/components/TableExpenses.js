import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableExpenses extends React.Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    const tableLine = expenses.map((expense) => {
      const { id, description, tag, method, value, currency, exchangeRates } = expense;
      // const userValue = exchangeRates[currency].ask;
      // const resultValue = value * userValue;
      return (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{exchangeRates[currency].name.split('/')[0]}</td>
          <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
          <td>{(exchangeRates[currency].ask * value).toFixed(2)}</td>
          <td>Real</td>
          <td><button type="button" data-testid="delete-btn">Deletar</button></td>
        </tr>
      );
    });
    console.log(expenses);
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
          {tableLine}
        </tbody>
      </table>

    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps, null)(TableExpenses);
