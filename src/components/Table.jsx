import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        {expenses.length ? (
          <table>
            <thead>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </thead>
            <tbody>
              {expenses.map((expense, index) => {
                const { currency,
                  exchangeRates, description, tag, method, value } = expense;
                const valueCambi = Number(exchangeRates[currency].ask);
                const valueConvert = expense.value * exchangeRates[currency].ask;
                const curr = expense.exchangeRates[currency]
                  .name.replace('/Real Brasileiro', '');
                return (
                  <tr key={ index }>
                    <td>{description}</td>
                    <td>{tag}</td>
                    <td>{method}</td>
                    <td>{value}</td>
                    <td>{curr}</td>
                    <td>{valueCambi.toFixed(2)}</td>
                    <td>{valueConvert.toFixed(2)}</td>
                    <td>Real</td>
                    <td>Editar/Exluir</td>
                  </tr>);
              })}
            </tbody>
          </table>) : 'sem despesas'}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps, null)(Table);
