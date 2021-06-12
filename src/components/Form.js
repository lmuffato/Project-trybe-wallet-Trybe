import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencyThunk, addToWallet, getTotalExpenses } from '../actions';
import Input from './Input';
import Index from './Table/Index.js';
import MethodSelect from './MethodSelect';
import TagSelect from './TagSelect';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
      exchangeRates: [],
    };
    this.handleData = this.handleData.bind(this);
    this.handleExchanges = this.handleExchanges.bind(this);
  }

  componentDidMount() {
    const { getApiThunk } = this.props;
    getApiThunk();
  }

  handleData({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleExchanges() {
    const { getApiThunk, currencies } = this.props;
    getApiThunk();
    this.setState((prevState) => ({
      id: prevState.id + 1,
      exchangeRates: currencies,
    }), () => this.totalExpenses());
  }

  totalExpenses() {
    const { value, currency } = this.state;
    const { addToWalletDispatch, getTotal, currencies } = this.props;
    const { USDT, ...rest } = currencies;
    let total = 0;
    const usedCurrencies = Object.values(rest).filter((rate) => (
      rate.code === currency));
    const converted = usedCurrencies.map((usedCurrency) => usedCurrency.ask * value);
    total += Number(converted).toFixed(2);
    addToWalletDispatch(this.state);
    getTotal(Number(total));
  }

  render() {
    const { currencies } = this.props;
    const currenciesToArray = Object.values(currencies);
    const filteredCurrencies = currenciesToArray.filter((currency) => (
      currency.codein !== 'BRLT'));
    return (
      <div>
        <form>
          <Input onChange={ this.handleData } description="Valor" name="value" />
          <label htmlFor="currency">
            Moeda
            <select onChange={ this.handleData } id="currency" name="currency">
              {filteredCurrencies.map((currency) => (
                <option
                  key={ currency.code }
                  value={ currency.code }
                >
                  {currency.code}
                </option>
              ))}
            </select>
          </label>
          <MethodSelect onChange={ this.handleData } />
          <TagSelect onChange={ this.handleData } />
          <Input
            onChange={ this.handleData }
            description="Descrição"
            name="description"
          />
          <button
            onClick={ this.handleExchanges }
            type="button"
          >
            Adicionar despesa

          </button>
        </form>
        <Index />
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getApiThunk: () => dispatch(getCurrencyThunk()),
  addToWalletDispatch: (state) => dispatch(addToWallet(state)),
  getTotal: (total) => dispatch(getTotalExpenses(total)),
});

Form.propTypes = {
  getTotal: PropTypes.func.isRequired,
  getApiThunk: PropTypes.func.isRequired,
  addToWalletDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
