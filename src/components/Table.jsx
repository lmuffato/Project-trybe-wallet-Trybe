import React from 'react';
import { connect } from 'react-redux';
import TBody from './TBody';

class Table extends React.Component {
  // constructor() {
  //   super();

  //   this.createTable = this.createTable.bind(this);
  // }

  // createTable() {
  //   const { expenses, itensPrices } = this.props;
  //   const TEN_MILISECONDS = 10;
  //   setTimeout(() => expenses.map(({
  //     currency, description, exchangesRates, id, method, tag, value
  //   }) => (
  //     <tr key={ id }>
  //       <td>{description}</td> {/* 1 */}
  //       <td>{tag}</td> {/* 2 */}
  //       <td>{method}</td> {/* 3 */}
  //       <td>{value}</td> {/* 4 */}
  //       <td>{exchangesRates[currency]}</td> {/* 5 */}
  //       <td>{exchangesRates[currency]}</td> {/* 6 */}
  //       <td>{itensPrices[id]}</td> {/* 7 */}
  //       <td>{exchangesRates[currency].name}</td> {/* 8 */}
  //       <td>Editar/Excluir</td> {/* 9 */}
  //     </tr>
  //   )), TEN_MILISECONDS);
  // }

  render() {
    // const TEN_MILISECONDS = 10;
    return (
      <table className="table-content">
        <thead className="table-heading">
          <tr>
            <td>Descrição</td>
            <td>Tag</td>
            <td>Método de pagamento</td>
            <td>Valor</td>
            <td>Moeda</td>
            <td>Câmbio utilizado</td>
            <td>Valor convertido</td>
            <td>Moeda de conversão</td>
            <td>Editar/Excluir</td>
          </tr>
        </thead>
        <tbody className="table-body">
          {/* <TBody /> */}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses, itensPrices } }) => ({
  expenses,
  itensPrices,
});

export default connect(mapStateToProps)(Table);
