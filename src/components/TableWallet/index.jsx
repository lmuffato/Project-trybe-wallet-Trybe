import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { handleConversionCurrencyName, handleCurrencyType,
  handleConversion, handleRemoveExpense } from '../../utils/filterCurrencies';
import { removeExpenseFromGlobalState } from '../../actions';

function TableWallet({ expenses, removendoDespesa }) {
  const handleOnClick = (e, expense) => {
    e.preventDefault();
    // console.log('hi', expense.id);
    handleRemoveExpense(expenses, expense, removendoDespesa);
  };

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
            <td>{ handleCurrencyType(expense) }</td>
            <td>{ handleConversion(expense) }</td>
            <td>Real</td>
            <td>
              <button type="submit" onClick={ (e) => handleOnClick(e, expense) }>
                <RiCloseCircleLine
                  data-testid="delete-btn"
                />
              </button>
              <button type="submit">
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
  removendoDespesa: (despesas) => dispatch(removeExpenseFromGlobalState(despesas)),
});

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removendoDespesa: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableWallet);

// Referência para sintaxe correta de tabelas:
// https://www.w3schools.com/html/html_tables.asp
