import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { apiThunk } from '../actions/wallet';

class InputCurrency extends React.Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { currencies, value, onChange } = this.props;
    if (currencies !== undefined) {
      return (
        <form>
          <label htmlFor="currency">
            Moeda
            <select
              value={ value }
              onChange={ onChange }
              className="input"
              name="currency"
              id="currency"
            >
              {currencies.map((currency) => (
                <option key={ currency } value={ currency }>
                  { currency }
                </option>
              ))}
            </select>
          </label>
        </form>
      );
    } return (
      <div>loading...</div>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  test: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(apiThunk()),
});

InputCurrency.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  getCurrency: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(InputCurrency);
