import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { apiCurrencyThunk } from '../actions/index';
// reference: https://pt-br.reactjs.org/docs/forms.html
// ideia das currencies tirada do projeto de Pollyana Oliveira 10a

class Inputs extends React.Component {
  // constructor() {
  //   super()
  // };
  componentDidMount() {
    const { apiCurrency } = this.props;
    apiCurrency();
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    const getCurrencies = Object.keys(currencies);
    const currenciesNames = getCurrencies.filter((coin) => coin !== 'USDT');
    return (
      <form>
        <label htmlFor="value">
          valor:
          <input type="text" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select type="text" id="currency" name="currency">
            {currenciesNames
              .map((currency, id) => (<option key={ id }>{currency}</option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select type="text" id="payment" name="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select type="text" id="tag" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Inputs.propTypes = {
  apiCurrency: func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  apiCurrency: (payload) => dispatch(apiCurrencyThunk(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
