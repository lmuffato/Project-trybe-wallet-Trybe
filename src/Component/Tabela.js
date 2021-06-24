import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Tabela extends React.Component {
  mostrarGastos() {
    const { expenses } = this.props;
    return (
      <>
        { expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{expense.exchangeRates[expense.currency].name.split('/', 1)}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {(Number(expense.exchangeRates[expense.currency].ask)
                 * Number(expense.value)).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button type="button" data-testid="delete-btn">Deletar</button>
            </td>
          </tr>
        )) }
      </>
    );
  }

  render() {
    return (
      <div>
        <table className="table-th">
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
          <tbody className="table-td">{ this.mostrarGastos() }</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Tabela.propTypes = { wallet: PropTypes.func }.isRequired;

export default connect(mapStateToProps, null)(Tabela);
