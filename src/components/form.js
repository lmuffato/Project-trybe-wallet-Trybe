import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyOpt: [],
    };
  }

  componentDidMount() {
    this.currencyAPI();
  }

  async currencyAPI() {
    const fetc = await fetch(' https://economia.awesomeapi.com.br/json/all');
    const response = await fetc.json();
    const filtered = Object.keys(response).filter((cur) => cur !== 'USDT');
    this.setState({
      currencyOpt: filtered,
    });
  }

  currencyOptions() {
    const { currencyOpt } = this.state;
    return (
      <form>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            {Object.values(currencyOpt)
              .map((cur, i) => (
                <option
                  key={ i }
                  value={ cur }
                  name="currency"
                >
                  {cur}
                </option>))}
          </select>
        </label>
      </form>
    );
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="despesa">
            Valor
            <input id="despesa" type="number" />
          </label>
          <label htmlFor="despesa_description">
            Descrição
            <input id="despesa_description" type="text" />
          </label>
          {this.currencyOptions()}
          <label htmlFor="payment_method">
            Moeda
            <select id="payment_method" name="payment_method">
              <option value="din" name="payment_method">Dinheiro</option>
              <option value="cdc" name="payment_method">Cartão de crédito</option>
              <option value="cdd" name="payment_method">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Moeda
            <select id="tag" name="tag">
              <option value="ali" name="tag">Alimentação</option>
              <option value="laz" name="tag">Lazer</option>
              <option value="tra" name="tag">Trabalho</option>
              <option value="tre" name="tag">Transporte</option>
              <option value="sau" name="tag">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
