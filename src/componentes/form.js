import React from 'react';
import { connect } from 'react-redux';
import getApi from '../getApi';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: { },
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
    };
  }

  componentDidMount() {
    getApi().then((data) => { this.setState({ currencies: data }); });
  }

  input() {
    const { currencies, value, description, currency, method, tag, id } = this.state;
    console.log(currencies, value, description, currency, method, tag, id);
    const currenciesArray = Object.keys(currencies).filter((c) => c !== 'USDT');
    console.log(currenciesArray);
    return (
      <>
        <label htmlFor="id_valor">
          Valor
          <input
            type="number"
            name="value"
            id="id_valor"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="id_descricao">
          Descrição
          <input
            type="text"
            id="id_descricao"
            name="description"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="id_moeda">
          Moeda
          <select
            id="id_moeda"
            name="currency"
            onChange={ (e) => this.handleChange(e) }
          >
            { currenciesArray.map((currencie) => (
              <option key={ currencie }>
                {currencie}
              </option>))}
          </select>
        </label>
      </>
    );
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleButton(addExpences, expence) {
    addExpences(expence);
    const { id } = this.state;

    this.setState({ id: id + 1 });
  }

  // async handleClick() {
  //   const { expensesDispach, expensesState, currenciesDispatch } = this.props;
  //   const id = expensesState.length;
  //   const getApi = await getApi();
  //   await expensesDispach({
  //     id,
  //     ...this.state,
  //     exchangeRates: getApi,
  //   });
  // }

  render() {
    return (
      <form>
        { this.input() }
        <label htmlFor="id_metodo_pagamento" onChange={ (e) => this.handleChange(e) }>
          Método de pagamento
          <select
            id="id_metodo_pagamento"
            name="method"
            onChange={ (e) => this.handleChange(e) }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="id_Tag">
          Tag
          <select id="id_Tag" name="tag" onChange={ (e) => this.handleChange(e) }>
            <option value="valor1">Alimentação</option>
            <option value="valor2">Lazer</option>
            <option value="valor3">Trabalho</option>
            <option value="valor3">Transporte</option>
            <option value="valor3">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick=""
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
