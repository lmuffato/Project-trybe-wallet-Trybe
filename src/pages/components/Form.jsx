import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrency, addExpensesAction } from '../../actions';
import InputValueForms from './InputValueForms';
import InputDescriptionForms from './InputDescriptionForms';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  async handleClick(e) {
    e.preventDefault();
    const { state: { value, description, currency, paymentMethod, tag },
      props: { fetchCurrencies, addExpensesProps, updateExpenses } } = this;
    await fetchCurrencies();
    const { currenciesProps } = this.props;
    const inBRL = value * currenciesProps[currency].ask;
    addExpensesProps({
      value,
      description,
      currency,
      paymentMethod,
      tag,
      exchangeRates: currenciesProps,
    });
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
    });
    updateExpenses(inBRL);
  }

  render() {
    const {
      state: { value, description, currency, paymentMethod, tag },
      handleChange, props: { currenciesProps },
      handleClick,
    } = this;
    const currencies = Object.keys(currenciesProps)
      .filter((moeda) => (moeda !== 'USDT'));
    return (
      <form>
        <InputValueForms value={ value } handleChange={ handleChange } />
        <InputDescriptionForms
          description={ description }
          handleChange={ handleChange }
        />
        <label htmlFor="currency">
          Moeda:
          <select id="currency" value={ currency } onChange={ handleChange }>
            {currencies
              .map((moeda, index) => <option key={ index }>{ moeda }</option>)}
          </select>
        </label>

        <label htmlFor="paymentMethod">
          Método de pagamento:
          <select id="paymentMethod" value={ paymentMethod } onChange={ handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag" value={ tag } onChange={ handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <button type="submit" onClick={ handleClick }>Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesProps: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrency()),
  addExpensesProps: (payload) => dispatch(addExpensesAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  currenciesProps: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  addExpensesProps: PropTypes.func.isRequired,
  updateExpenses: PropTypes.func.isRequired,
};
