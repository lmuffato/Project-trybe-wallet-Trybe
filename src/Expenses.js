import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAPI from './services/fetchAPI';
import { addExpense, requestApi } from './actions';

class Expenses extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.HandleClick = this.HandleClick.bind(this);
  }

  async componentDidMount() {
    await this.fetchAllCoins();
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  HandleClick() {
    const { expense } = this.props;
    this.fetchAllCoins();
    expense({ ...this.state });
    this.setState((state) => ({
      id: state.id + 1,
    }));
  }

  async fetchAllCoins() {
    const { currency } = this.props;
    const fetched = await fetchAPI();
    delete fetched.USDT;
    currency(Object.values(fetched));
    this.setState({ exchangeRates: fetched });
  }

  renderCoin() {
    const { currencies } = this.props;
    if (currencies === '') {
      return <option value="BRL"> BRL </option>;
    }

    return currencies.map((coin) => (
      <option key={ coin.code } value={ coin.code }>
        {coin.code}
      </option>));
  }

  renderButton() {
    return (<input
      type="button"
      value="Adicionar despesa"
      onClick={ this.HandleClick }
    />);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" id="value" onChange={ this.handleChange } />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select name="moeda" id="currency" onChange={ this.handleChange }>
              {this.renderCoin()}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select name="método de pagamento" id="method" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tag" id="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saude">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" onChange={ this.handleChange } />
          </label>
          {this.renderButton()}
        </form>
      </div>
    );
  }
}

Expenses.propTypes = {
  expense: PropTypes.func.isRequired,
  currency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(Object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  expense: (expenses) => dispatch(addExpense(expenses)),
  currency: (currencies) => dispatch(requestApi(currencies)),
});

const mapStateToProps = ({ wallet: { currencies } }) => ({ currencies });

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
