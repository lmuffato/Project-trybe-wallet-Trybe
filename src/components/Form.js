import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Textinput from './Textinput';
import { getCurrenciesThunk } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    const currenciesAcronyms = Object.keys(currencies)
      .filter((currency) => currency !== 'USDT');
    return (
      <form>
        <Textinput />
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
          >
            { currenciesAcronyms.map((currencyAcronym) => (
              <option
                key={ currencyAcronym }
                value={ currencyAcronym }
              >
                { currencyAcronym }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select
            name="payment"
            id="payment"
          >
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debt">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
          >
            <option value="food">Alimentação</option>
            <option value="lasure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
