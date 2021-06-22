import React from 'react';

class InputPayment extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            name="pagamento"
            id="pagamento"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-credito">Cartão de crédito</option>
            <option value="cartao-debito">Cartão de débito</option>
          </select>
        </label>
      </form>
    );
  }
}

export default InputPayment;
