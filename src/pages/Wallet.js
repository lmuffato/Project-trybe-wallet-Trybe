// código realizado com ajuda do Eduardo Costa
import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Header from '../components/Header';
import { addCurrencyApiThunk,
  addRecordWallet, delRecord } from '../actions/index';
import getCurrency from '../services/FetchApi';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    const { getCurrencys } = this.props;
    getCurrencys();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleValue() {
    return (
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          type="text"
          placeholder="valor"
          name="value"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  handleDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          type="text"
          placeholder="descrição"
          name="description"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  handleCurrency() {
    const { currencies } = this.props;
    // console.log(currencies);
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          onChange={ this.handleChange }
          name="currency"
        >
          {
            Object.keys(currencies).map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))
          }
        </select>
      </label>
    );
  }

  handlePayment() {
    const methodPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select
          id="payment"
          onChange={ this.handleChange }
          name="method"
        >
          {
            methodPayment.map((payment) => (
              <option key={ payment } value={ payment }>{payment}</option>
            ))
          }
        </select>
      </label>
    );
  }

  handleCategory() {
    return (
      <label htmlFor="category">
        Tag:
        <select
          id="category"
          onChange={ this.handleChange }
          name="tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  handleState() {
    const { id } = this.state;
    const { wallets } = this.props;
    getCurrency()
      .then((res) => {
        const { ...coin } = res;
        this.setState({ id: id + 1, exchangeRates: coin });
        wallets({ ...this.state, id });
      });
  }

  handleTableWallet() {
    const { expenses, delRecords } = this.props;
    // console.log(expenses);
    return (
      <table>
        <thead>
          <tr>
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
        </thead>
        <tbody>
          { expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ expense.exchangeRates[expense.currency].name.split('/', 1) }</td>
              <td>{ Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
              <td>
                {
                  (Number(expense.exchangeRates[expense.currency].ask)
               * Number(expense.value)).toFixed(2)
                }
              </td>
              <td>Real</td>
              <td><button type="button">Editar</button></td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => delRecords(expense.id) }
                >
                  Exlcuir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          { this.handleValue() }
          { this.handleDescription() }
          { this.handleCurrency() }
          { this.handlePayment() }
          { this.handleCategory() }
          <button
            type="button"
            onClick={ this.handleState }
          >
            Adicionar despesa
          </button>
        </form>
        TrybeWallet
        { this.handleTableWallet() }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencys: () => dispatch(addCurrencyApiThunk()),
  wallets: (state) => dispatch(addRecordWallet(state)),
  delRecords: (id) => dispatch(delRecord(id)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  getCurrencys: Proptypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
