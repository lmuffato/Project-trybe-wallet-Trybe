import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      allList: {},
    };
  }

  componentDidMount() {
    this.currencies();
  }

  async currencies() {
    const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const allList = await fetchAPI.json();
    this.setState({ allList: allList });
  }

  render() {
    const { allList } = this.state;
    const allCurrencies = Object.keys(allList);
    const myCurrencies = allCurrencies.filter((currency) => currency !== 'USDT');
    return (
      <>
        <label htmlFor="valor">
          Valor
          <input id="valor" />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select type="select" id="currency">
            {myCurrencies.map((currency) => <option key={ currency }>{currency}</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select type="select" id="payment">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select type="select" id="category">
            <option value="food">Alimentação</option>
            <option value="hobie">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="moving">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

export default Form;
