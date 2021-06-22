import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchtApiExchange from '../services/ApiExchange';
import {
  fetchExchangeApi,
  expensesCurriencies,
  exchangeRates,
} from '../actions/index';

class ExchangeCurrency extends Component {
  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { fetchReducer, funcExchangeRates } = this.props;
    const fet = await fetchtApiExchange();
    console.log(fet);
    const exchangeFiltered = {};
    Object.entries(fet).forEach(([key, value]) => {
      if (key !== 'USDT') { exchangeFiltered[key] = value; }
    });
    fetchReducer(exchangeFiltered);
    funcExchangeRates(exchangeFiltered);
  }

  coinsOptions() {
    const { exchange } = this.props;
    Object.keys(exchange).map((coin, index) => (coin !== 'USDT'
      ? <option key={ index }>{coin}</option> : null));
  }

  render() {
    const { exchange, inputcurriencies } = this.props;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            name="moeda"
            onChange={ (event) => {
              inputcurriencies(event.target.value);
            } }
          >
            {Object.keys(exchange).map((coin, index) => (
              <option key={ index }>{coin}</option>))}
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  exchange: state.wallet2.actualExchange,
  exchangeRatesState: state.wallet2.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  fetchReducer: (data) => dispatch(fetchExchangeApi(data)),
  inputcurriencies: (currency) => dispatch(expensesCurriencies(currency)),
  funcExchangeRates: (rates) => dispatch(exchangeRates(rates)),
});

ExchangeCurrency.propTypes = {
  exchange: PropTypes.objectOf(PropTypes.shape({
    ask: PropTypes.string.isRequired,
    bid: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    codein: PropTypes.string.isRequired,
    create_date: PropTypes.string.isRequired,
    high: PropTypes.string.isRequired,
    low: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pctChange: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    varBid: PropTypes.string.isRequired,
  })).isRequired,
  fetchReducer: PropTypes.func.isRequired,
  inputcurriencies: PropTypes.func.isRequired,
  funcExchangeRates: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeCurrency);

// RETIRADO DA LINHA 29
// fetchApiExchange() {
//   const { fetchReducer, inputExchangeRates } = this.props;
//   const apiExchangeFunction2 = async () => {
//     try {
//       const request = await fetch('https://economia.awesomeapi.com.br/json/all');
//       const datajson = await request.json();
//       return datajson;
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   apiExchangeFunction2();
//   const apiExchangeFunction = async () => {
//     try {
//       const request = await fetch('https://economia.awesomeapi.com.br/json/all');
//       const datajson = await request.json();
//       this.fetchApi();
//       const exchangeFiltered = {};
//       Object.entries(datajson).forEach(([key, value]) => {
//         if (key !== 'USDT') { exchangeFiltered[key] = value; }
//       });
//       fetchReducer(exchangeFiltered);
//       inputExchangeRates(exchangeFiltered);
//       // console.log(exchangeFiltered);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   apiExchangeFunction();
// }
