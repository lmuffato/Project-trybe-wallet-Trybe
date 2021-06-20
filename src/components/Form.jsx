import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import InputSelect from './inputSelect';
import { saveWalletExpencies, fetchAPI, incrementCount } from '../actions';
import dataApi from '../service/api';

const strAliment = 'Alimentação';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      coinsInput: [],
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: strAliment,
    };
    this.saveExpenses = this.saveExpenses.bind(this);
    this.getStore = this.getStore.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { getApi } = this.props;
    await getApi();
    this.getStore();
  }

  getStore() {
    const { coins } = this.props;
    const arr = Object.keys(coins)
      .filter((coin) => coin !== 'USDT');
    this.setState({ coinsInput: arr });
    return arr;
  }

  handleChange(value, key) {
    this.setState({ [key]: value });
  }

  async saveExpenses() {
    const { addExpenses, array, addCount, number } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const exchangeRates = await dataApi();
    const id = number;
    delete exchangeRates.USDT;
    const obj = { id, value, description, currency, method, tag, exchangeRates };
    const createArr = array.concat(obj);
    console.log(createArr);
    addExpenses(obj);
    addCount();
    this.setState({ value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: strAliment,
    });
  }

  render() {
    const { coinsInput, value, description } = this.state;
    return (
      <form>
        <Input
          value={ value }
          type="number"
          name="value"
          textLabel="Valor"
          htmlFor="value"
          id="value"
          handleChange={ (e, nameTarget) => this.handleChange(e, nameTarget) }
        />
        <Input
          value={ description }
          type="text"
          name="description"
          textLabel="Descrição"
          htmlFor="description"
          id="description"
          handleChange={ (e, nameTarget) => this.handleChange(e, nameTarget) }
        />
        <InputSelect
          id="coin"
          htmlFor="coin"
          name="currency"
          textLabel="Moeda"
          arrayOption={ coinsInput }
          handleChange={ (e, nameTarget) => this.handleChange(e, nameTarget) }
        />
        <InputSelect
          htmlFor="payment"
          name="method"
          id="payment"
          textLabel="Método de pagamento"
          arrayOption={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          handleChange={ (e, nameTarget) => this.handleChange(e, nameTarget) }
        />
        <InputSelect
          htmlFor="tag"
          name="tag"
          id="tag"
          textLabel="Tag"
          arrayOption={ [strAliment, 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          handleChange={ (e, nameTarget) => this.handleChange(e, nameTarget) }
        />
        <input onClick={ this.saveExpenses } type="button" value="Adicionar despesa" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getApi: async () => dispatch(fetchAPI()),
  addExpenses: (data) => dispatch(saveWalletExpencies(data)),
  addCount: (number) => dispatch(incrementCount(number)),
});

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
  array: state.wallet.expenses,
  number: state.wallet.count,
});

Form.propTypes = {
  saveDatas: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
