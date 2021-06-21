import React from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import getCoins from '../services/api';
import { listCoins } from '../actions/index';

class Form extends React.Component {
  constructor() {
    super();

    this.fetchApi = this.fetchApi.bind(this);
    this.renderCoins = this.renderCoins.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { createListCoins } = this.props;
    const data = await getCoins();
    const coins = await Object.keys(data);
    createListCoins(coins);
  }

  renderCoins() {
    const { currencies } = this.props;
    return currencies.filter((currencie) => (currencie !== 'USDT'))
      .map((currencie) => (
        <option key={ currencie } value={ currencie }>{ currencie }</option>
      ));
  }

  render() {
    return (
      <form>
        <label htmlFor="value-expense">
          Valor
          <input type="number" id="value-expense" />
        </label>
        <label htmlFor="describe-expense">
          Descrição
          <input type="text" id="describe-expense" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            // value={ a }
            // onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            {this.renderCoins()}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select
            id="payment"
            // value={ a }
            // onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            // value={ a }
            // onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: array,
  createListCoins: func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  createListCoins: (coin) => dispatch(listCoins(coin)) });

export default connect(mapStateToProps, mapDispatchToProps)(Form);
