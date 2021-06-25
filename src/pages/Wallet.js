// import React from 'react';
// import { connect } from 'react-redux';
// import Proptypes from 'prop-types';
// import requestApi from '../API';
// // import store from '../store';
// // import userEmail from '../actions';

// class Wallet extends React.Component {
//   constructor() {
//     super();
//     this.formCurrency = this.formCurrency.bind(this);
//     this.headerCurrency = this.headerCurrency.bind(this);
//     this.addExpense = this.addExpense.bind(this);
//   }

//   headerCurrency() {
//     const { myFirstState } = this.props;
//     return (
//       <header>
//         <aside>
//           <p>
//             Email:&nbsp;
//             <strong
//               data-testid="email-field"
//             >
//               { myFirstState }
//             </strong>
//           </p>
//           <p>
//             Despesa Total:&nbsp;
//             <strong
//               data-testid="total-field"
//             >
//               0
//               {/* despesa total aqui via estado global */}
//             </strong>
//             <strong
//               data-testid="header-currency-field"
//             >
//               &nbsp;BRL
//             </strong>
//           </p>
//         </aside>
//       </header>
//     );
//   }

//   listCoins() {
//     requestApi().then((data) => {
//       Object.keys(data)
//         .filter((ele) => (ele !== 'USDT' && ele !== 'DOGE'))
//         .map((unit) => {
//           const node = document.createElement('option');
//           const textnode = document.createTextNode(`${unit}`);
//           node.appendChild(textnode);
//           return document.getElementById('moeda').appendChild(node);
//         });
//     });
//   }

//   addExpense() {
//     const desc = document.querySelector('#descricao').value;
//     const tag = document.querySelector('#tag').selectedOptions[0].innerText;
//     const pagto = document.querySelector('#metodoPagamento').selectedOptions[0].innerText;
//     const valor = document.querySelector('#valor').value;
//     const moeda = document.querySelector('#moeda').selectedOptions[0].innerText;

//     console.log(desc, tag, pagto, valor, moeda);
//   }

//   formCurrency() {
//     return (
//       <form>
//         <label htmlFor="descricao">
//           Descrição:&nbsp;
//           <input tiype="text" id="descricao" name="descricao" />
//         </label>
//         <label htmlFor="tag">
//           Tag:
//           <select id="tag" name="tag">
//             <option value="alimentacao">Alimentação</option>
//             <option value="lazer">Lazer</option>
//             <option value="trabalho">Trabalho</option>
//             <option value="transporte" selected>Transporte</option>
//             <option value="saude">Saúde</option>
//           </select>
//         </label>
//         <label htmlFor="metodoPagamento">
//           Método de Pagamento:&nbsp;
//           <select id="metodoPagamento">
//             <option>Dinheiro</option>
//             <option>Cartão de crédito</option>
//             <option>Cartão de débito</option>
//           </select>
//         </label>
//         <label htmlFor="valor">
//           Valor:&nbsp;
//           <input type="number" id="valor" name="valor" />
//         </label>
//         <label htmlFor="moeda">
//           Moeda:&nbsp;
//           <select id="moeda">
//             { this.listCoins() }
//           </select>
//         </label>
//         <input
//           type="button"
//           value="Adicionar despesa"
//           onClick={ () => this.addExpense() }
//         />
//       </form>
//     );
//   }

//   render() {
//     return (
//       <>
//         { this.headerCurrency() }
//         { this.formCurrency() }
//         <table>
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
//             <td>test</td>
//             <td>Tag</td>
//             <td>test</td>
//             <td>Tag</td>
//             <td>test</td>
//             <td>Tag</td>
//             <td>test</td>
//             <td>Tag</td>
//             <button
//               type="button"
//               data-testid="edit-btn"
//             >
//               Editar
//             </button>
//             <button
//               type="button"
//               data-testid="delete-btn"
//             >
//               Excluir
//             </button>
//           </tr>
//         </table>
//       </>
//     );
//   }
// }

// Wallet.propTypes = {
//   fazerLogin: Proptypes.objectOf(),
// }.isRequired;

// // const mapDispatchToProps = (dispatch) => ({
// //   userEmailField: (state) => dispatch(userEmail(state)),
// // });

// const mapStateToProps = (state) => (
//   {
//     myFirstState: state.user.email,
//   }
// );

// export default connect(mapStateToProps, null)(Wallet);
import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

export default class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}
