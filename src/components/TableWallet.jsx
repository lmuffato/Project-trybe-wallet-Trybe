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

    const expenseCurrency = actualExpenses[id].currency;
    const exchangeRates = actualExpenses[id].exchangeRates[expenseCurrency].ask;
    const espenseExchangeValue = ((actualExpenses[id].value * 1) * (exchangeRates * 1));

    const newActualTotalExpenses = (
      actualTotalExpenses * 1 - espenseExchangeValue * 1);

    console.log(actualTotalExpenses); // ok - Valor Atual;
    console.log(espenseExchangeValue); // ok - Valor a ser removido;
    console.log(newActualTotalExpenses);

    funcForSumExpenses(newActualTotalExpenses);
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
  funcForSumExpenses: PropTypes.string.isRequired,
  actualTotalExpenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableWallet);
