import React from 'react';
import { connect } from 'react-redux';
import Header from '../component/Header';

class Wallet extends React.Component {
  // componentDidMount() {
  //   const { dispatch, fetchCurrencies } = this.props;
  //   dispatch(fetchCurrencies());
  //   console.log(fetchCurrencies);
  // }

  render() {
    // const { fetchCurrencies } = this.props;

    return (
      <div>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor:
            <input aria-label="valor" type="text" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input aria-label="descrição" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select aria-label="moeda">
              <option>Vazio</option>
            </select>
          </label>
          <label htmlFor="método de pagamento">
            Método de pagamento:
            <select aria-label="método de pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select aria-label="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   currenciesDispatch: () => dispatch(fetchCurrencies()),
// });

export default connect(null, null)(Wallet);
