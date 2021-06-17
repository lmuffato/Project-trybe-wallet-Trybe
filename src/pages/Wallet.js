import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import { expense } from './index';
import { addDespesa } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      exchange: {},
      expenses: expense,
    };
  }

  componentDidMount() {
    this.currencyAPI();
  }

  async currencyAPI() {
    const fetc = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetc.json();
    const filtered = Object.values(response).filter((cur) => cur !== 'USDT');
    this.setState({
      exchange: filtered,
    });
  }

  handleChange({ target }) {
    const { id, value } = target;
    const { expenses } = this.state;
    expenses[id] = value;
    this.setState({
      expenses,
    });
  }

  clearInputs() {
    const { expenses, exchange } = this.state;
    const { despesa } = this.props;
    const position = expenses.length - 1;
    if (expenses.exchangeRates.length === 0) {
      expenses.exchangeRates.push(exchange);
    }
    document.getElementById('currency').value = 'USD';
    document.getElementById('tag').value = 'ali';
    document.getElementById('payment_method').value = 'din';
    document.getElementById('despesa').value = 0;
    document.getElementById('despesa_description').value = '';
    despesa({ ...expenses });
    this.setState({
      expenses: {
        id: expenses.id + 1,
        currency: 'USD',
        tag: 'ali',
        payment_method: 'din',
        despesa: 0,
        despesa_description: '',
        exchangeRates: [],
      },
    });
  }

  handleClick() {
    this.clearInputs();
  }

  currencyOptions() {
    const { exchange } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" onChange={ (e) => this.handleChange(e) }>
          {
            Object.values(exchange)
              .map((cur, i) => (
                <option
                  key={ i }
                  value={ cur.code }
                  name="currency"
                >
                  {cur.code}
                </option>))
          }
        </select>
      </label>
    );
  }

  paymentMethod() {
    return (
      <label htmlFor="payment_method">
        Método de pagamento
        <select
          id="payment_method"
          name="payment_method"
          onChange={ (e) => this.handleChange(e) }
        >
          <option value="din" name="payment_method">Dinheiro</option>
          <option value="cdc" name="payment_method">Cartão de crédito</option>
          <option value="cdd" name="payment_method">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tagOptions() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" onChange={ (e) => this.handleChange(e) }>
          <option value="ali" name="tag">Alimentação</option>
          <option value="laz" name="tag">Lazer</option>
          <option value="tra" name="tag">Trabalho</option>
          <option value="tre" name="tag">Transporte</option>
          <option value="sau" name="tag">Saúde</option>
        </select>
      </label>
    );
  }

  DescriptionInput() {
    return (
      <label htmlFor="despesa_description">
        Descrição
        <input
          id="despesa_description"
          type="text"
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="despesa">
            Valor
            <input id="despesa" type="number" onChange={ (e) => this.handleChange(e) } />
          </label>
          {this.DescriptionInput()}
          {this.paymentMethod()}
          {this.currencyOptions()}
          {this.tagOptions()}
          <button type="button" onClick={ (e) => this.handleClick(e) }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  despesa: (e) => dispatch(addDespesa(e)),
});

export default connect(null, mapDispatchToProps)(Wallet);
