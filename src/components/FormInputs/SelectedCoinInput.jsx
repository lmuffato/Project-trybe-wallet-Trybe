import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThunkAPI } from '../../actions';

// src/components/InputCurrencies.js
class SelectedCoinInput extends React.Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    const { allCoins, localValue, onChange } = this.props;
    console.log('aqui alcoins');
    console.log(allCoins);
    return (
      <label htmlFor="moedaSelected">
        Moeda:
        <select
          id="moedaSelected"
          name="selectedCoin"
          value={ localValue }
          onChange={ onChange }
        >
          {allCoins.map((coin) => (
            <option value={ coin } key={ coin }>
              {coin}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
const mapStateToProps = (state) => ({
  allCoins: state.wallet.coins,
});

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(ThunkAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCoinInput);

SelectedCoinInput.propTypes = {
  onChange: PropTypes.func,
  localValue: PropTypes.string,
}.isRequired;
