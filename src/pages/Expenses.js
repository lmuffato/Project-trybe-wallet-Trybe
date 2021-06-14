import React, { Component } from 'react';

export default class Expenses extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Descrição</td>
            <td>Tag</td>
            <td>Método de Pagamento</td>
            <td>Valor</td>
            <td>Moeda</td>
            <td>Câmbio Utilizado</td>
            <td>Valor Convertido</td>
            <td>Moeda de Conversão</td>
            <td>Editar/Excluir</td>
          </tr>
        </thead>
      </table>
    );
  }
}
