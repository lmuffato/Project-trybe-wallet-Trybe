import React from 'react';
import fetchCurrency from '../services/api';
import './Wallet.css';
import Header from '../components/Header';
import TypeSelect from '../components/TypeSelect';
import Payment from '../components/Payment';
import Value from '../components/Value';
import Description from '../components/Description';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      inputValue: '',
      description: '',
    };
  }

  componentDidMount() {
    this.handleCurrency();
  }

  async handleCurrency() {
    const obj = await fetchCurrency();
    const array = Object.keys(obj);
    array.splice(1, 1);
    this.setState({ currencies: array });
  }

  render() {
    const { currencies, inputValue, description } = this.state;
    return (
      <>
        <Header />
        <form className="form-wallet">
          <Value
            handleValue={ (e) => this.setState({ inputValue: e.target.value }) }
            inputValue={ inputValue }
          />
          <Description
            handleDescription={ (e) => this.setState({ description: e.target.value }) }
            description={ description }
          />
          <label htmlFor="moneyCurrency">
            Moeda:
            <select id="moneyCurrency">
              {currencies.map((cur) => (
                <option value={ cur } key={ cur }>{cur}</option>
              ))}
            </select>
          </label>
          <Payment />
          <TypeSelect />
        </form>
      </>
    );
  }
}

export default Wallet;
