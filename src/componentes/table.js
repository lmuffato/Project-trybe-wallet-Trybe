import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>Descrição</th>
            <tr><td>{}</td></tr>
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
      </table>
    );
  }
}
export default Table;
