/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, fetchCurrencyOnClick } from '../../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      currencies: [],
      value: '',
      description: '',
      currency: 'USD',
      method: 'Cartão de Crédito',
      tag: 'Alimentação',
      paymentMethods: ['Cartão de crédito', 'Dinheiro', 'Cartão de débito'],
      tagArray: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    });

    this.handleCurrencies = this.handleCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { fetchAPI } = this.props;

    await fetchAPI();

    this.handleCurrencies();
  }

  handleCurrencies() {
    const { currencies } = this.props;
    const arrayOfCurrencies = Object.keys(currencies);
    const treatedCurrencies = [];

    arrayOfCurrencies.map((currency) => (
      currency !== 'USDT' && treatedCurrencies.push(currency)
    ));

    this.setState({
      currencies: treatedCurrencies,
    });
  }

  handleChange(event, key) {
    this.setState({ [key]: event.target.value });
  }

  makeSelect(label, array, name, chave) {
    return (
      <label htmlFor={ name }>
        { label }
        <select
          name={ name }
          id={ name }
          value={ chave }
          onChange={ (event) => this.handleChange(event, name) }
        >
          {array.map((item, key) => (
            <option value={ item } key={ key }>{ item }</option>
          ))}
        </select>
      </label>
    );
  }

  handleClick(event) {
    const { value, description, currency, method, tag } = this.state;
    const { expenses, updateCurrency } = this.props;
    let id = 0;

    if (expenses.length > 0) {
      id = (expenses[expenses.length - 1].id + 1);
    }

    const expObj = { id, value, currency, method, tag, description };

    updateCurrency(expObj);

    event.preventDefault();
  }

  render() {
    const { currencies, value, description, paymentMethods,
      tagArray, currency, method, tag } = this.state;

    return (
      <form>
        <h4>Nova Despesa</h4>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            name="valor"
            id="valor"
            value={ value }
            onChange={ (event) => this.handleChange(event, 'value') }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            name="descricao"
            id="descricao"
            value={ description }
            onChange={ (event) => this.handleChange(event, 'description') }
          />
        </label>
        {this.makeSelect('Moeda', currencies, 'currency', currency)}
        {this.makeSelect('Método de pagamento', paymentMethods, 'method', method)}
        {this.makeSelect('Tag', tagArray, 'tag', tag)}
        <button
          type="submit"
          onClick={ (event) => this.handleClick(event) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  // email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.currenciesOnCLick,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchCurrency()),
  updateCurrency: (payload, total) => dispatch(fetchCurrencyOnClick(payload, total)),
});

Form.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  })).isRequired,
  fetchAPI: PropTypes.func.isRequired,
  updateCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
