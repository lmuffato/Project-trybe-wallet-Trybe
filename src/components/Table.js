import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { ThunkAPI } from '../actions/wallet';

class Table extends React.Component {
  render() {
    // const { expenses } = this.props;
    return (
      <section>
        <table border="1">
          <tr>
            <td>Descrição</td>
            <td>Tag</td>
            <td>Metodo de Pagamento</td>
            <td>Valor</td>
            <td>Moeda</td>
            <td>Cambio utilizado</td>
            <td>Valor convertido</td>
            <td>Moeda de conversão</td>
            <td>Editar/Excluir</td>
          </tr>
          <tr>
            <td>a</td>
            <td>a</td>
            <td>a</td>
            <td>a</td>
            <td>a</td>
            <td>a</td>
            <td>a</td>
            <td>a</td>
            <td>a</td>
          </tr>
        </table>
      </section>
    );
  }
}

// estou pegando os valores do estado global redux
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
