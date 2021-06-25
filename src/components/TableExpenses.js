import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteWallet } from '../actions';

class TableExpenses extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { deleteExpense } = this.props;
    const excludeWallet = event.target;
    deleteExpense(excludeWallet.id);
  }

  render() {
    const { expenses } = this.props;
    const tableLine = expenses.map((expense) => {
      const { id, description, tag, method, value, currency, exchangeRates } = expense;
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
          <td>
            <button
              id={ id }
              type="button"
              data-testid="delete-btn"
              onClick={ this.handleClick }
            >
              Deletar
            </button>
          </td>
        </tr>
      );
    });
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
const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (state) => dispatch(deleteWallet(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
