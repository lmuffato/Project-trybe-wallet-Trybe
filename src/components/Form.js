import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendCurrencies } from '../actions';
import fetchCurrenciesApi from '../services/currenciesAPI';

class Form extends Component {
  constructor(props) {
    super(props);

    this.dispatchCurrencies = this.dispatchCurrencies.bind(this);
  }

  componentDidMount() {
    this.dispatchCurrencies();
  }

  async dispatchCurrencies() {
    const { sendCurrenciesToRedux } = this.props;
    const currencies = await fetchCurrenciesApi();
    sendCurrenciesToRedux(currencies);
  }

  render() {
    const { currencies } = this.props;
    const currenciesName = Object.keys(currencies);
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" />
        </label>
        <label htmlFor="expense-description">
          Descrição
          <input type="text" id="expense-description" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {currenciesName.map((currency, index) => (
              <option key={ index }>{currency}</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
  sendCurrenciesToRedux: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  sendCurrenciesToRedux: (currencies) => dispatch(sendCurrencies(currencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
