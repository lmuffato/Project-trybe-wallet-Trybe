import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpenses, updateSumAfterDelExp, sumExpenses } from '../actions/index';
import TableWalletHeader from './TableWalletHeader';

class TableWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.buttonDelete = this.buttonDelete.bind(this);
  }

  roundNumber(number, precision) {
    const baseDez = 10;
    const decimalDot = baseDez ** precision;
    return Math.round(number * decimalDot) / decimalDot;
  }

  exchangeConverterValue(exp) {
    return (parseFloat(exp.exchangeRates[exp.currency].ask)
    * parseFloat(exp.value)).toFixed(2);
  }

  buttonDelete(id) {
    const {
      actualExpenses,
      actualTotalExpenses,
      funcForDeleteExpenses,
      funcForSumExpenses,
    } = this.props;

    // Seleciona apenas a tarefa pelo numero de id, não pelo index
    const selectedExpense = actualExpenses.filter((exp) => exp.id === Number([id]))[0];

    // Desconstrõe o objeto, pegando o valor, a moeda utilizada a chave "exchangeRates";
    const { value, currency, exchangeRates } = selectedExpense;

    // Constate de arredondamento
    const decimimalRounds = 4;

    // Taxa de câmbio da moeda";
    const selectedExpenseEnxchangeRate = (
      this.roundNumber(exchangeRates[currency].ask, decimimalRounds)
    );

    // Multiplica o valor da compra pela taxa de cambio";
    const valueToSubtract = (
      this.roundNumber(value, decimimalRounds)
      * this.roundNumber(selectedExpenseEnxchangeRate, decimimalRounds)
    );

    // O novo valor atual é o valor antigo menos o valor da compra convertida no câmbio;
    const newActualTotalExpenses = (
      this.roundNumber(actualTotalExpenses, decimimalRounds)
      - this.roundNumber(valueToSubtract, decimimalRounds)
    );

    // Atualiza no estado global, o novo valor da taxa de câmbio
    funcForSumExpenses(this.roundNumber(newActualTotalExpenses, decimimalRounds));

    // Atualiza a lista de desespas (espenses) global, removendo o item que possui o id passado
    funcForDeleteExpenses(id);
  }

  render() {
    const { actualExpenses } = this.props;
    return (
      <div>
        <h1>Tabela</h1>
        <table>
          <TableWalletHeader />
          <tbody>
            {
              actualExpenses.map((exp) => (
                <tr key={ exp.id }>
                  <td>{exp.description}</td>
                  <td>{exp.tag}</td>
                  <td>{exp.method}</td>
                  <td>{exp.value}</td>
                  <td>{exp.exchangeRates[exp.currency].name.split('/')[0]}</td>
                  <td>
                    {parseFloat(exp.exchangeRates[exp.currency].ask).toFixed(2)}
                  </td>
                  <td>
                    {this.exchangeConverterValue(exp)}
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      className="delete-btn"
                      id={ exp.id }
                      onClick={ (event) => { this.buttonDelete(event.target.id); } }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  actualExpenses: state.wallet.expenses,
  actualTotalExpenses: state.wallet2.totalExpenses,
  updateSum: state.wallet2.updateSum,
});

const mapDispatchToProps = (dispatch) => ({
  funcForDeleteExpenses: (expenses) => dispatch(deleteExpenses(expenses)),
  funcForUpdateSumAfterDelExp: (expenses) => dispatch(updateSumAfterDelExp(expenses)),
  funcForSumExpenses: (expenses) => dispatch(sumExpenses(expenses)),
});

TableWallet.propTypes = {
  actualExpenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.shape({
      ask: PropTypes.string,
      bid: PropTypes.string,
      code: PropTypes.string,
      codein: PropTypes.string,
      create_date: PropTypes.string,
      high: PropTypes.string,
      low: PropTypes.string,
      name: PropTypes.string,
      pctChange: PropTypes.string,
      timestamp: PropTypes.string,
      varBid: PropTypes.string,
    })).isRequired,
  })).isRequired,
  funcForDeleteExpenses: PropTypes.func.isRequired,
  funcForSumExpenses: PropTypes.func.isRequired,
  actualTotalExpenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableWallet);
