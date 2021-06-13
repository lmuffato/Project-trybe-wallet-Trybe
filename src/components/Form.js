import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencyThunk, addToWallet } from '../actions';
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
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
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
    const { getApiThunk, currencies, addToWalletDispatch } = this.props;
    getApiThunk();
    this.setState((prevState) => ({
      id: prevState.id + 1,
      exchangeRates: currencies,
    }), () => addToWalletDispatch(this.state));
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
});

Form.propTypes = {
  getApiThunk: PropTypes.func.isRequired,
  addToWalletDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
