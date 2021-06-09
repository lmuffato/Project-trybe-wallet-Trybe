import React, { Component } from 'react';

class ExpendForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" id="valor" name="Valor" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" name="Descrição" />
          </label>

          <label htmlFor="currencie">
            Moeda
            <select id="currencie" name="Moeda">
              <option value="valor1">Valor 1</option>
              <option value="valor2" selected>Valor 2</option>
              <option value="valor3">Valor 3</option>
            </select>
          </label>

          <label htmlFor="paymentMethod">
            Método de pagamento
            <select id="paymentMethod" name="Método de pagamento">
              <option value="money">Dinheiro</option>
              <option value="creditCard" selected>Cartão de crédito</option>
              <option value="debitCard">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag
            <select id="tag" name="Tag">
              <option value="food">Alimentação</option>
              <option value="leisure" selected>Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default ExpendForm;
