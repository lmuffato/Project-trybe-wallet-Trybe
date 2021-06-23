import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchtApiExchange from '../services/ApiExchange';
import {
  expensesCurriency,
  currencies,
} from '../actions/index';

class ExchangeCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disponibleCurrencies: [],
    };
    this.disponibleCurrencies = this.disponibleCurrencies.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { funcCurrencies } = this.props;
    const responseApiJson = await fetchtApiExchange();
    funcCurrencies(responseApiJson);
    this.disponibleCurrencies(responseApiJson);
  }

  disponibleCurrencies(fechtCurrencies) {
    const filtredCurrencies = {};
    Object.entries(fechtCurrencies).forEach(([key, value]) => {
      if (key !== 'USDT') { filtredCurrencies[key] = value; }
    });
    this.setState({ disponibleCurrencies: filtredCurrencies });
  }

  render() {
    const { funcCurriency, actualCurrency } = this.props;
    const { disponibleCurrencies } = this.state;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            name="moeda"
            value={ actualCurrency }
            onChange={ (event) => {
              funcCurriency(event.target.value);
            } }
          >
            {Object.keys(disponibleCurrencies).map((coin, index) => (
              <option key={ index }>{coin}</option>))}
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  actualCurrency: state.wallet.currency,
  actualCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  funcCurrencies: (data) => dispatch(currencies(data)), // wallet sate: currencies
  funcCurriency: (currency) => dispatch(expensesCurriency(currency)), // state: currency
});

ExchangeCurrency.propTypes = {
  // exchange: PropTypes.objectOf(PropTypes.shape({
  //   ask: PropTypes.string.isRequired,
  //   bid: PropTypes.string.isRequired,
  //   code: PropTypes.string.isRequired,
  //   codein: PropTypes.string.isRequired,
  //   create_date: PropTypes.string.isRequired,
  //   high: PropTypes.string.isRequired,
  //   low: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   pctChange: PropTypes.string.isRequired,
  //   timestamp: PropTypes.string.isRequired,
  //   varBid: PropTypes.string.isRequired,
  // })).isRequired,
  actualCurrency: PropTypes.string.isRequired,
  funcCurrencies: PropTypes.func.isRequired,
  funcCurriency: PropTypes.func.isRequired,
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
