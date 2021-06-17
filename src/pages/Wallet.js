import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/header';
import { addDespesa } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    const tag = this.alimentos();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      filtered: [],
      expenses: {
        currency: 'USD',
        tag,
        method: 'Dinheiro',
        value: 0,
        description: '',
        exchangeRates: {},
      },
    };
  }

  componentDidMount() {
    this.currencyAPI();
  }

  alimentos() {
    return ('Alimentação');
  }

  async currencyAPI() {
    const fetc = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetc.json();
    const filter = Object.keys(response)
      .filter((cur) => (cur !== 'USDT'));
    this.setState({ filtered: filter,
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

  async clearInputs() {
    const fetc = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetc.json();
    const tag = this.alimentos();
    const { expenses } = this.state;
    const { despesa } = this.props;
    expenses.exchangeRates = response;
    document.getElementById('currency').value = 'USD';
    document.getElementById('tag').value = { tag };
    document.getElementById('method').value = 'Dinheiro';
    document.getElementById('value').value = 0;
    document.getElementById('description').value = '';
    despesa({ ...expenses });
    this.setState({
      expenses: {
        currency: 'USD',
        tag,
        method: 'Dinheiro',
        value: 0,
        description: '',
        exchangeRates: {},
      },
    });
  }

  handleClick() {
    this.clearInputs();
  }

  currencyOptions() {
    const { filtered } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" onChange={ (e) => this.handleChange(e) }>
          {
            Object.values(filtered)
              .map((cur, i) => (
                <option
                  key={ i }
                  value={ cur }
                  name="currency"
                >
                  {cur }
                </option>))
          }
        </select>
      </label>
    );
  }

  paymentMethod() {
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          onChange={ (e) => this.handleChange(e) }
        >
          <option value="Dinheiro" name="method">Dinheiro</option>
          <option
            value="Cartão de crédito"
            name="method"
          >
            Cartão de crédito
          </option>
          <option value="Cartão de débito" name="method">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tagOptions() {
    const tag = this.alimentos();
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" onChange={ (e) => this.handleChange(e) }>
          <option value={ tag } name="tag">{tag}</option>
          <option value="Lazer" name="tag">Lazer</option>
          <option value="Trabalho" name="tag">Trabalho</option>
          <option value="Transporte" name="tag">Transporte</option>
          <option value="Saúde" name="tag">Saúde</option>
        </select>
      </label>
    );
  }

  DescriptionInput() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
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
          <label htmlFor="value">
            Valor
            <input id="value" type="number" onChange={ (e) => this.handleChange(e) } />
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

Wallet.propTypes = {
  despesa: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  despesa: (e) => dispatch(addDespesa(e)),
});

export default connect(null, mapDispatchToProps)(Wallet);
