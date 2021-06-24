import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tr from './tr';

function Table({ expenses }) {
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
        {
          expenses.map((expense) => {
            const currency = expense.exchangeRates[expense.currency].name.split('/')[0];
            const exchange = Number(expense.exchangeRates[expense.currency].ask)
              .toFixed(2);
            const valueC = (expense.value * expense.exchangeRates[expense.currency].ask)
              .toFixed(2);
            return (
              <Tr
                key={ expense.id }
                expense={ expense }
                valueC={ valueC }
                currency={ currency }
                exchange={ exchange }
              />
            );
          })
        }
      </tbody>
    </table>
  );
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      description: PropTypes.string,
      currency: PropTypes.string,
      method: PropTypes.string,
      tag: PropTypes.string,
      exchangeRates: PropTypes.objectOf(PropTypes.object),
    }),
  ),
}.isRequired;

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps)(Table);
