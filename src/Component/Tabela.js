import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletarDespesa } from '../actions';

class Tabela extends React.Component {
  // Código feito baseado no codigo do colega Adelino Jr e adaptado ao meu
  excluirGastos(id) {
    const { excluirGastos, expenses } = this.props;
    const gasto = expenses.filter((expense) => expense.id !== id);
    const quandoExcluir = gasto || [];
    excluirGastos(quandoExcluir);
  }

  mostrarGastos() {
    const { expenses } = this.props;
    return (
      // Código feito baseado no codigo do colega Eduardo Costa e adaptado ao meu
      <>
        { expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{expense.exchangeRates[expense.currency].name.split('/', 1)}</td>
            {/* toFixed(2) para das linhas 19 e 22 para definir as casas decimais */}
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {(Number(expense.exchangeRates[expense.currency].ask)
                 * Number(expense.value)).toFixed(2)}
            </td>
            {/* No td abaixo o Real é um nome fixo */}
            <td>Real</td>
            <td>
              <button
                type="button"
                name="delete-btn"
                data-testid="delete-btn"
                onClick={ () => this.excluirGastos(expense.id) }
              >
                Deletar
              </button>
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

const mapDispatchToProps = (dispatch) => ({
  excluirGastos: (despesa) => dispatch(deletarDespesa(despesa)),
});

Tabela.propTypes = { wallet: PropTypes.func }.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
