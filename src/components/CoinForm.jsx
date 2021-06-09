import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getApiThunk } from '../actions';

class CoinForm extends Component {
  componentDidMount() {
    const { getApiResponse } = this.props;
    getApiResponse();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="coin">
          Moeda:
          <select id="coin">
            {currencies.map((curr) => (
              <option data-testid={ curr } key={ curr } value={ curr }>{curr}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getApiResponse: () => dispatch(getApiThunk()),
});

CoinForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  getApiResponse: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(CoinForm);
