import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk } from '../../../actions';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      tags: {
        food: 'Alimentação',
        leisure: 'Lazer',
        work: 'Trabalho',
        transport: 'Transporte',
        healthy: 'Saúde',
      },
      paymentOptions: {
        cash: 'Dinheiro',
        c_credit: 'Cartão de crédito',
        c_debit: 'Cartão de débito',
      },
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { tags, paymentOptions } = this.state;
    const { currencies } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" />
        </label>

        <label htmlFor="description">
          Descrição:
          <textarea id="description" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            { Object.keys(currencies).map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            )) }
          </select>
        </label>

        <label htmlFor="payment-option">
          Método de pagamento:
          <select id="payment-option">
            {Object.entries(paymentOptions).map(([value, name]) => (
              <option key={ value } value={ value }>{name}</option>
            ))}
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag">
            {Object.entries(tags).map(([value, name]) => (
              <option key={ value } value={ value }>{name}</option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

ExpensesForm.propTypes = {
  currencies: PropTypes.object,
  getCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
