import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tagItems, paymentMethods } from './walletIndex';
import { exchangeRates } from '../actions/index';
import WalletTable from './WalletTable';
// import PropTypes from 'prop-types';

class WalletComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyAPI: {},
      id: 0,
      totalValue: 0,
      value: 0,
      description: '',
      currency: '',
      paymentMethod: '',
      tag: '',
    };
    this.getAPI = this.getAPI.bind(this);
    this.handle = this.handle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.text = this.text.bind(this);
  }

  componentDidMount() {
    this.getAPI();
  }

  async getAPI() {
    const baseUrl = 'https://economia.awesomeapi.com.br/json/all';
    const endPoint = await fetch(baseUrl);
    const resolve = await endPoint.json();
    this.setState({ currencyAPI: resolve });
  }

  text(handle, value, description, currencyKeys) {
    return (
      <>
        <label htmlFor="currency">
          Currency:
          <input
            type="dropdown"
            data-testid="header-currency-field"
            value="BRL"
            onChange={ handle }
          />
        </label>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            name="value"
            id="value"
            value={ value }
            onChange={ handle }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ handle }
          />
        </label>
        <label htmlFor="countryCurrency">
          Moeda
          <select
            type="text"
            name="currency"
            id="countryCurrency"
            onChange={ handle }
          >
            {currencyKeys.filter((key) => key !== 'USDT')
              .map((pay, index) => <option key={ index }>{ pay }</option>)}
            );
          </select>
        </label>
      </>
    );
  }

  handle({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    // const {exchangeRates} = this.props
    const { data } = this.props;
    const { totalValue, value,
      description, currency, paymentMethod, tag, id } = this.state;
    const object = { totalValue,
      value,
      description,
      currency,
      paymentMethod,
      tag,
      id };
    this.setState({
      id: id + 1,
    });
    data(object);
  }

  // referência Object.keys = https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
  // referência Bruno trouxe a lógica do filter para tirarmos o USDT do array
  render() {
    const { currencyAPI, value,
      description } = this.state;
    const currencyKeys = Object.keys(currencyAPI);
    const { expenses, total } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="total">
            Total Value:
            <input
              type="number"
              data-testid="total-field"
              id="total"
              value={ total }
              onChange={ handle }
              name="totalValue"
            />
          </label>
          {this.text(this.handle, value, description, currencyKeys)}
          <label htmlFor="payments">
            Método de pagamento
            <select
              type="text"
              name="paymentMethod"
              id="payments"
              onChange={ this.handle }
            >
              {
                paymentMethods.map((pay, index) => (<option key={ index }>{pay}</option>))
              }
            </select>
          </label>
          <label htmlFor="itemExpenses">
            Tag
            <select type="text" name="tag" id="itemExpenses" onChange={ this.handle }>
              {
                tagItems.map((tag, index) => (<option key={ index }>{tag}</option>))
              }
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
        <WalletTable expenses={ expenses } />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  data: (state) => dispatch(exchangeRates(state)),
});

WalletComponent.propTypes = {
  data: PropTypes.func.isRequired,
  expenses: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletComponent);
