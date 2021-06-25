import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delExpenses as delItem } from '../actions';

class Table extends React.Component {
  render() {
    const { expenses, delExpenses } = this.props;
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
          {expenses.map((item) => {
            const cambio = item.exchangeRates[item.currency].ask;
            const currency = item.exchangeRates[item.currency].name;
            return (
              <tr key={ item.id }>
                <td>{item.description}</td>
                <td>{item.tag}</td>
                <td>{item.method}</td>
                <td>{item.value}</td>
                <td>{currency}</td>
                <td>{Number(cambio).toFixed(2)}</td>
                <td>{(cambio * item.value).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => { delExpenses(item.id); } }
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpenses: (id) => dispatch(delItem(id)),
});

Table.propTypes = {
  expenses: PropTypes.array,
  delExpenses: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
