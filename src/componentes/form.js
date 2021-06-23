import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getApi from '../getApi';
import { dispatchAddGasto } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: { },
    };
  }

  componentDidMount() {
    getApi().then((data) => { this.setState({ exchangeRates: data }); });
  }

  input() {
    const { exchangeRates, value, description, currency, method, tag, id } = this.state;
    console.log(exchangeRates, value, description, currency, method, tag, id);
    const currenciesArray = Object.keys(exchangeRates).filter((c) => c !== 'USDT');
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

  async handleClick() {
    const { addExpences, expenses } = this.props;
    const id = expenses.length;
    const getFetch = await getApi();
    this.setState({ exchangeRates: getFetch });

    await addExpences({
      id,
      ...this.state,
    });
  }

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
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => this.handleClick() }
        >
          Adicionar despesa
        </button>
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
  addExpences: (payload) => dispatch(dispatchAddGasto(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  user: PropTypes.string,
  email: PropTypes.string,
}.isRiquered;
