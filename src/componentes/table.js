import React from 'react';
import { connect } from 'react-redux';
import { addGasto } from '../actions';
import getApi from '../getApi';

class Table extends React.Component {
  render() {
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
            <th>{}</th>
            <button
              type="submit"
              onClick={ getApi() }
            >
              Editar
            </button>
            <button type="submit">Excluir</button>
          </tr>
        </thead>
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  responseProp: (payload) => dispatch(addGasto(payload)),
});

export default connect(mapDispatchToProps)(Table);
