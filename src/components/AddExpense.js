import React from 'react';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayObjCoin: [],
    };

    this.coin = this.coin.bind(this);
  }

  componentDidMount() {
    this.getCoin();
  }

  async getCoin() {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const arrayCoins = await data.json();
    delete arrayCoins.USDT;

    const arrayObjCoin = Object.values(arrayCoins);
    this.setState({ arrayObjCoin });
  }

  spend() {
    return (
      <label htmlFor="spent">
        valor:
        <input type="text" id="spent" />
      </label>
    );
  }

  coin() {
    const { arrayObjCoin } = this.state;

    return (
      <label htmlFor="coin">
        moeda:
        <select type="text" id="coin">
          {arrayObjCoin.map(({ code }, i) => (
            <option key={ i } value={ code }>{code}</option>
          ))}
        </select>
      </label>
    );
  }

  paymentMethod() {
    return (
      <label htmlFor="paymentMethod">
        método de pagamento:
        <select type="text" id="paymentMethod">
          <option value="money">Dinheiro</option>
          <option value="credit">Crédito</option>
          <option value="debit">Débito</option>
        </select>
      </label>
    );
  }

  tag() {
    return (
      <label htmlFor="tag">
        tag:
        <select type="text" id="tag">
          <option value="money">Alimentação</option>
          <option value="credit">Lazer</option>
          <option value="debit">Trabalho</option>
          <option value="debit">Transporte</option>
          <option value="debit">Saúde</option>
        </select>
      </label>
    );
  }

  description() {
    return (
      <label htmlFor="description">
        descrição:
        <input type="" id="description" />
      </label>
    );
  }

  render() {
    return (
      <div className="add-dispense">
        <form>
          {this.spend()}
          {this.coin()}
          {this.paymentMethod()}
          {this.tag()}
          {this.description()}
        </form>
      </div>
    );
  }
}

export default AddExpense;
