import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThunkAPI } from '../../actions';

class SelectedCoinInput extends React.Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    const { currencies, localValue, onChange } = this.props;

    if (currencies !== undefined) {
      return (
        <label htmlFor="moedaSelected">
          Moeda:
          <select
            id="moedaSelected"
            name="selectedCoin"
            value={ localValue }
            onChange={ onChange }
          >
            {currencies.map((coin) => (
              <option value={ coin } key={ coin }>
                {coin}
              </option>
            ))}
          </select>
        </label>
      );
    } return (
      <div>Loading</div>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.coins,
});

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(ThunkAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCoinInput);

SelectedCoinInput.propTypes = {
  onChange: PropTypes.func,
  localValue: PropTypes.string,
}.isRequired;
