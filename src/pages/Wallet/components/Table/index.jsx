import React from 'react';
import { arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';

import styles from './table.module.css';

// Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado,
//  Valor convertido, Moeda de conversão e Editar/Excluir
class Table extends React.Component {
  render() {
    const { expenses } = this.props;

    return (
      <table className={ styles.table }>
        <tr>
          <th>Valor</th>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>

        {
          expenses.map((expense, index) => {
            const {
              value,
              description,
              currency,
              tag,
              method,
              exchangeRates,
            } = expense;
            const exchangeRate = exchangeRates[currency];
            const currencyName = exchangeRate.name.split('/')[0];
            const cambio = parseFloat(exchangeRate.ask);
            const convertedValue = value * cambio;

            return (
              <tr key={ index }>
                <td>{value}</td>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{currencyName}</td>
                <td>{cambio.toFixed(2)}</td>
                <td>{convertedValue.toFixed(2)}</td>
                <td>Real</td>
              </tr>
            );
          })
        }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: arrayOf(object.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
