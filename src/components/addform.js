import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';

class AddForm extends React.Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { currencies } = this.props;
    const currencyFilter = Object.keys(currencies)
      .filter((currency) => currency !== 'USDT');
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" data-testid="value-input" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" data-testid="description-input" id="description" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            { currencyFilter.map((currency) => (
              <option key={ currency }>{ currency }</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select data-testid="payment-input" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select data-testid="tag-input" id="tag">
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

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

AddForm.propTypes = {
  currencies: propTypes.objectOf(propTypes.string),
  getCurrency: propTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
