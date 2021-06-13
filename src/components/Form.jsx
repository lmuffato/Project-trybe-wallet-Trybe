import React, { Component } from 'react';
import Input from './Input';
import InputSelect from './inputSelect';

export default class Form extends Component {
  // constructor() {
  // super();
  // this.state = {
  // coins: ['USD'],
  // };
  // }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const objJson = await api.json();
    const obj = await objJson;
    const arr = Object.keys(obj);
    return arr;
    // const arrFilter = arr.filter((index) => index !== 'USDT' && index !== 'DOGE');
    // this.setState({ coins: arrFilter });
  }

  render() {
    // const { value } = this.state;
    return (
      <form>
        <Input
          type="number"
          name="value"
          // value={ value }
          textLabel="Valor"
          htmlFor="Valor"
        />
        <Input
          type="text"
          name="description"
          textLabel="Descrição"
          htmlFor="Descrição"
        />
        <InputSelect
          htmlFor="Moeda"
          name="moeda"
          textLabel="Moeda"
          // arrayOption={ coins }
        />
        <InputSelect
          htmlFor="Método de pagamento"
          name="Método de pagamento"
          textLabel="Método de pagamento"
          // arrayOption={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        />
        <InputSelect
          htmlFor="tag"
          name="tag"
          textLabel="Tag"
          // arrayOption={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        />
        <input
          type="button"
          value="Adicionar despesa"
        />
      </form>
    );
  }
}
