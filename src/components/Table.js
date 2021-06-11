import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

const convertCurrency = (expense) => (
  parseFloat(expense.exchangeRates[expense.currency].ask)
  * parseFloat(expense.value)).toFixed(2);

const Table = (props) => {
  const { expenses, deleteRow } = props;
  console.log('eita', expenses);
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
            console.log('map', expense);
            return (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
                <td>
                  {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
                </td>
                <td>{convertCurrency(expense)}</td>
                <td>Real</td>
                <td id={ expense.id }>
                  <button type="button">Editar</button>
                  <button type="button" data-testid="delete-btn" onClick={ deleteRow }>
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteRow: (ev) => dispatch(deleteExpense(ev.target.parentNode.id)),
});
// export default Table;
// SE EU DESCOMENTO OS MAPS E CONNECT E COMENTO A LINHA ACIMA, PARA DE FUNCIONAR
export default connect(mapStateToProps, mapDispatchToProps)(Table);
