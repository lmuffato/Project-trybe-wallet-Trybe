import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { handleConversionCurrencyName, handleCurrencyType,
  handleConversion, handleRemove, handleEdit } from '../../utils/walletContext';
import { removeExpenseFromGlobalState } from '../../actions';

function TableWallet({ expenses, removeDespesa }) {
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
        { expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{ handleConversionCurrencyName(expense) }</td>
            <td>{ handleConversion(expense) }</td>
            <td>{ handleCurrencyType(expense) }</td>
            <td>Real</td>
            <td>
              <button
                type="submit"
                onClick={ (e) => handleRemove(e, expense, removeDespesa, expenses) }
              >
                <RiCloseCircleLine data-testid="delete-btn" />
              </button>
              <button type="submit" onClick={ (e) => handleEdit(e, expense) }>
                <TiEdit data-testid="edit-btn" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeDespesa: (despesas) => dispatch(removeExpenseFromGlobalState(despesas)),
});

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  removeDespesa: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(TableWallet);

// Referência para sintaxe correta de tabelas:
// https://www.w3schools.com/html/html_tables.asp
