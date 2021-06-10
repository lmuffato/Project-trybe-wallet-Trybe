import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import './Wallet.css';
import Header from './Header';

class Wallet extends React.Component {
  tableHead() {
    return (
      <tr className="legend">
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
    );
  }

  // função para renderizar os expenses baseada no pR do Adelino Junior. Fiz algumas alterações para se adequar ao meu código
  renderTableExpenses() {
    const { expenses } = this.props;
    if (expenses.length) {
      const element = expenses.map((despesa) => {
        const { description, currency, method, tag, value, exchangeRates, id } = despesa;
        const convertedValue = exchangeRates[currency].ask * Number(value);
        // const convertedValueBRL = Intl.NumberFormat('pt-br',
        //   { style: 'currency', currency: 'BRL' }).format(convertedValue);
        const priceAtual = Number(exchangeRates[currency].ask);
        // const priceBRL = Intl.NumberFormat('pt-br',
        //   { style: 'currency', currency: 'BRL' }).format(priceAtual);
        return (
          <tr key={ id } className="expenses">
            <td>{description}</td>
            <td className="currency">{currency}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{value}</td>
            <td>{exchangeRates[currency].name.split('/')[0]}</td>
            <td>{priceAtual.toFixed(2)}</td>
            <td>{convertedValue.toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button
                onClick={ () => this.handleClickDelete(id) }
                data-testid="delete-btn"
                type="button"
              >
                Deletar
              </button>
            </td>
          </tr>
        );
      });
      return element;
    }
  }

  render() {
    const { expenses } = this.props;
    if (expenses.length === 0) {
      return (
        <div>
          <Header />
          <div className="container-wallet">
            <img className="img-wallet" src="https://3.bp.blogspot.com/-1bFMeU55Gj8/Ws-PZazG0mI/AAAAAAAARNo/vVUpBSap_PApo3meVsLf3mOx7Lk3u0SGgCEwYBhgL/s1600/005.gif" alt="wallet-meme" />
            <table className="legend-container">
              {this.tableHead()}
              {this.renderTableExpenses()}
            </table>
          </div>
        </div>

      );
    }
    return (
      <div>
        <Header />
        <div className="container-wallet">
          <table className="legend-container">
            {this.tableHead()}
            {this.renderTableExpenses()}
          </table>
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  expenses: func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
