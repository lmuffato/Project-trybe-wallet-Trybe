import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiThunk, setMoedaAction } from '../../actions';

class Moeda extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencyFromAPI } = this.props;
    getCurrencyFromAPI();
  }

  handleChange({ target }) {
    const { setMoeda } = this.props;
    setMoeda(target.value);
  }

  render() {
    const { getCurrencies } = this.props;
    // const { USDT, ...newData } = data;
    return (
      <label htmlFor="select-currency">
        Moeda
        <select id="select-currency" onChange={ this.handleChange }>
          {getCurrencies.map((currency) => (
            <option value={ currency } key={ currency }>
              { currency }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencyFromAPI: () => dispatch(fetchApiThunk()),
  setMoeda: (state) => dispatch(setMoedaAction(state)),
});

const mapStateToProps = (state) => ({
  getCurrencies: state.wallet.currencies,
});

Moeda.propTypes = {
  getCurrencyFromAPI: PropTypes.func.isRequired,
  getCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  setMoeda: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Moeda);
