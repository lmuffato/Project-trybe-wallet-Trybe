import React from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Método de pagamento</th>
            <th>Tag</th>
            <th>Descrição</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Valor" />
            <td data-label="Moeda" />
            <td data-label="Método de pagamento" />
            <td data-label="Tag" />
            <td data-label="Descrição" />
            <td data-label="Editar/Excluir">
              <button type="button" data-testid="delete-btn">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default connect(mapStateToProps, null)(Table);
