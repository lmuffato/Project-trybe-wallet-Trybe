/* eslint-disable no-trailing-spaces */
import React from 'react';
import { connect } from 'react-redux';
import getApi from '../getApi';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: { },
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    getApi().then((data) => { this.setState({ currencies: data }); });
  }

  addGasto() {

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { currencies, value, description, currency, method, tag } = this.state;
    console.log(currencies, value, description, currency, method, tag);
    const currenciesArray = Object.keys(currencies).filter((c) => c !== 'USDT');
    return (
      <form>
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
          <select id="id_moeda" name="currency" onChange={ (e) => this.handleChange(e) }>
            { currenciesArray.map((currencie) => (
              <option key={ currencie }>
                {currencie}
              </option>))}
          </select>
        </label>
        <label htmlFor="id_metodo_pagamento" onChange={ (e) => this.handleChange(e) }>
          Método de pagamento
          <select 
            id="id_metodo_pagamento" 
            name="method" 
            onChange={ (e) => this.handleChange(e) }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito" selected>Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="id_Tag">
          Tag
          <select id="id_Tag" name="tag" onChange={ (e) => this.handleChange(e) }>
            <option value="valor1">Alimentação</option>
            <option value="valor2" selected>Lazer</option>
            <option value="valor3">Trabalho</option>
            <option value="valor3">Transporte</option>
            <option value="valor3">Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
