// import React from 'react';
// import { connect } from 'react-redux';

// class Table extends React.Component {
//   render() {
//     const { expenses } = this.props;

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Descrição</th>
//             <th>Tag</th>
//             <th>Método de pagamento</th>
//             <th>Valor</th>
//             <th>Moeda</th>
//             <th>Câmbio utilizado</th>
//             <th>Valor convertido</th>
//             <th>Moeda de conversão</th>
//             <th>Editar/Excluir</th>
//           </tr>
//           <tr>
//             <td>{expenses.map((expense) => expense.description)}</td>
//             <td>{expenses.map((expense) => expense.tag)}</td>
//             <td>{expenses.map((expense) => expense.method)}</td>
//             <td>{expenses.map((expense) => expense.value)}</td>
//             <td>{expenses.map((expense) => expense.currency)}</td>
//             <td>/</td>
//             <td>/</td>
//             <td>/</td>
//             <td>/</td>
//           </tr>
//         </thead>
//       </table>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   expenses: state.wallet.expenses,
// });

// export default connect(mapStateToProps)(Table);
