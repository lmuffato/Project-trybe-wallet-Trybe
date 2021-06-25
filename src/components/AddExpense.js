import React from 'react';

class AddExpense extends React.Component {
  spend() {
    return (
      <label htmlFor="spent">
        valor:
        <input type="text" id="spent" />
      </label>
    );
  }

  coin() {
    return (
      <label htmlFor="coin">
        moeda:
        <select type="text" id="coin">
          <option value="USD">USD</option>
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
