import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencyThunk } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      payment: ['Dinheiro',
        'Cartão de débito',
        'Cartão de crédito'],
      tag: ['Alimentação',
        'Lazer',
        'Trabalho',
        'Transporte',
        'Saúde',
      ],
    };
  }

  componentDidMount() {
    const { currency } = this.props;
    currency();
  }

  render() {
    const { payment, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input type="text" id="value-input" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input type="text" id="description-input" />
        </label>
        <label htmlFor="currency-select">
          Moeda
          <select id="currency-select">
            {currencies.map((currency, key) => <option key={ key }>{currency}</option>)}
          </select>
        </label>
        <label htmlFor="payment-type">
          Método de pagamento
          <select id="payment-type">
            {payment.map((method, key) => <option key={ key }>{method}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            {tag.map((type, key) => <option key={ key }>{type}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  currency: () => dispatch(getCurrencyThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
