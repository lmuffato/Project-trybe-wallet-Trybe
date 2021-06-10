import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ExpensesView({ expenses }) {
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
        { expenses.map((expense) => {
          const {
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates,
          } = expense;

          const currencyName = exchangeRates[currency].name.split('/')[0];
          const exchange = Number(exchangeRates[currency].ask).toFixed(2);
          const convertedValue = (value * exchangeRates[currency].ask).toFixed(2);

          return (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{currencyName}</td>
              <td>{exchange}</td>
              <td>{convertedValue}</td>
              <td>Real</td>
              <td>[Editar][Excluir]</td>
            </tr>
          );
        }) }
      </tbody>
    </table>
  );
}

ExpensesView.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  })),
}.isRequired;

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps)(ExpensesView);
