import React from 'react';

const API = 'https://economia.awesomeapi.com.br/json/all';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: {},
    };
  }

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ coins: data });
      });
  }

  render() {
    const { coins } = this.state;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" name="value" aria-label="Valor" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea type="text" name="description" aria-label="Descrição" />
        </label>
        <label htmlFor="coins">
          Moeda
          <select name="coins" aria-label="Moeda">
            {Object.keys(coins).filter((coin) => coin !== 'USDT').map((coin) => (
              <option key={ coin }>
                {' '}
                {coin}
                {' '}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select name="payment" aria-label="Método de Pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" aria-label="Tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Forms;
