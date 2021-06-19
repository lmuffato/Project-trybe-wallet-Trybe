import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Currency extends Component {
  constructor() {
    super();
    this.filteredCoin = this.filteredCoin.bind(this);
  }

  filteredCoin() {
    const { apiCoin } = this.props;
    const currencyList = Object.keys(apiCoin).filter((coin) => coin !== 'USDT');
    return (
      currencyList.map((coin, index) => (
        <option key={ index } value={ coin }>{ coin }</option>
      ))
    );
  }

  render() {
    const { handleChange } = this.props;
    this.filteredCoin();
    return (
      <label htmlFor="currency">
        Moeda
        <select
          onChange={ handleChange }
          name="currency"
          id="currency"
        >
          {this.filteredCoin()}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  apiCoin: state.wallet.currencies,
});

Currency.defaultProps = {
  apiCoin: {},
};

Currency.propTypes = {
  apiCoin: PropTypes.objectOf(PropTypes.object),
  handleChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Currency);
