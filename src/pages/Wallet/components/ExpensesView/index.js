import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Expense from './components/Expense';

const tableHeads = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

function ExpensesView({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          { tableHeads.map((head) => (<th key={ head }>{head}</th>)) }
        </tr>
      </thead>
      <tbody>
        { expenses.map((expense) => (
          <Expense key={ expense.id } data={ expense } />
        ))}
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
