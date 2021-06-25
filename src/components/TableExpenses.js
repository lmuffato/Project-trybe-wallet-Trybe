import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableExpenses extends React.Component {
  render() {
    const { expenses } = this.props;
    const tableLine = expenses.map((expense) => {
      const { id, description, tag, method, value, currency, exchangeRates } = expense;
      const userValue = exchangeRates[currency].ask;
      return (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{exchangeRates[currency].name}</td>
          <td>{userValue}</td>
          <td>{value * userValue }</td>
          <td>Real</td>
          <td><button type="button" data-testid="delete-btn">Deletar</button></td>
        </tr>
      );
    });
    console.log(expenses);
    return (
      <table>
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
        {tableLine}
      </table>

    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps, null)(TableExpenses);
