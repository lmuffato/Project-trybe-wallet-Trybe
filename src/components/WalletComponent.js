import React from 'react';
import { connect } from 'react-redux';
import { tagItems, paymentMethods } from './walletIndex';
import { storeExpenses } from '../actions/index'
// import PropTypes from 'prop-types';

class WalletComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyAPI: {},
      totalValue:0,
      value: 0,
      description: '',
      currency:'',
      paymentMethod: '',
      tag:'',

    };
    this.getAPI = this.getAPI.bind(this);
    this.handle = this.handle.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handle({ target: { value, name } }) {
    this.setState({ [name]: value });
  }
  handleClick (){
    const {currencyAPI, totalValue, value,
       description, currency, paymentMethod, tag} = this.state
    const arrayOfStates = [currencyAPI, totalValue, currency, value,
      description, currency, paymentMethod, tag]
      const {savingExpenses} = this.props
      savingExpenses(arrayOfStates)
  }

  // referência Object.keys = https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
  // referência Bruno trouxe a lógica do filter para tirarmos o USDT do array
  render() {
    const { currencyAPI, totalValue, value,
      description } = this.state;
    const currencyKeys = Object.keys(currencyAPI);
    console.log(storeExpenses)
    console.log(this.props)
    return (
      <form>
        <label htmlFor="total">
          Total Value:
          <input type="number" data-testid="total-field" id="total" value={totalValue} onChange={this.handle} name="totalValue" />
        </label>
        <label htmlFor="currency">
          Currency:
          <input type="dropdown" data-testid="header-currency-field" value="BRL" onChange ={this.handle}/>
        </label>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" value={value} onChange ={this.handle}/>
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" value={description} onChange={this.handle} />
        </label>
        <label htmlFor="countryCurrency">
          Moeda
          <select type="text" name="currency" id="countryCurrency" onChange={this.handle} >
            {currencyKeys.filter((key) => key !== 'USDT')
              .map((pay, index) => <option key={ index }>{ pay }</option>)}
            );
          </select>
        </label>
        <label htmlFor="payments">
          Método de pagamento
          <select type="text" name="paymentMethod" id="payments" onChange = {this.handle}>
            {
              paymentMethods.map((pay, index) => (<option key={ index }>{pay}</option>))
            }
          </select>
        </label>
        <label htmlFor="itemExpenses">
          Tag
          <select type="text" name="tag" id="itemExpenses" onChange = {this.handle}>
            {
              tagItems.map((tag, index) => (<option key={ index }>{tag}</option>))
            }
          </select>
        </label>
        <button type ="button" onClick={this.handleClick}>Adicionar despesa</button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  savingExpenses: (expenses) => dispatch(storeExpenses(expenses)),
}
);

export default connect(null, mapDispatchToProps)(WalletComponent);
