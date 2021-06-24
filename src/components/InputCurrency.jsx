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
    const { currencies } = this.props;
    currencies.splice(1, 1);
    return (
      <form>
        <label htmlFor="moedas">
          Moeda
          <select
            className="input"
            name="moedas"
            id="moedas"
          >
            {currencies.map((currency) => (
              <option key={ currency.code } value={ currency.code }>
                { currency.code }
              </option>
            ))}
          </select>
        </label>
      </form>
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
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputCurrency);

// refs:
// tive ajuda do colega Andy https://github.com/tryber/sd-010-a-project-trybewallet/pull/75/
// doc splice https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
