import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { paymentTypes, tags } from '../services/formData';

class Selects extends React.Component {
  render() {
    const { currencies, handleChange, states: { currency, method, tag } } = this.props;
    return (
      <>
        <label htmlFor="currency">
          Moeda:
          <select
            type="text"
            name="currency"
            id="currency"
            defaultValue={ currency }
            data-testid="currency-input"
            onChange={ handleChange }
          >
            {currencies.map((currentCurrency) => (
              <option key={ currentCurrency }>{currentCurrency}</option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select
            type="text"
            name="method"
            id="payment"
            defaultValue={ method }
            data-testid="method-input"
            onChange={ handleChange }
          >
            {paymentTypes.map((payment) => <option key={ payment }>{payment}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select
            type="text"
            name="tag"
            id="tag"
            defaultValue={ tag }
            data-testid="tag-input"
            onChange={ handleChange }
          >
            {tags.map((currentTag) => <option key={ currentTag }>{currentTag}</option>)}
          </select>
        </label>
      </>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

export default connect(mapStateToProps, null)(Selects);

Selects.propTypes = {
  currencies: PropTypes.array,
  handleChange: PropTypes.func,
  state: PropTypes.shape({
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }),
}.isRequired;
